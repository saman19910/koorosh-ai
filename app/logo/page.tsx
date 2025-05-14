"use client";

import { useState } from "react";
import { generateLogoImage } from "@/lib/aitopia"; // تغییر مسیر به Aitopia

export default function LogoDesignPage() {
  const [prompt, setPrompt] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setPreview(null);

    try {
      const imageUrl = await generateLogoImage(prompt);
      setPreview(imageUrl);
    } catch (err) {
      setPreview(null);
      alert("خطا در تولید تصویر. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🎨 طراحی لوگو با هوش مصنوعی</h1>
      <p className="text-gray-600 mb-6 text-center">فقط با چند کلمه لوگوی اختصاصی خودت رو بساز!</p>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl space-y-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="مثلاً: فروشگاه لباس کودک رنگی"
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-700"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          {loading ? "در حال تولید..." : "🎨 تولید لوگو"}
        </button>

        {preview && (
          <div className="mt-4 text-center">
            <img src={preview} alt="Generated Logo" className="rounded-xl max-w-full mx-auto" />
          </div>
        )}
      </div>
    </main>
  );
}
