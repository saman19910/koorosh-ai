import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { topic } = await req.json();

  const prompt = `یک مقاله کامل در مورد موضوع "${topic}" بنویس (به زبان فارسی، حدود 3 پاراگراف).`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral", // یا مدل دیگه مثل llama2 یا gemma بسته به نصب شما
      prompt,
      stream: false
    }),
  });

  const data = await response.json();
  return NextResponse.json({ article: data.response });
}
