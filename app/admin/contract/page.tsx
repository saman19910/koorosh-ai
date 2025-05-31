"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateContent } from "@/lib/groq";

export default function AdminContractPage() {
  const [contractType, setContractType] = useState("قرارداد همکاری");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async () => {
    if (!details.trim()) return;

    setLoading(true);
    setResult("");

    const prompt = `یک ${contractType} رسمی و کامل به زبان فارسی تنظیم کن که جزئیات زیر را داشته باشد:\n${details}`;

    try {
      const response = await generateContent(prompt);
      setResult(response);
    } catch {
      setResult("❌ متأسفانه در تولید قرارداد مشکلی پیش آمد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-center text-red-600">🧾 تنظیم قرارداد رسمی</h1>

        <label className="block text-right font-medium">نوع قرارداد:</label>
        <select
          value={contractType}
          onChange={(e) => setContractType(e.target.value)}
          className="w-full p-3 border rounded-xl"
        >
          <option>قرارداد همکاری</option>
          <option>قرارداد خدمات</option>
          <option>قرارداد مشاوره</option>
          <option>قرارداد استخدام</option>
        </select>

        <label className="block text-right font-medium mt-2">جزئیات قرارداد:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="مثلاً: همکاری بین شرکت X و فرد Y به مدت ۳ ماه برای توسعه وب..."
          className="w-full p-3 border rounded-xl"
          rows={5}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
        >
          {loading ? "در حال تنظیم..." : "📝 تنظیم قرارداد"}
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
