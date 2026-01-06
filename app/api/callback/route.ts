import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, service } = await req.json();

    const message =
      "📞 New Callback Request\n\n" +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!telegramRes.ok) {
      const error = await telegramRes.text();
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
