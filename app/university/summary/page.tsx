'use client';
import { useState } from "react";

export default function SummaryTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    setSummary("📖 خلاصه: " + text.slice(0, 50) + "...");
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📖 خلاصه‌سازی متن</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        className="w-full border border-gray-300 rounded-xl p-3 mb-4"
        placeholder="متن مورد نظر را وارد کنید..."
      />
      <button onClick={handleSummarize} className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full">
        خلاصه کن
      </button>

      {summary && <div className="mt-6 bg-gray-100 p-4 rounded-xl w-full">{summary}</div>}
    </main>
  );
}
