'use client';
import { useState } from 'react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    const response = await fetch('/api/predictions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setImageUrl(data.output[0]);
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-6 bg-white flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🎨 تولید تصویر با متن</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={3}
        placeholder="مثلاً: یک گربه فضانورد در مریخ"
        className="w-full max-w-md border p-4 rounded-xl text-gray-700 mb-4"
      />
      <button
        onClick={generateImage}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        🖼 تولید تصویر
      </button>
      {loading && <p className="mt-4 text-gray-600">در حال تولید تصویر...</p>}
      {imageUrl && (
        <div className="mt-6">
          <img src={imageUrl} alt="Generated" className="rounded-xl border shadow-lg w-80" />
        </div>
      )}
    </main>
  );
}
