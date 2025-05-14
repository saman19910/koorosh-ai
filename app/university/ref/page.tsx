'use client';
import { useState } from "react";

export default function SourceExtractor() {
  const [topic, setTopic] = useState("");
  const [sources, setSources] = useState<string[]>([]);

  const handleExtract = () => {
    setSources([
      `🔗 مقاله علمی درباره ${topic} - www.example.com`,
      `📘 کتاب مرجع درباره ${topic} - نویسنده معروف`,
    ]);
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📚 استخراج منابع علمی</h1>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="موضوع تحقیق..."
        className="w-full border border-gray-300 rounded-xl p-3 mb-4"
      />
      <button onClick={handleExtract} className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full">
        جستجو کن
      </button>

      {sources.length > 0 && (
        <ul className="mt-6 bg-gray-100 p-4 rounded-xl w-full space-y-2 list-disc pr-5 text-right">
          {sources.map((src, i) => <li key={i}>{src}</li>)}
        </ul>
      )}
    </main>
  );
}
