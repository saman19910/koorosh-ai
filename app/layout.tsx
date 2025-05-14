// app/layout.tsx
import Link from "next/link";
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KooroshAI",
  description: "AI Assistant Platform in Persian & English",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans bg-gray-50 text-right">
        {/* نوار ناوبری بالا */}
        <nav className="bg-white border-b shadow-sm py-4 px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700">KooroshAI</div>
          <div className="space-x-4 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              خانه
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              درباره ما
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              خدمات ما
            </Link>
<Link href="/image" className="text-gray-700 hover:text-blue-600 font-medium">تولید تصویر</Link>

          </div>
        </nav>

        {/* محتوای صفحات */}
        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

