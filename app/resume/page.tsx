// فایل app/resume/page.tsx
"use client";
import { useState } from "react";
import jsPDF from "jspdf";

export default function ResumeBuilder() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`رزومه ${name}`, 10, 10);
    doc.text(`شغل مورد نظر: ${job}`, 10, 20);
    doc.save("resume.pdf");
  };

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">📄 سازنده رزومه</h1>
      <input
        className="w-full p-2 border rounded-xl"
        placeholder="نام کامل"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded-xl"
        placeholder="شغل مورد نظر"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button
        onClick={generatePDF}
        className="bg-purple-600 text-white py-2 px-4 rounded-xl"
      >
        دانلود رزومه
      </button>
    </main>
  );
}
