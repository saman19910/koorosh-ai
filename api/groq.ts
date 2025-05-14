// pages/api/groq.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          { role: "system", content: "پاسخ‌ها باید دقیق و به زبان فارسی باشند." },
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await groqRes.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("خطا در Groq:", err);
    res.status(500).json({ error: "مشکل در ارتباط با مدل هوش مصنوعی" });
  }
}
