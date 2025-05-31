'use client';
import { useState } from "react";
import PptxGenJS from "pptxgenjs";

export default function PPTTool() {
  const [topic, setTopic] = useState("");
  const [slides, setSlides] = useState<string[]>([]);

  const handleGenerate = () => {
    const generatedSlides = [
      `عنوان: ${topic}`,
      "مقدمه‌ای درباره موضوع",
      "نکات کلیدی ۱",
      "نکات کلیدی ۲",
      "نتیجه‌گیری"
    ];
    setSlides(generatedSlides);
  };

  const handleDownload = () => {
    const pptx = new PptxGenJS();
    const titleSlide = pptx.addSlide();
    titleSlide.addText(topic, { x: 1, y: 1, fontSize: 24, bold: true });

    slides.forEach((content, index) => {
      const slide = pptx.addSlide();
      slide.addText(content, { x: 1, y: 1, fontSize: 18 });
    });

    pptx.writeFile(`${topic || 'presentation'}.pptx`);
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
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full"
      >
        تولید اسلایدها
      </button>

      {slides.length > 0 && (
        <>
          <div className="mt-6 bg-gray-100 p-4 rounded-xl w-full space-y-2">
            {slides.map((slide, index) => (
              <p key={index}>📌 {slide}</p>
            ))}
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl w-full"
          >
            ⬇️ دانلود پاورپوینت
          </button>
        </>
      )}
    </main>
  );
}
