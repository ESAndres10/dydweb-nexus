import { NextRequest, NextResponse } from "next/server";

type LeadPayload = Record<string, unknown>;

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
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

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enrichedPayload),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "Google Sheets webhook rejected the request." },
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
