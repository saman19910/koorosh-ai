"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateContent } from "@/lib/groq";

export default function EmailReplyPage() {
  const [emailText, setEmailText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!emailText.trim()) return;

    setLoading(true);
    setResponse("");

    const prompt = `لطفاً یک پاسخ رسمی، مؤدبانه و حرفه‌ای به زبان فارسی برای ایمیل زیر بنویس:\n\n"${emailText}"`;

    try {
      const result = await generateContent(prompt);
      setResponse(result);
    } catch {
      setResponse("❌ مشکلی در تولید پاسخ پیش آمد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-center text-red-600">📤 پاسخ به ایمیل رسمی</h1>

        <label className="block text-right font-medium">متن ایمیل دریافتی:</label>
        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder="اینجا متن ایمیل دریافتی را بنویسید..."
          className="w-full p-3 border rounded-xl"
          rows={6}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          {loading ? "در حال تولید پاسخ..." : "✉️ تولید پاسخ رسمی"}
        </button>

        {response && (
          <div className="mt-6 p-4 bg-gray-100 rounded-xl text-right whitespace-pre-line">
            {response}
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
