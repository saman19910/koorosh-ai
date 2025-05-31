"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateContent } from "@/lib/groq"; // اتصال به API

export default function ContentPage() {
  const [topic, setTopic] = useState("");
  const [type, setType] = useState("پست اینستاگرام");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setResult("");

    const prompt = `لطفاً به زبان فارسی و با لحن حرفه‌ای یک ${type} با موضوع "${topic}" تولید کن.`;

    try {
      const response = await generateContent(prompt);
      setResult(response);
    } catch (error) {
      setResult("❌ متأسفانه در تولید محتوا مشکلی پیش آمد. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">✍️ تولید محتوا با هوش مصنوعی</h1>
        <p className="text-gray-600 text-lg">با چند کلیک، محتوای حرفه‌ای بساز!</p>
      </div>

      <div className="mt-10 w-full max-w-3xl bg-white p-6 rounded-2xl shadow-xl space-y-4">
        <label className="block text-right font-semibold text-gray-700">موضوع:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="مثلاً معرفی محصول جدید"
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block text-right font-semibold text-gray-700 mt-4">نوع محتوا:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3"
        >
          <option>پست اینستاگرام</option>
          <option>مقاله</option>
          <option>کپشن تبلیغاتی</option>
          <option>ایمیل اداری</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full transition duration-300"
        >
          {loading ? "در حال تولید..." : "🚀 تولید محتوا"}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl text-right text-gray-800 whitespace-pre-line">
            {result}
          </div>
        )}

        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 hover:underline text-sm"
        >
          ← بازگشت به صفحه قبل
        </button>
      </div>
    </main>
  );
}
