import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text } = await req.json();

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct", // یا Mixtral اگر دقیق‌تر خواستی
      messages: [
        { role: "system", content: "تو یک خلاصه‌ساز فارسی هستی. متن‌ها را خلاصه کن." },
        { role: "user", content: text }
      ]
    })
  });

  const data = await res.json();
  const summary = data.choices?.[0]?.message?.content || "خلاصه‌ای یافت نشد.";

  return NextResponse.json({ summary });
}

