import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maxFileSize = 8 * 1024 * 1024;

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

function sanitizeFileName(value: string) {
  const extension = value.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const base = value
    .replace(/\.[^/.]+$/, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80);

  return `${base || "imagen"}-${Date.now()}.${extension}`;
}

export async function POST(request: Request) {
  try {
    const configuredToken = getRequiredEnv("SPACES_UPLOAD_TOKEN");
    const token = request.headers.get("x-upload-token") || "";

    if (!token || token !== configuredToken) {
      return NextResponse.json({ error: "Token de subida invalido." }, { status: 401 });
    }

    const endpoint = getRequiredEnv("DO_SPACES_ENDPOINT");
    const region = process.env.DO_SPACES_REGION || "nyc3";
    const bucket = getRequiredEnv("DO_SPACES_BUCKET");
    const cdnUrl = (process.env.DO_SPACES_CDN_URL || endpoint.replace("https://", `https://${bucket}.`)).replace(/\/$/, "");
    const accessKeyId = getRequiredEnv("DO_SPACES_ACCESS_KEY_ID");
    const secretAccessKey = getRequiredEnv("DO_SPACES_SECRET_ACCESS_KEY");

    const formData = await request.formData();
    const file = formData.get("file");
    const folder = String(formData.get("folder") || "images")
      .replace(/^\/+|\/+$/g, "")
      .replace(/[^a-zA-Z0-9/_-]/g, "");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No se recibio una imagen valida." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Solo se permiten archivos de imagen." }, { status: 400 });
    }

    if (file.size > maxFileSize) {
      return NextResponse.json({ error: "La imagen supera el limite de 8 MB." }, { status: 400 });
    }

    const key = `${folder || "images"}/${sanitizeFileName(file.name)}`;
    const body = Buffer.from(await file.arrayBuffer());
    const client = new S3Client({
      endpoint,
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: file.type,
        ACL: "public-read",
        CacheControl: "public, max-age=31536000, immutable",
      })
    );

    return NextResponse.json({
      url: `${cdnUrl}/${key}`,
      key,
      name: file.name,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "No fue posible subir la imagen.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
