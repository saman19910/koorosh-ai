import { NextResponse } from "next/server";
import { pipeline } from "@xenova/transformers";

// بارگذاری مدل فقط یک بار (در حافظه)
let generator: any;

export async function POST(req: Request) {
  const body = await req.json();
  const { tool } = body;

  try {
    if (!generator) {
      generator = await pipeline("text-generation", "Xenova/phi-1_5");
    }

    if (tool === "quote") {
      const response = await generator(
        "یک نقل‌قول انگیزشی فارسی برای شروع روز بده:",
        { max_new_tokens: 50, temperature: 0.7 }
      );

      const result = response[0]?.generated_text || "نقل‌قولی دریافت نشد.";
      return NextResponse.json({ result: `💬 ${result}` });
    }

    return NextResponse.json({ error: "ابزار پشتیبانی نمی‌شود." }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
