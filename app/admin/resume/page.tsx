"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateContent } from "@/lib/groq";

export default function ResumePage() {
  const [mode, setMode] = useState("رزومه");
  const [info, setInfo] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!info.trim()) return;

    setLoading(true);
    setResult("");

    const prompt = `یک ${mode} رسمی و کامل به زبان فارسی براساس اطلاعات زیر آماده کن:\n${info}`;

    try {
      const response = await generateContent(prompt);
      setResult(response);
    } catch {
      setResult("❌ مشکلی در تولید محتوا پیش آمد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-center text-red-600">📑 آماده‌سازی {mode}</h1>

        <label className="block text-right font-medium">نوع سند:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full p-3 border rounded-xl"
        >
          <option>رزومه</option>
          <option>کاور لتر</option>
        </select>

        <label className="block text-right font-medium mt-2">اطلاعات مورد نیاز:</label>
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="مثلاً: علی رضایی، توسعه‌دهنده فرانت‌اند، سابقه در React و Next.js، جویای کار در حوزه طراحی رابط کاربری..."
          className="w-full p-3 border rounded-xl"
          rows={6}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          {loading ? "در حال تولید..." : `✍️ تولید ${mode}`}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl text-right whitespace-pre-line">
            {result}
          </div>
        )}

        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-500 hover:underline"
        >
          ← بازگشت
        </button>
      </div>
    </main>
  );
}
