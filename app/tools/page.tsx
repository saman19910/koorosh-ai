"use client";

import { useState } from "react";

export default function DailyToolsPage() {
  const [tool, setTool] = useState("date");
  const [result, setResult] = useState("");

  const handleRunTool = () => {
    const tools: Record<string, () => string> = {
      date: () => `📅 تاریخ امروز: ${new Date().toLocaleDateString("fa-IR")}`,
      time: () => `⏰ ساعت الان: ${new Date().toLocaleTimeString("fa-IR")}`,
      random: () => `🎲 عدد تصادفی: ${Math.floor(Math.random() * 100) + 1}`,
      quote: () => "💬 موفقیت نتیجه تلاش‌های کوچک روزانه است.",
      password: () => `🔐 رمز عبور تصادفی: ${generatePassword()}`,
    };

    setResult(tools[tool]?.() || "لطفاً ابزار معتبر را انتخاب کنید.");
  };

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-bl from-blue-50 to-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛠 ابزارهای روزمره</h1>
      <p className="text-gray-600 mb-6 text-center">
        ابزارهای ساده ولی مفید برای زندگی روزمره — بدون نیاز به ثبت‌نام.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
        <select
          className="w-full border border-gray-300 rounded-xl p-3 text-gray-700"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
        >
          <option value="date">📅 نمایش تاریخ امروز</option>
          <option value="time">⏰ نمایش ساعت فعلی</option>
          <option value="random">🎲 عدد تصادفی</option>
          <option value="quote">💬 نقل‌قول انگیزشی</option>
          <option value="password">🔐 رمز عبور تصادفی</option>
        </select>

        <button
          onClick={handleRunTool}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          ▶️ اجرا کن
        </button>

        {result && (
          <div className="bg-gray-100 text-right p-4 rounded-xl border border-gray-300">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
