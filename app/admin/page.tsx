export default function AdminHelp() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-red-600">📄 کمک‌های اداری</h1>
        <p className="text-gray-600 text-lg">
          ابزارهایی برای ساده‌سازی امور اداری و نوشتن نامه‌های رسمی، درخواست‌ها و فرمت‌های استاندارد.
        </p>

        <ul className="space-y-4 text-gray-700 text-left">
          <li>📌 نوشتن نامه اداری رسمی</li>
          <li>🧾 تنظیم قرارداد و فرم</li>
          <li>📤 پاسخ به ایمیل‌های رسمی</li>
          <li>📑 آماده‌سازی رزومه و کاور لتر</li>
        </ul>
      </div>
    </main>
  );
}
