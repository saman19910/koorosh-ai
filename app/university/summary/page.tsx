\\app\university\summary
'use client';
import { useState } from "react";

export default function SummaryTool() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    const res = await fetch("/api/summary", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📖 خلاصه‌سازی متن با هوش مصنوعی</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full border border-gray-300 rounded-xl p-3 mb-4"
        placeholder="متن مورد نظر را وارد کنید..."
      />
      <button
        onClick={handleSummarize}
        disabled={loading || !text.trim()}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full"
      >
        {loading ? "در حال خلاصه‌سازی..." : "🧠 خلاصه کن"}
      </button>

      {summary && <div className="mt-6 bg-gray-100 p-4 rounded-xl w-full text-right">{summary}</div>}
    </main>
  );
}
