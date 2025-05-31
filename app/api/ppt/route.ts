import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topic } = await req.json();

  const prompt = `
تو یک ابزار تولید اسلاید ارائه هستی. لطفاً ۵ اسلاید برای موضوع "${topic}" تولید کن.
هر اسلاید شامل:
- عنوان
- ۲ تا ۳ نکته کلیدی باشد.
نتیجه را به صورت لیست شماره‌دار نمایش بده.
به زبان فارسی.
`;

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral", // یا llama3 بسته به نصب شما
      prompt,
      stream: false,
    }),
  });

  const data = await response.json();
  return NextResponse.json({ slides: data.response });
}
