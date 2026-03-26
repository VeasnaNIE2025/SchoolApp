import { useState } from "react";
import {
  AiOutlineFilePdf,
  AiOutlineEye,
  AiOutlineDownload,
  AiOutlineBook
} from "react-icons/ai";

const subjects = [
  {
    id: 1,
    title: "Microsoft Excel",
    description: "រៀនប្រើប្រាស់ Microsoft Excel សម្រាប់គ្រប់គ្រងទិន្នន័យ",
    color: "green",
    icon: "📗",
    lessons: [
      {
        id: 1,
        title: "មេរៀនទី១ - ស្គាល់ Interface",
        description: "ស្គាល់ interface របស់ Excel, Ribbon, Cells, Rows, Columns",
        subTopics: ["ស្គាល់ Workbook និង Worksheet", "ការបញ្ចូលទិន្នន័យ", "ការ Format Cells"],
        pdf: "/PDF/Microsoft Excel/Lesson1/slide1.pdf",
      },
      {
        id: 2,
        title: "មេរៀនទី២ - Formulas & Functions",
        description: "រៀនប្រើ Formula មូលដ្ឋាន SUM, AVERAGE, IF, VLOOKUP",
        subTopics: ["Basic Formulas", "Statistical Functions", "Logical Functions"],
        pdf: "/PDF/Microsoft Excel/Lesson2/slide2.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "Microsoft Word",
    description: "រៀនប្រើប្រាស់ Microsoft Word សម្រាប់បង្កើតឯកសារ",
    color: "blue",
    icon: "📘",
    lessons: [
      {
        id: 1,
        title: "មេរៀនទី១ - ស្គាល់ Word",
        description: "ស្គាល់ interface, ការបញ្ចូលអក្សរ និង Format ឯកសារ",
        subTopics: ["ការបង្កើត Document", "Formatting Text", "Paragraph Styles"],
        pdf: "/PDF/Microsoft Word/Lesson1/slide1.pdf",
      },
      {
        id: 2,
        title: "មេរៀនទី២ - Tables & Images",
        description: "ការបញ្ចូល Table, Image, Header & Footer",
        subTopics: ["Insert Table", "Insert Image", "Header & Footer"],
        pdf: "/PDF/Microsoft Word/Lesson2/slide2.pdf",
      },
      {
        id: 3,
        title: "មេរៀនទី៣ - Tables & Images",
        description: "ការបញ្ចូល Table, Image, Header & Footer",
        subTopics: ["Insert Table", "Insert Image", "Header & Footer"],
        pdf: "/PDF/Microsoft Word/Lesson3/slide3.pdf",
      },
      {
        id: 4,
        title: "មេរៀនទី៤ - Tables & Images",
        description: "ការបញ្ចូល Table, Image, Header & Footer",
        subTopics: ["Insert Table", "Insert Image", "Header & Footer"],
        pdf: "/PDF/Microsoft Word/Lesson4/slide4.pdf",
      },
      {
        id: 5,
        title: "មេរៀនទី៥ - Tables & Images",
        description: "ការបញ្ចូល Table, Image, Header & Footer",
        subTopics: ["Insert Table", "Insert Image", "Header & Footer"],
        pdf: "/PDF/Microsoft Word/Lesson5/slide5.pdf",
      },
      {
        id: 6,
        title: "មេរៀនទី៦ - Tables & Images",
        description: "ការបញ្ចូល Table, Image, Header & Footer",
        subTopics: ["Insert Table", "Insert Image", "Header & Footer"],
        pdf: "/PDF/Microsoft Word/Lesson6/slide6.pdf",
      },
      {
        id: 7,
        title: "មេរៀនទី៧ - ការណែនាំអំពីកម្មវិធី Microsoft Word (ត)",
        description: "សិក្សាជាបន្ដលើការរប្រើប្រាស់ក្ដារចុច",
        subTopics: ["ស្វែងយល់អំពីការប្រើប្រាស់គ្រាប់ចុច","រៀនវាយស្រៈ", "រៀនវាយព្យញ្ជនៈ", "រៀនវាយស្រៈផ្សំនិងព្យញ្ជនៈ"],
        pdf: "/PDF/Microsoft Word/Lesson7/slide7.pdf",
      },

    ],
  },
];

const colorMap = {
  green: {
    badge: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
    iconBg: "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
    dot: "bg-green-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
    iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    dot: "bg-blue-500",
  },
};

const IctPage = () => {
  const [viewPdf, setViewPdf] = useState(null);
  const [viewTitle, setViewTitle] = useState("");
  const [activeSubject, setActiveSubject] = useState(null);

  const openPdf = (pdf, title) => {
    setViewPdf(encodeURI(pdf));
    setViewTitle(title);
  };

  const closePdf = () => {
    setViewPdf(null);
    setViewTitle("");
  };

  const filteredSubjects = subjects.filter(
    (sub) => activeSubject === null || sub.id === activeSubject
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 transition-colors duration-300 font-khmer">
      <div className="p-6 max-w-6xl mx-auto">

        {/* ==================== HEADER ==================== */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            វិទ្យាសាស្ត្រ ICT
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
            ជ្រើសរើសមុខវិជ្ជា ហើយចូលមើល PDF មេរៀន
          </p>
        </div>

        {/* ==================== FILTER TABS ==================== */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveSubject(null)}
            className={`px-6 py-3 rounded-full text-sm font-medium border transition-all ${activeSubject === null
              ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
              }`}
          >
            ទាំងអស់
          </button>

          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => setActiveSubject(subject.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium border transition-all flex items-center gap-2 ${activeSubject === subject.id
                ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                }`}
            >
              <span className="text-lg">{subject.icon}</span>
              {subject.title}
            </button>
          ))}
        </div>

        {/* ==================== SUBJECT SECTIONS ==================== */}
        {filteredSubjects.map((subject) => {
          const c = colorMap[subject.color];

          return (
            <div key={subject.id} className="mb-16">
              {/* Subject Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl text-4xl ${c.iconBg}`}>
                  {subject.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {subject.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1.5">
                    {subject.description}
                  </p>
                </div>
              </div>

              {/* Lesson Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subject.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`bg-white dark:bg-gray-800 rounded-3xl border ${c.border} shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}
                  >
                    {/* Card Top */}
                    <div className={`px-6 py-5 flex items-center justify-between ${c.iconBg}`}>
                      <AiOutlineFilePdf className="text-4xl" />
                      <span className={`text-xs font-semibold px-4 py-1.5 rounded-full ${c.badge}`}>
                        FREE
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg leading-tight text-gray-900 dark:text-white mb-3">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                        {lesson.description}
                      </p>

                      {/* Sub Topics */}
                      <div className="mb-8 flex-1">
                        <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                          <AiOutlineBook className="text-base" />
                          ខ្លឹមសាររង
                        </p>
                        <ul className="space-y-3">
                          {lesson.subTopics.map((topic, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                            >
                              <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <button
                          onClick={() => openPdf(lesson.pdf, lesson.title)}
                          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-all active:scale-[0.97]"
                        >
                          <AiOutlineEye className="text-lg" /> មើល
                        </button>

                        <a
                          href={encodeURI(lesson.pdf)}
                          download
                          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 text-gray-700 font-medium transition-all active:scale-[0.97]"
                        >
                          <AiOutlineDownload className="text-lg" /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>

      {/* ==================== PDF MODAL ==================== */}
      {viewPdf && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-900 w-full max-w-6xl h-[92vh] rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">

            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <div className="flex items-center gap-3">
                <AiOutlineFilePdf className="text-2xl text-red-500" />
                <h3 className="font-semibold text-gray-800 dark:text-white truncate">
                  {viewTitle}
                </h3>
              </div>

              <div className="flex gap-3">
                <a
                  href={viewPdf}
                  download
                  className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-2xl transition-all"
                >
                  <AiOutlineDownload /> Download
                </a>
                <button
                  onClick={closePdf}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white text-sm font-medium rounded-2xl transition-all"
                >
                  ✕ បិទ
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 dark:bg-gray-950 overflow-hidden rounded-b-3xl">
              <iframe
                src={viewPdf}
                title={viewTitle}
                className="w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IctPage;
