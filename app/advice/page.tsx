"use client";

import { useState } from "react";
import { generateContent } from "@/lib/groq"; // اتصال به فایل lib/groq.ts

export default function SmartAdvicePage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question) return;

    setLoading(true);
    setAnswer("");

    try {
      const aiAnswer = await generateContent(
        `با زبان فارسی پاسخ بده. سوال مشاوره‌ای: ${question}`
      );
      setAnswer(aiAnswer);
    } catch (err) {
      console.error(err);
      setAnswer("❌ خطا در دریافت پاسخ از هوش مصنوعی.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-white to-blue-50 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">🧠 مشاوره هوشمند</h1>
        <p className="text-gray-600 text-lg">
          سوالتو از هوش مصنوعی بپرس. درباره زندگی، تحصیل، شغل، روان‌شناسی و هر چی که تو ذهنت هست.
        </p>
      </div>

      <div className="mt-10 w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <textarea
          rows={4}
          className="w-full border border-gray-300 rounded-xl p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="سوالت رو اینجا بنویس..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full disabled:opacity-50"
        >
          {loading ? "⏳ در حال دریافت پاسخ..." : "📩 دریافت مشاوره"}
        </button>

        {answer && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4 text-right text-gray-800">
            <strong>پاسخ:</strong>
            <p className="mt-2 whitespace-pre-line">{answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}
