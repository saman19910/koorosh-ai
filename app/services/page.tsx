import { FaPenFancy, FaUserTie, FaUniversity, FaFileAlt, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "تولید محتوا برای شبکه‌های اجتماعی",
      description: "متن‌های حرفه‌ای برای اینستاگرام، تلگرام و سایر پلتفرم‌ها.",
      icon: <FaPenFancy className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "مشاوره هوش مصنوعی",
      description: "پاسخ‌گویی هوشمند در موضوعات مختلف شغلی، روان‌شناسی و بیشتر.",
      icon: <FaUserTie className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "ابزارهای دانشگاهی",
      description: "کمک در نوشتن مقالات، ترجمه، خلاصه‌سازی و بازنویسی متون.",
      icon: <FaUniversity className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "کمک‌های اداری",
      description: "نگارش نامه‌های رسمی، رزومه، ایمیل کاری و پیشنهادات تجاری.",
      icon: <FaFileAlt className="text-4xl text-blue-500 mb-4" />,
    },
    {
      title: "زندگی روزمره",
      description: "برنامه‌ریزی، پیشنهاد فیلم و غذا، مشاوره سلامت و سبک زندگی.",
      icon: <FaHeart className="text-4xl text-blue-500 mb-4" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-10">خدمات ما</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center text-center"
          >
            {service.icon}
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h2>
            <p className="mb-4 text-sm text-gray-600">{service.description}</p>
            <Link
  href="/start"
  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition text-lg font-bold"
>
  🎉 همین حالا شروع کن!
</Link>

          </div>
        ))}
      </div>
    </main>
  );
}
