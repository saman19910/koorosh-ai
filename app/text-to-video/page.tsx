// فایل app/video/page.tsx
"use client";
import { useState } from "react";

export default function TextToVideo() {
  const [script, setScript] = useState("");

  const handleExport = () => {
    alert(`🎬 اسکریپت آماده ارسال: \n\n${script}`);
    // مرحله بعد: اتصال به Runway یا Sora
  };

  return (
    <main className="p-6 space-y-4 text-center">
      <h1 className="text-2xl font-bold">🎥 تولید ویدیو از متن</h1>
      <textarea
        className="w-full p-4 border rounded-xl"
        rows={5}
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="متن اسکریپت رو وارد کن..."
      />
      <button
        onClick={handleExport}
        className="bg-green-600 text-white py-2 px-4 rounded-xl"
      >
        آماده‌سازی ویدیو
      </button>
    </main>
  );
}
