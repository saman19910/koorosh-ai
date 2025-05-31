"use client";

import { useState } from "react";
import { generateContent } from "@/lib/groq";
import { useRouter } from "next/navigation";

export default function LetterTool() {
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!purpose.trim()) return;
    setLoading(true);
    setResult("");
    const prompt = `لطفاً یک نامه اداری رسمی با موضوع: "${purpose}" بنویس. لحن رسمی و ساختار استاندارد رعایت شود.`;

    try {
      const response = await generateContent(prompt);
      setResult(response);
    } catch (error) {
      setResult("❌ خطا در تولید نامه. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">✉️ تولید نامه اداری رسمی</h1>

        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="مثلاً درخواست گواهی اشتغال به کار"
          className="w-full border border-gray-300 rounded-xl p-3 text-right"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl w-full"
        >
          {loading ? "در حال تولید..." : "📄 تولید نامه"}
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded-xl text-right whitespace-pre-line text-gray-800">
            {result}
          </div>
        )}

        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:underline text-sm mt-6"
        >
          ← بازگشت
        </button>
      </div>
    </main>
  );
}
