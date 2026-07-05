import { NextRequest, NextResponse } from "next/server";

type ViewPayload = Record<string, unknown>;

const forwardedFields = [
  "type",
  "title",
  "slug",
  "category",
  "page",
  "referrer",
  "userAgent",
  "createdAt",
  "receivedAt",
  "source",
];

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ViewPayload;
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
    const enrichedPayload = {
      ...payload,
      type: "article_view",
      userAgent: request.headers.get("user-agent") || "",
      receivedAt: new Date().toISOString(),
      source: "dydweb",
    };

    if (!webhookUrl) {
      return NextResponse.json({ ok: true, stored: false }, { status: 202 });
    }

    let targetUrl: URL;
    try {
      targetUrl = new URL(webhookUrl);
    } catch {
      return NextResponse.json({ ok: true, stored: false }, { status: 202 });
    }

    if (webhookSecret && !targetUrl.searchParams.has("secret")) {
      targetUrl.searchParams.set("secret", webhookSecret);
    }

    const response = await fetch(targetUrl.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookSecret ? { "x-dydweb-secret": webhookSecret } : {}),
      },
      body: JSON.stringify({
        fields: forwardedFields,
        lead: enrichedPayload,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
