import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`, // کلید در .env.local
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // مدل قدرتمند Groq
        messages: [
          {
            role: "system",
            content: "شما یک دستیار فارسی‌زبان هستید. لطفاً پاسخ‌ها را به زبان فارسی و روان بنویس.",
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

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      return NextResponse.json(
        { error: "پاسخ نامعتبر از Groq", detail: errorText },
        { status: groqResponse.status }
      );
    }

    const data = await groqResponse.json();
    const content = data?.choices?.[0]?.message?.content || "❌ پاسخی دریافت نشد.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("❌ خطای سرور:", error);
    return NextResponse.json({ error: "خطای داخلی سرور" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "لطفاً از روش POST استفاده کنید." }, { status: 405 });
}
