// app/api/titles/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { keywords } = await req.json();

  const prompt = `
تو یک پیشنهاد‌دهنده عنوان هستی.
برای کلمات کلیدی زیر، ۳ عنوان جذاب برای مقاله یا تحقیق پیشنهاد بده.

کلمات کلیدی: ${keywords}
عناوین:
1.
`;

  const completion = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "system", content: "تو یک مدل پیشنهاد عنوان هستی" },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    })
  });

  const data = await completion.json();
  const text = data.choices?.[0]?.message?.content || "";

  const titles = text
    .split(/\n+/)
    .filter(line => line.trim())
    .map(line => line.replace(/^\d+\.\s*/, "").trim())
    .filter(line => line.length > 5);

  return NextResponse.json({ titles });
}
