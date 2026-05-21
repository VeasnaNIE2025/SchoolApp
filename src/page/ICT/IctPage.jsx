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
    description: "រៀនប្រើប្រាស់ Microsoft Excel",
    color: "green",
    icon: "📗",
    lessons: [
      {
        id: 1,
        title: "មេរៀនទី១",
        description: "ស្គាល់ Excel",
        subTopics: ["Workbook", "Cells"],
        pdf: "/PDF/Microsoft Excel/Lesson1/slide1.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "Microsoft Word",
    description: "រៀនប្រើ Word",
    color: "blue",
    icon: "📘",
    lessons: [
      {
        id: 1,
        title: "មេរៀនទី១",
        description: "ស្គាល់ Word",
        subTopics: ["Text", "Format"],
        pdf: "/PDF/Microsoft Word/Lesson1/slide1.pdf",
      },
      {
        id: 2,
        title: "លំហាត់",
        description: "Practice",
        subTopics: ["Image"],
        pdf: "/PDF/Microsoft Word/Lesson7/Excercise.docx",
      },
      {
        id: 3,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពីការគ្រប់គ្រង Object ",
        subTopics: ["១៨.៥ ការរៀបចំលំដាប់ស្រទាប់ (Layer)", "១៨.៦ សិក្សាអំពី Select Pane", "១៨.៧ សិក្សាអំពី Aligment Object", "១៨.៨ សិក្សាអំពី Group Object"],
        pdf: "https://canva.link/7af9a5qfql4nu4c",
      },
      {
        id: 4,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពីការគផ្លាស់ប្ដូរទ្រង់ទ្រាយ​ Object ",
        subTopics: ["១៨.៩ ការកំណត់ទិសដៅរូបភាព Picture Rotate", "១៨.១០ ការកាត់រូបភាព Picture Crop", "១៨.១១ សិក្សាអំពី ​ការប្រើអត្ថបទជំនួស Alt Text"],
        pdf: "https://canva.link/wd8onjn7r06oy1a",
      },
      {
        id: 5,
        title: "មេរៀនទី ៤  ការណែនាំអំពីកម្មវិធី Microsoft Word",
        description: "សិក្សាអំពីកវត្ថុគំនូរ និងការកែសម្រូលការប្រើប្រាស់ ",
        subTopics: ["១៩.សិក្សាអំពី​ Shape", "១៩.១ ការ Edit Shape", "១៩.២ Shape Style", "១៩.៣ Align Text in Shape","១៩.៤ Text Direction in Shape"," ១៩.៥ Shape Create Link"],
        pdf: "https://canva.link/gjmkc8oss1e4do0",
      },
    ],
  },
  {
    id: 3,
    title: "ផ្ញើកិច្ចការ",
    description: "Google Form",
    color: "red",
    icon: "📕",
    lessons: [
      {
        id: 1,
        title: "ថ្នាក់ទី១០",
        description: "Send Homework",
        subTopics: ["Homework"],
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd4EyzuibUXCB2depDmHtwk7dQuiVTYEmVzx6iLgvE-ZMe_ig/viewform",
      },
    ],
  },
  {
    id: 4,
    title: "ឯកសារអនុវត្តន៍",
    description: "ឯកសារសម្រាប់សិស្សអនុវត្តន៍",
    color: "green",
    icon: "📕",
    lessons: [
      {
        id: 1,
        title: "ឯកសារសម្រាប់សិស្សអនុវត្តន៍",
        description: "សូមទាញយកឯកសារនេះ ហើយអនុវត្តន៍តាម",
        subTopics: ["កិច្ចការ", "សកម្មភាព ផ្សេងៗ ដែលគ្រូបានបង្រៀន"],
        pdf: "/PDF/Microsoft Word/Excercise.docx",
      },
    ],
  },,
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
  red: {
    badge: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
    iconBg: "bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    border: "border-red-200 dark:border-red-800",
    dot: "bg-red-500",
  },
};

export default function IctPage() {
  const [viewPdf, setViewPdf] = useState(null);
  const [viewTitle, setViewTitle] = useState("");
  const [activeSubject, setActiveSubject] = useState(null);

  const openPdf = (file, title) => {
    setViewPdf(encodeURI(file));
    setViewTitle(title);
  };

  const closePdf = () => {
    setViewPdf(null);
    setViewTitle("");
  };

  return (
    <div className="min-h-screen pt-16 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl p-6 mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            ICT Lessons
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            ជ្រើសរើសមេរៀន
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveSubject(null)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              activeSubject === null
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            ទាំងអស់
          </button>

          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSubject(s.id)}
              className={`px-5 py-2 rounded-full text-sm flex items-center gap-2 transition ${
                activeSubject === s.id
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {subjects
          .filter((s) => activeSubject === null || s.id === activeSubject)
          .map((subject) => {
            const c = colorMap[subject.color];

            return (
              <div key={subject.id} className="mb-14">
                <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                  {subject.title}
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {subject.lessons.map((lesson) => (
                    <div
                      key={`${subject.id}-${lesson.id}`}
                      className={`group bg-white dark:bg-gray-800 rounded-3xl border ${c.border} shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col`}
                    >
                      {/* TOP */}
                      <div className={`px-6 py-5 flex justify-between ${c.iconBg}`}>
                        <AiOutlineFilePdf className="text-4xl transition group-hover:scale-110" />
                        <span className={`text-xs px-3 py-1 rounded-full ${c.badge}`}>
                          FREE
                        </span>
                      </div>

                      {/* BODY */}
                      <div className="flex flex-col flex-1 p-6">
                        <h3 className="mb-2 text-lg font-semibold text-gray-900 transition dark:text-white group-hover:text-blue-600">
                          {lesson.title}
                        </h3>

                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                          {lesson.description}
                        </p>

                        {/* SUB */}
                        <div className="flex-1 mb-6">
                          <p className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
                            <AiOutlineBook /> ខ្លឹមសារ
                          </p>

                          <ul className="space-y-2">
                            {lesson.subTopics.map((t, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-gray-700 dark:text-gray-300"
                              >
                                <span className={`w-2 h-2 mt-2 rounded-full ${c.dot}`} />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* BUTTON */}
                        <div className="flex gap-3 mt-auto">
                          <button
                            onClick={() => {
                              if (lesson.pdf) openPdf(lesson.pdf, lesson.title);
                              else if (lesson.url) window.open(lesson.url, "_blank");
                            }}
                            className="flex items-center justify-center flex-1 gap-2 py-2 text-white transition bg-blue-600 hover:bg-blue-700 rounded-xl active:scale-95"
                          >
                            <AiOutlineEye /> មើល
                          </button>

                          <a
                            href={lesson.pdf || lesson.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center flex-1 gap-2 py-2 text-gray-800 transition bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-xl active:scale-95"
                          >
                            <AiOutlineDownload /> Download
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

      {/* MODAL */}
      {viewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden">
            <div className="flex justify-between p-4 border-b dark:border-gray-700">
              <h3 className="text-gray-900 dark:text-white">{viewTitle}</h3>
              <button onClick={closePdf} className="text-gray-600 dark:text-white">
                ✕
              </button>
            </div>
            <iframe src={viewPdf} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}