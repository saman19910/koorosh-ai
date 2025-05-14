"use client";
import { translateText } from "@/lib/translate";
import { useState } from "react";

export default function TranslatePage() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("fa");
  const [toLang, setToLang] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText) return;

    setLoading(true);
    try {
      const result = await translateText(inputText, fromLang, toLang);
      setTranslatedText(result);
    } catch (err) {
      setTranslatedText("❌ خطایی در ترجمه رخ داد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🌐 سرویس ترجمه هوشمند</h1>
      <p className="text-gray-600 mb-6 text-center">متن خود را وارد کنید تا به زبان مقصد ترجمه شود.</p>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl space-y-4">
        <div className="flex gap-4">
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-xl p-3 text-gray-700"
          >
            <option value="fa">فارسی</option>
            <option value="en">انگلیسی</option>
            <option value="ar">عربی</option>
          </select>

          <select
            value={toLang}
            onChange={(e) => setToLang(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-xl p-3 text-gray-700"
          >
            <option value="en">انگلیسی</option>
            <option value="fa">فارسی</option>
            <option value="ar">عربی</option>
          </select>
        </div>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={4}
          placeholder="متنی برای ترجمه بنویس..."
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-700"
        />

        <button
          onClick={handleTranslate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          disabled={loading}
        >
          {loading ? "در حال ترجمه..." : "ترجمه کن"}
        </button>

        {translatedText && (
          <div className="mt-4 bg-gray-100 border border-gray-300 p-4 rounded-xl text-gray-700 text-right whitespace-pre-line">
            {translatedText}
          </div>
        )}
      </div>
    </main>
  );
}
