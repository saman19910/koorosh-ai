export default function UpgradePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white p-6 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-red-600">🔥 محدودیت استفاده!</h1>
        <p className="text-gray-700">
          شما از ۵ خدمت رایگان استفاده کردید. برای ادامه، لطفاً اشتراک تهیه کنید.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
          ارتقا به پلن حرفه‌ای
        </button>
      </div>
    </main>
  );
}
