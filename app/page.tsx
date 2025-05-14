import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* بخش اصلی */}
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-6">
        <div className="text-center max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            KooroshAI: هوش مصنوعی همیشه در دسترس
          </h1>
          <p className="text-gray-600 text-lg">
            تولید محتوا، مشاوره، کارهای اداری و روزمره — فقط با یک کلیک.
          </p>

          <Link
            href="/start"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition"
          >
            🎉 شروع رایگان
          </Link>
        </div>
      </main>

      {/* معرفی خدمات */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-12 mb-10 mx-auto">
        {[
          {
            title: "✍️ تولید محتوا / Content Writing",
            desc: "ابزاری برای تولید پست، مقاله، کپشن و متن‌های حرفه‌ای.",
          },
          {
            title: "🧠 مشاوره هوشمند / Smart Advice",
            desc: "پاسخ‌گویی هوشمند در موضوعات مختلف زندگی، شغل، تحصیل و روان‌شناسی.",
          },
          {
            title: "🛠 ابزارهای روزمره / Daily Tools",
            desc: "مجموعه‌ای از ابزارهای ساده اما کاربردی برای بهره‌وری روزانه.",
          },
          {
            title: "🎨 طراحی لوگو / Logo Design",
            desc: "تولید لوگو با استایل‌های متنوع با کمک هوش مصنوعی.",
          },
          {
            title: "🌐 سرویس ترجمه / Translation",
            desc: "ترجمه فوری متن به زبان‌های مختلف با دقت بالا.",
            fullWidth: true,
          },
        ].map(({ title, desc, fullWidth }, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition ${
              fullWidth ? "md:col-span-2" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* دکمه‌های پایین */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Link href="/start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition">
            شروع رایگان / Get Started Free
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold transition">
            ورود / Login
          </button>
        </Link>
      </div>

      {/* فوتر */}
      <footer className="text-sm text-gray-500 text-center pb-6">
        © 2025 KooroshAI — تمام حقوق محفوظ است | پشتیبانی ۲۴ ساعته / 24/7 Support
      </footer>
    </>
  );
}
