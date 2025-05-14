'use client';
import { useState } from "react";

export default function ArticleGenerator() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // به‌زودی به API متصل می‌شود
    setTimeout(() => {
      setResult(`📝 مقاله درباره‌ی «${topic}» اینجا تولید می‌شود...`);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📝 تولید مقاله</h1>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="موضوع مقاله..."
        className="w-full border border-gray-300 rounded-xl p-3 mb-4"
      />
      <button onClick={handleGenerate} disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full">
        {loading ? "در حال تولید..." : "✍️ تولید مقاله"}
      </button>

      {result && <div className="mt-6 bg-gray-100 p-4 rounded-xl w-full">{result}</div>}
    </main>
  );
}
