import { useState } from "react";
import { AiOutlineFilePdf, AiOutlineEye, AiOutlineDownload, AiOutlineBook } from "react-icons/ai";

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
    ],
  },
];

const colorMap = {
  green: {
    badge: "bg-green-100 text-green-700",
    iconBg: "bg-green-50 text-green-600",
    border: "border-green-200",
    dot: "bg-green-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-50 text-blue-600",
    border: "border-blue-200",
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

  return (
    <div className="p-6 mt-16 max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">វិទ្យាសាស្ត្រ ICT</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          ជ្រើសរើសមុខវិជ្ជា ហើយចូលមើល PDF មេរៀន
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <button
          onClick={() => setActiveSubject(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
            activeSubject === null
              ? "bg-gray-800 text-white border-gray-800"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          }`}
        >
          ទាំងអស់
        </button>
        {subjects.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
              activeSubject === sub.id
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            }`}
          >
            {sub.icon} {sub.title}
          </button>
        ))}
      </div>

      {/* Subject Sections */}
      {subjects
        .filter((sub) => activeSubject === null || sub.id === activeSubject)
        .map((subject) => {
          const c = colorMap[subject.color];
          return (
            <div key={subject.id} className="mb-12">

              {/* Subject Title */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-2xl p-2 rounded-lg ${c.iconBg}`}>
                  {subject.icon}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {subject.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {subject.description}
                  </p>
                </div>
              </div>

              {/* Lesson Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {subject.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`bg-white dark:bg-gray-800 rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col`}
                  >
                    {/* Card Top Banner */}
                    <div className={`p-4 ${c.iconBg} flex items-center gap-3`}>
                      <AiOutlineFilePdf className="text-3xl" />
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>
                        FREE
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-gray-800 dark:text-white mb-1">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {lesson.description}
                      </p>

                      {/* Sub Topics */}
                      <div className="mb-4 flex-1">
                        <p className="text-xs font-semibold text-gray-400 uppercase mb-2 flex items-center gap-1">
                          <AiOutlineBook /> ខ្លឹមសាររង
                        </p>
                        <ul className="space-y-1">
                          {lesson.subTopics.map((topic, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <span
                                className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`}
                              ></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => openPdf(lesson.pdf, lesson.title)}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all"
                        >
                          <AiOutlineEye /> មើល
                        </button>
                        <a
                          href={encodeURI(lesson.pdf)}
                          download
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white transition-all"
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

      {/* PDF Viewer Modal */}
      {viewPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl">

            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <span className="font-semibold text-gray-700 dark:text-white flex items-center gap-2">
                <AiOutlineFilePdf className="text-red-500 text-xl" />
                {viewTitle}
              </span>
              <div className="flex gap-2">
                <a
                  href={viewPdf}
                  download
                  className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-1 transition-all"
                >
                  <AiOutlineDownload /> Download
                </a>
                <button
                  onClick={closePdf}
                  className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-white transition-all"
                >
                  ✕ បិទ
                </button>
              </div>
            </div>

            {/* PDF Viewer via iframe */}
            <div className="flex-1 overflow-hidden rounded-b-2xl">
              <iframe
                src={viewPdf}
                title={viewTitle}
                width="100%"
                height="100%"
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