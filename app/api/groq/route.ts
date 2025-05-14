// app/api/groq/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama3-8b-8192", // مدل قدرتمند متن‌باز
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

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content || "خطایی در دریافت پاسخ رخ داد.";
  return NextResponse.json({ content });
}

