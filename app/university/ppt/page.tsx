'use client';
import { useState } from "react";

export default function PPTTool() {
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    setOutput(`📊 اسلایدهایی برای «${topic}» آماده شدند!`);
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">📊 ساخت پاورپوینت</h1>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="موضوع ارائه..."
        className="w-full border border-gray-300 rounded-xl p-3 mb-4"
      />
      <button onClick={handleGenerate} className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full">
        تولید کن
      </button>

      {output && <div className="mt-6 bg-gray-100 p-4 rounded-xl w-full">{output}</div>}
    </main>
  );
}
