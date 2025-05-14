// فایل app/speech/page.tsx
"use client";
import { useState } from "react";

export default function SpeechToText() {
  const [text, setText] = useState("");

  const startRecognition = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "fa-IR"; // فارسی
    recognition.onresult = (event: any) => {
      setText(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <main className="p-6 text-center space-y-4">
      <h1 className="text-2xl font-bold">🎤 تبدیل گفتار به متن</h1>
      <button
        onClick={startRecognition}
        className="bg-blue-600 text-white py-2 px-4 rounded-xl"
      >
        شروع ضبط
      </button>
      <div className="mt-4 bg-gray-100 p-4 rounded-xl">{text}</div>
    </main>
  );
}
