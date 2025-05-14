// lib/groq.ts
export async function generateContent(prompt: string) {
  const res = await fetch("/api/groq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "خطایی رخ داد.";
}
