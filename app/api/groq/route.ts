// app/api/groq/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "شما یک دستیار فارسی‌زبان هستید.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ content: `❌ خطای ${res.status}: ${errText}` });
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "❌ پاسخ معتبر دریافت نشد.";
    return NextResponse.json({ content });

  } catch (error: any) {
    return NextResponse.json({ content: `❌ خطای اجرای API: ${error.message}` });
  }
}
