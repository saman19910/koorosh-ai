const fetch = require("node-fetch");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { prompt } = req.body;

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`, // کلید از .env خوانده می‌شود
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // مدل متن‌باز Groq
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

    if (!groqRes.ok) {
      const errorText = await groqRes.text();
      return res.status(groqRes.status).json({ error: "Groq error", detail: errorText });
    }

    const data = await groqRes.json();
    const content = data?.choices?.[0]?.message?.content || "❌ پاسخی دریافت نشد.";

    return res.status(200).json({ content });

  } catch (error) {
    console.error("خطای سرور:", error);
    return res.status(500).json({ error: "خطای داخلی سرور" });
  }
};
