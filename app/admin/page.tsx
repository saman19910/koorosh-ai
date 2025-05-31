"use client";
import { useRouter } from "next/navigation";

export default function AdminHelp() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-red-600">📄 کمک‌های اداری</h1>
        <p className="text-gray-600 text-lg">
          ابزارهایی برای ساده‌سازی امور اداری و نوشتن نامه‌های رسمی، درخواست‌ها و فرمت‌های استاندارد.
        </p>

        <ul className="space-y-4 text-gray-700 text-right">
          <li>
            <a
              href="/admin/letter"
              className="block bg-gray-100 hover:bg-gray-200 p-4 rounded-xl transition"
            >
              📌 نوشتن نامه اداری رسمی
            </a>
          </li>
          <li>
            <a
              href="/admin/contract"
              className="block bg-gray-100 hover:bg-gray-200 p-4 rounded-xl transition"
            >
              🧾 تنظیم قرارداد و فرم
            </a>
          </li>
          <li>
            <a
              href="/admin/email-reply"
              className="block bg-gray-100 hover:bg-gray-200 p-4 rounded-xl transition"
            >
              📤 پاسخ به ایمیل‌های رسمی
            </a>
          </li>
          <li>
            <a
              href="/admin/resume"
              className="block bg-gray-100 hover:bg-gray-200 p-4 rounded-xl transition"
            >
              📑 آماده‌سازی رزومه و کاور لتر
            </a>
          </li>
        </ul>

        <button
          onClick={() => router.back()}
          className="mt-6 text-blue-600 hover:underline text-sm"
        >
          ← بازگشت به صفحه قبل
        </button>
      </div>
    </main>
  );
}
