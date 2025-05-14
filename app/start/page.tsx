'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-700">🎉 خوش‌اومدی به KooroshAI!</h1>
        <p className="text-gray-600 text-lg">
          آماده‌ای شروع کنی؟ یکی از سرویس‌های زیر رو انتخاب کن یا وارد حساب کاربری‌ات شو.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* سرویس‌های قبلی */}
          <button onClick={() => handleClick("/content")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            ✍️ تولید محتوا
          </button>

          <button onClick={() => handleClick("/advice")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🧠 مشاوره هوشمند
          </button>

          <button onClick={() => handleClick("/tools")} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🛠 ابزارهای روزمره
          </button>

          <button onClick={() => handleClick("/logo")} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🎨 طراحی لوگو
          </button>

          <button onClick={() => handleClick("/translate")} className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🌐 ترجمه
          </button>

          <button onClick={() => handleClick("/university")} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            📚 ابزارهای دانشگاهی
          </button>

          <button onClick={() => handleClick("/admin")} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            📄 کمک‌های اداری
          </button>

          {/* ابزارهای جدید اضافه شده */}
          <button onClick={() => handleClick("/speech-to-text")} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🎤 تبدیل گفتار به متن
          </button>

          <button onClick={() => handleClick("/text-to-video")} className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🎬 تولید ویدیو از متن
          </button>

          <button onClick={() => handleClick("/title-suggestion")} className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            🧾 پیشنهاد عنوان
          </button>

          <button onClick={() => handleClick("/resume")} className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition w-full">
            📄 ساخت رزومه و نامه رسمی
          </button>
        </div>

        <div className="mt-6">
          <Link href="/signup">
  <span className="text-sm text-green-500 hover:underline">ساخت حساب جدید</span>
</Link>

        </div>
      </div>
    </main>
  );
}
