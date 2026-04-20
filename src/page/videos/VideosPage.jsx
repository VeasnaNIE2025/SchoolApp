// pages/VideosPage.jsx
import { useState } from "react";
import {
  AiOutlinePlayCircle,
  AiOutlineCheckCircle,
  AiOutlineLock,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineEye,
} from "react-icons/ai";
import { BsPlayFill, BsCameraVideo } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";

/* ──────────────────────────────────────────
   Sample Data
────────────────────────────────────────── */
const curriculum = [
  {
    id: 1,
    title: "មេរៀនទី ១: មូលដ្ឋានគ្រឹះកម្មវិធី Microsoft word",
    total: 3,
    done: 0,
    open: true,
    lessons: [
      { id: 1, title: "17.8-ការកំណត់ទំហំជួរឈរ (Distribute Column)", duration: "3:20", done: false, url: "/Videos/17.8-ការកំណត់ទំហំជួរឈរ (Distribute Column).mp4" },
      { id: 2, title: "17.9-ការកំណត់ទំហំជួរដេក (Distribute Rows)", duration: "5:45", done: false, url: "/Videos/17.9-ការកំណត់ទំហំជួរដេក (Distribute Rows).mp4" },
      { id: 3, title: "17.10-ការតម្រឹមអក្សរក្នុងក្រឡា (Text Alignment)",  duration: "4:10", done: false, url: "/Videos/17.10-ការតម្រឹមអក្សរក្នុងក្រឡា (Text Alignment).mp4"},
      { id: 4, title: "17.11-ការកំណត់ទិសដៅក្នុងក្រឡា (Text Direction)", duration: "3:20", done: false, url: "/Videos/17.11-ការកំណត់ទិសដៅក្នុងក្រឡា (Text Direction).mp4" },
      { id: 5, title: "17.12-ការតម្រៀបទិន្នន័យក្នុងតារាងSort Table", duration: "3:20", done: false, url: "/Videos/17.12-ការតម្រៀបទិន្នន័យក្នុងតារាងSort Table.mp4" },
      { id: 6, title: "17.13-ការធ្វើឱ្យក្បាលតារាងរត់គ្រប់ជួរ Repeat Header Rows", duration: "5:45", done: false, url: "/Videos/17.13-ការធ្វើឱ្យក្បាលតារាងរត់គ្រប់ជួរ Repeat Header Rows.mp4" },
      { id: 7, title: "17.14-ការប្រើប្រាស់រូបមន្ដក្នុងតារាងFormular",  duration: "4:10", done: false, url: "/Videos/17.14-ការប្រើប្រាស់រូបមន្ដក្នុងតារាងFormular.mp4"},
      { id: 8, title: "18-ការបញ្ចូលរូបភាព Insert Picture", duration: "3:20", done: false, url: "/Videos/18-ការបញ្ចូលរូបភាព Insert Picture.mp4" },
      { id: 9, title: "18.1-ការប្រើប្រាស់ពន្លឺ djust", duration: "5:45", done: false, url: "/Videos/18.1-ការប្រើប្រាស់ពន្លឺ djust.mp4" },
      { id: 10, title: "18.2-ការប្រើប្រាស់ម៉ូតរូបភាពPicture Style",  duration: "4:10", done: false, url: "/Videos/18.2-ការប្រើប្រាស់ម៉ូតរូបភាពPicture Style.mp4" },
      { id: 11, title: "18.3-ការកំណត់ទម្រង់អក្សរជាមួយរូបភាពWrap Text",  duration: "4:10", done: false, url: "/Videos/18.3-ការកំណត់ទម្រង់អក្សរជាមួយរូបភាពWrap Text.mp4" },
    ],
  },
  {
    id: 2,
    title: "មេរៀនទី ២: ការអនុវត្ត Project ",
    total: 3,
    done: 0,
    open: false,
    lessons: [
      { id: 4, title: "Hardware គឺជាអ្វី?",  duration: "6:00", done: false, url: "/Videos/lesson4.mp4" },
      { id: 5, title: "Software ប្រភេទនានា", duration: "7:30", done: false, url: "" },
      { id: 6, title: "ការដំឡើង OS",         duration: "10:00", done: false, locked: true, url: "" },
    ],
  },
  {
    id: 3,
    title: "មេរៀនទី ៣: Internet & Network",
    total: 2,
    done: 0,
    open: false,
    lessons: [
      { id: 7, title: "អ៊ីនធឺណែតដំណើរការដូចម្ដេច?", duration: "8:15", done: false, url: "" },
      { id: 8, title: "LAN, WAN, MAN",               duration: "5:50", done: false, locked: true, url: "" },
    ],
  },
];

/* ──────────────────────────────────────────
   Helpers  ✅ ទទួល sections ជា parameter
────────────────────────────────────────── */
function totalStats(sections) {
  let total = 0, done = 0;
  sections.forEach(s => {
    total += s.total;
    done  += s.lessons.filter(l => l.done).length; // ✅ រាប់ពី lessons state
  });
  return { total, done, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
}

export default function VideosPage() {
  const allLessonsFlat = (secs) => secs.flatMap(s => s.lessons);

  const [sections, setSections] = useState(curriculum);
  const [activeId, setActiveId] = useState(curriculum[0].lessons[0].id);

  const allLessons  = allLessonsFlat(sections);
  const activeLesson = allLessons.find(l => l.id === activeId);
  const activeIdx   = allLessons.findIndex(l => l.id === activeId);
  const stats       = totalStats(sections); // ✅ ផ្ញើ sections state

  const toggleSection = (sId) =>
    setSections(prev => prev.map(s => s.id === sId ? { ...s, open: !s.open } : s));

  /* ✅ Mark lesson ដែល active ថា done រួចទើបទៅ lesson ថ្មី */
  const goLesson = (lesson) => {
    if (!lesson || lesson.locked) return;

    setSections(prev =>
      prev.map(section => {
        const updatedLessons = section.lessons.map(l =>
          l.id === activeId ? { ...l, done: true } : l
        );
        return {
          ...section,
          lessons: updatedLessons,
          done: updatedLessons.filter(l => l.done).length, // ✅ update done count
        };
      })
    );

    setActiveId(lesson.id);
  };

  /* ✅ Mark done នៅពេល video ended */
  const handleVideoEnded = () => {
    setSections(prev =>
      prev.map(section => {
        const updatedLessons = section.lessons.map(l =>
          l.id === activeId ? { ...l, done: true } : l
        );
        return {
          ...section,
          lessons: updatedLessons,
          done: updatedLessons.filter(l => l.done).length,
        };
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col pt-16 mt-5">

      {/* ── Top course bar ── */}
      <div className="bg-gray-900 border-b border-white/10 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BsCameraVideo className="text-indigo-400 text-lg" />
          <span className="text-sm font-semibold text-white/90 font-khmer">
            ព័ត៌មានវិទ្យា – វីដេអូមេរៀន
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <AiOutlineEye className="text-base" />
          <span className="font-khmer">{stats.done}/{stats.total} មេរៀន</span>
          <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700"
              style={{ width: `${stats.pct}%` }}
            />
          </div>
          <span className="text-indigo-400 font-semibold">{stats.pct}%</span>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">

        {/* ══ LEFT: Video Player ══ */}
        <div className="flex-1 flex flex-col bg-black">

          {/* Video */}
          <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "calc(100vh - 160px)" }}>
            {activeLesson?.url ? (
              <video
                key={activeLesson.id}
                className="w-full h-full object-contain"
                controls
                autoPlay
                src={activeLesson.url}
                onEnded={handleVideoEnded} // ✅ auto mark done
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 gap-4">
                <AiOutlineLock className="text-5xl text-white/30" />
                <p className="text-white/40 font-khmer text-sm">មេរៀននេះត្រូវបិទ</p>
              </div>
            )}
          </div>

          {/* Lesson info */}
          <div className="p-5 border-t border-white/5 bg-gray-950">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h1 className="text-lg font-bold text-white font-khmer leading-snug">
                  {activeLesson?.title}
                </h1>
                <p className="text-xs text-white/40 mt-1 font-khmer">
                  រយៈពេល: {activeLesson?.duration}
                </p>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  disabled={activeIdx === 0}
                  onClick={() => goLesson(allLessons[activeIdx - 1])}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition font-khmer"
                >
                  ← មុន
                </button>
                <button
                  disabled={activeIdx === allLessons.length - 1 || allLessons[activeIdx + 1]?.locked}
                  onClick={() => goLesson(allLessons[activeIdx + 1])}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed transition font-khmer"
                >
                  បន្ទាប់ →
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 p-4 bg-white/5 rounded-xl text-sm text-white/60 font-khmer leading-relaxed border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineBookOpen className="text-indigo-400" />
                <span className="text-white/80 font-semibold">សេចក្ដីពិពណ៌នា</span>
              </div>
              <p>
                នៅក្នុងមេរៀននេះ សិស្សានុសិស្សនឹងបានសិក្សាអំពី
                <strong className="text-indigo-300"> {activeLesson?.title}</strong> ដោយមានការ
                ពន្យល់លម្អិតពីគ្រូបង្រៀន រួមជាមួយឧទាហរណ៍ជាក់ស្ដែង។
              </p>
            </div>
          </div>
        </div>

        {/* ══ RIGHT: Curriculum Sidebar ══ */}
        <div className="w-full lg:w-96 bg-gray-900 border-l border-white/10 flex flex-col overflow-y-auto">

          {/* Sidebar header */}
          <div className="px-5 py-4 border-b border-white/10 sticky top-0 bg-gray-900 z-10">
            <h2 className="text-sm font-bold text-white font-khmer">មាតិកាវីដេអូ</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700"
                  style={{ width: `${stats.pct}%` }}
                />
              </div>
              <span className="text-xs text-indigo-400 font-semibold">{stats.pct}%</span>
            </div>
          </div>

          {/* Sections */}
          <div className="flex-1">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-white/5">

                {/* Section header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 transition text-left"
                >
                  <div>
                    <p className="text-sm font-semibold text-white font-khmer">{section.title}</p>
                    <p className="text-xs text-white/40 mt-0.5 font-khmer">
                      {section.lessons.filter(l => l.done).length}/{section.total} •{" "}
                      {section.lessons.reduce((a, l) => a + parseInt(l.duration), 0)} នាទី
                    </p>
                  </div>
                  {section.open
                    ? <AiOutlineDown className="text-white/50 text-sm flex-shrink-0" />
                    : <AiOutlineRight className="text-white/50 text-sm flex-shrink-0" />
                  }
                </button>

                {/* Lessons list */}
                {section.open && (
                  <div className="pb-2">
                    {section.lessons.map((lesson) => {
                      const isActive = lesson.id === activeId;
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => goLesson(lesson)}
                          disabled={lesson.locked}
                          className={`w-full flex items-start gap-3 px-5 py-3 text-left transition
                            ${isActive
                              ? "bg-indigo-600/20 border-l-2 border-indigo-500"
                              : "hover:bg-white/5 border-l-2 border-transparent"
                            }
                            ${lesson.locked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                          `}
                        >
                          {/* Icon */}
                          <div className="mt-0.5 flex-shrink-0">
                            {lesson.locked ? (
                              <AiOutlineLock className="text-white/40 text-base" />
                            ) : lesson.done ? (
                              <AiOutlineCheckCircle className="text-green-400 text-base" />
                            ) : isActive ? (
                              <BsPlayFill className="text-indigo-400 text-base" />
                            ) : (
                              <AiOutlinePlayCircle className="text-white/50 text-base" />
                            )}
                          </div>

                          {/* Title + duration */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-khmer leading-snug line-clamp-2
                              ${isActive ? "text-indigo-300 font-semibold" : "text-white/75"}`}>
                              {lesson.title}
                            </p>
                            <p className="text-xs text-white/35 mt-1">{lesson.duration}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}