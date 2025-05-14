// فایل app/titles/page.tsx
"use client";
import { useState } from "react";

export default function TitleSuggester() {
  const [keywords, setKeywords] = useState("");
  const [titles, setTitles] = useState<string[]>([]);

  const suggestTitles = async () => {
    // نسخه ساده (شبیه‌سازی هوش مصنوعی)
    const base = keywords.split(" ").join(" + ");
    setTitles([
      `پیشنهاد ۱ برای: ${base}`,
      `پیشنهاد ۲ برای: ${base}`,
      `پیشنهاد ۳ برای: ${base}`,
    ]);

    // نسخه بعدی: استفاده از مدل واقعی متن‌باز
  };

  return (
    <main className="p-6 space-y-4 text-center">
      <h1 className="text-2xl font-bold">🧠 پیشنهاد عنوان</h1>
      <input
        className="w-full p-3 border rounded-xl"
        placeholder="مثلاً: سلامت ذهن نوجوانان"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        onClick={suggestTitles}
        className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
      >
        پیشنهاد بده
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
