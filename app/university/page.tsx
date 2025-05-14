// app/university/page.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function UniversityTools() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-blue-700">📚 ابزارهای دانشگاهی</h1>
        <p className="text-gray-600 text-lg">
          ابزارهایی برای کمک به دانشجویان در نوشتن مقاله، خلاصه‌نویسی، تحقیق و ارائه.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <button
            onClick={() => handleNavigate('/university/article')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            📝 تولید مقاله
          </button>
          <button
            onClick={() => handleNavigate('/university/summary')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            📖 خلاصه‌سازی متن
          </button>
          <button
            onClick={() => handleNavigate('/university/ppt')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            📊 ساخت پاورپوینت
          </button>
          <button
            onClick={() => handleNavigate('/university/ref')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            📚 استخراج منابع
          </button>
        </div>
      </div>
    </main>
  );
}
