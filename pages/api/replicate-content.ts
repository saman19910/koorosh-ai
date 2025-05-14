// pages/api/replicate-content.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "روش نامجاز است" });
  }

  const { prompt } = req.body;

  try {
    const replicateRes = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: JSON.stringify({
        version: "a249a5c17c16868b1c5fdf6b8acdb69d3c317e3de57c0bdf16218fa076c4e76b", // مدل Mistral یا LLaMA3 پشتیبان فارسی
        input: {
          prompt: `${prompt}\nپاسخ را فقط به زبان فارسی بنویس.`,
          max_new_tokens: 500,
          temperature: 0.7,
        },
      }),
    });

    const replicateData = await replicateRes.json();

    // گرفتن پیش‌بینی نهایی
    const output = replicateData?.prediction?.output?.join("\n") || replicateData?.output?.join("\n");

    return res.status(200).json({ result: output || "پاسخی دریافت نشد." });
  } catch (error) {
    console.error("خطا در درخواست به Replicate:", error);
    return res.status(500).json({ error: "خطا در سرور هوش مصنوعی" });
  }
}
