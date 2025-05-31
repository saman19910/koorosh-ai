'use client';
import { useState } from "react";

export default function SourceExtractor() {
  const [topic, setTopic] = useState("");
  const [sources, setSources] = useState<{ title: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    setLoading(true);
    const res = await fetch("/api/extract-sources", {
      method: "POST",
      body: JSON.stringify({ topic }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setSources(data.sources || []);
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📚 استخراج منابع علمی واقعی</h1>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="موضوع تحقیق..."
        className="w-full border border-gray-300 rounded-xl p-3 mb-4"
      />
      <button
        onClick={handleExtract}
        disabled={loading || !topic}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full"
      >
        {loading ? "در حال جستجو..." : "🔍 جستجو کن"}
      </button>

      {sources.length > 0 && (
        <ul className="mt-6 bg-gray-100 p-4 rounded-xl w-full space-y-3 list-disc pr-5 text-right">
          {sources.map((src, i) => (
            <li key={i}>
              <a href={src.url} target="_blank" className="text-blue-700 hover:underline">{src.title}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
