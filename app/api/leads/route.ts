import { NextRequest, NextResponse } from "next/server";

type LeadPayload = Record<string, unknown>;

const forwardedFields = [
  "type",
  "name",
  "company",
  "email",
  "whatsapp",
  "contact",
  "service",
  "topic",
  "budget",
  "date",
  "time",
  "message",
  "page",
  "createdAt",
  "receivedAt",
  "source",
];

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
    const enrichedPayload = {
      ...payload,
      receivedAt: new Date().toISOString(),
      source: "dydweb",
    };

    if (!webhookUrl) {
      console.info("GOOGLE_SHEETS_WEBHOOK_URL is not configured", enrichedPayload);
      return NextResponse.json(
        {
          ok: true,
          stored: false,
          message: "Google Sheets webhook is not configured yet.",
        },
        { status: 202 }
      );
    }

    let targetUrl: URL;
    try {
      targetUrl = new URL(webhookUrl);
    } catch {
      console.info("GOOGLE_SHEETS_WEBHOOK_URL is invalid", enrichedPayload);
      return NextResponse.json(
        {
          ok: true,
          stored: false,
          message: "Google Sheets webhook is not configured yet.",
        },
        { status: 202 }
      );
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
      return NextResponse.json(
        { ok: false, message: "Google Sheets webhook rejected the request." },
        { status: 502 }
      );
    }

    const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;
    if (result?.ok === false) {
      return NextResponse.json(
        { ok: false, message: "Google Sheets webhook did not store the lead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json(
      { ok: false, message: "Lead submission failed." },
      { status: 500 }
    );
  }
}
