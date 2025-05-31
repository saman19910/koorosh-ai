// app/titles/page.tsx
"use client";
import { useState } from "react";

export default function TitleSuggester() {
  const [keywords, setKeywords] = useState("");
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const suggestTitles = async () => {
    if (!keywords) return;
    setLoading(true);
    try {
      const res = await fetch("/api/titles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keywords }),
      });

      const data = await res.json();
      setTitles(data.titles || []);
    } catch (err) {
      setTitles(["❌ خطا در دریافت پیشنهادات."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6 space-y-4 text-center max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-indigo-700">🧠 پیشنهاد عنوان مقاله</h1>
      <input
        className="w-full p-3 border rounded-xl"
        placeholder="مثلاً: سلامت ذهن نوجوانان"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        onClick={suggestTitles}
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl w-full"
      >
        {loading ? "در حال تولید..." : "پیشنهاد بده"}
      </button>

      {titles.length > 0 && (
        <ul className="mt-4 space-y-2 text-right">
          {titles.map((title, i) => (
            <li key={i} className="bg-gray-100 p-3 rounded-xl">
              {title}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
