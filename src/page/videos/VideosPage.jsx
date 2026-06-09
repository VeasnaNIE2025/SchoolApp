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
   Auto-assign unique IDs to all lessons
────────────────────────────────────────── */
let _id = 1;
const uid = () => _id++;

const curriculum = [
  {
    id: 1,
    title: "ការណែនាំអំពីគន្លឺះខ្លីៗនៃការប្រើប្រាស់កុំព្យូទ័រ",
    total: 1,
    done: 0,
    open: true,
 lessons: [
  {
    id: uid(),
    title: "1-HelpFindKey",
    duration: "3:20",
    done: false,
    url: "/Videos/Other/1-HelpFindKey.mp4",  // ✅ មាន 1-
  },
  {
    id: uid(),
    title: "2-How To Upload Document To System",
    duration: "3:20",
    done: false,
    url: "/Videos/Other/2-How To Upload Document To System.mp4",  // ✅ មាន 2-
  },
  {
    id: uid(),
    title: "3-telegram-install",
    duration: "3:20",
    done: false,
    url: "/Videos/Other/3-telegram-install.mp4",  // ✅ មាន 3-
  },
],
  },
  {
    id: 2,
    title: "មេរៀនទី ១: មូលដ្ឋានគ្រឹះកម្មវិធី Microsoft word",
    total: 11,
    done: 0,
    open: true,
    lessons: [
      { id: uid(), title: "17.8-ការកំណត់ទំហំជួរឈរ (Distribute Column)", duration: "3:20", done: false, url: "/Videos/17-TableMs0/17.8-ការកំណត់ទំហំជួរឈរ (Distribute Column).mp4" },
      { id: uid(), title: "17.9-ការកំណត់ទំហំជួរដេក (Distribute Rows)", duration: "5:45", done: false, url: "/Videos/17-TableMs0/17.9-ការកំណត់ទំហំជួរដេក (Distribute Rows).mp4" },
      { id: uid(), title: "17.10-ការតម្រឹមអក្សរក្នុងក្រឡា (Text Alignment)", duration: "4:10", done: false, url: "/Videos/17-TableMs0/17.10-ការតម្រឹមអក្សរក្នុងក្រឡា (Text Alignment).mp4" },
      { id: uid(), title: "17.11-ការកំណត់ទិសដៅក្នុងក្រឡា (Text Direction)", duration: "3:20", done: false, url: "/Videos/17-TableMs0/17.11-ការកំណត់ទិសដៅក្នុងក្រឡា (Text Direction).mp4" },
      { id: uid(), title: "17.12-ការតម្រៀបទិន្នន័យក្នុងតារាងSort Table", duration: "3:20", done: false, url: "/Videos/17-TableMs1/17.12-ការតម្រៀបទិន្នន័យក្នុងតារាងSort Table.mp4" },
      { id: uid(), title: "17.13-ការធ្វើឱ្យក្បាលតារាងរត់គ្រប់ជួរ Repeat Header Rows", duration: "5:45", done: false, url: "/Videos/17-TableMs1/17-TableMs0/17.13-ការធ្វើឱ្យক្បាលតារាងរត់គ្រប់ជួរ Repeat Header Rows.mp4" },
      { id: uid(), title: "17.14-ការប្រើប្រាស់រូបមនkនុងតារាងFormular", duration: "4:10", done: false, url: "/Videos/17-TableMs1/17.14-ការប្រើប្រាស់រូបមនkនុងតារាងFormular.mp4" },
      { id: uid(), title: "18-ការបញ្ចូលរូបភាព Insert Picture", duration: "3:20", done: false, url: "/Videos/18-Picture/18-ការបញ្ចូលរូបភាព Insert Picture.mp4" },
      { id: uid(), title: "18.1-ការប្រើប្រាស់ពន្លឺ djust", duration: "5:45", done: false, url: "/Videos/18-Picture/18.1-ការប្រើប្រាស់ពន្លឺ djust.mp4" },
      { id: uid(), title: "18.2-ការប្រើប្រាស់ម៉ូតរូបភាពPicture Style", duration: "4:10", done: false, url: "/Videos/18-Picture/18.2-ការប្រើប្រាស់ម៉ូតរូបភាពPicture Style.mp4" },
      { id: uid(), title: "18.3-ការកំណត់ទម្រង់អក្សរជាមួយរូបភាពWrap Text", duration: "4:10", done: false, url: "/Videos/18-Picture/18.3-ការកំណត់ទម្រង់អក្សរជាមួយរូបភាពWrap Text.mp4" },
      { id: uid(), title: "18.5-ការរៀបចំលំដាប់ស្រទាប់ (Layer) និងការបង្ហាញ Object", duration: "3:20", done: false, url: "/Videos/18-Picture1/18.5-ការរៀបចំលំដាប់ស្រទាប់ (Layer) និងការបង្ហាញ Object.mp4" },
      { id: uid(), title: "18.6-សិក្សាអំពី Select Pane", duration: "5:45", done: false, url: "/Videos/18-Picture1/18.6-សិក្សាអំពី Select Pane.mp4" },
      { id: uid(), title: "18.7-សិក្សាអំពី  Aligment Object", duration: "4:10", done: false, url: "/Videos/18-Picture1/18.7-សិក្សាអំពី  Aligment Object.mp4" },
      { id: uid(), title: "18.8-សិក្សាអំពី Group Object", duration: "4:10", done: false, url: "/Videos/18-Picture1/18.8-សិក្សាអំពី Group Object.mp4" },
      { id: uid(), title: "18.9-សិក្សាអំពីការកំណត់ទិសដៅរូបភាព Picture Rotate", duration: "5:45", done: false, url: "/Videos/18-Picture2/18.9-សិក្សាអំពីការកំណត់ទិសដៅរូបភាព Picture Rotate.mp4" },
      { id: uid(), title: "18.10-សិក្សាអំពីការកាត់រូបភាព Picture Crop", duration: "4:10", done: false, url: "/Videos/18-Picture2/18.10-សិក្សាអំពីការកាត់រូបភាព Picture Crop.mp4" },
      { id: uid(), title: "18.11-សិក្សាអំពី ​ការប្រើអត្ថបទជំនួស Alt Text", duration: "4:10", done: false, url: "/Videos/18-Picture2/18.11-សិក្សាអំពី ​ការប្រើអត្ថបទជំនួស Alt Text.mp4" },
      { id: uid(), title: "19-សិក្សាអំពី Shape", duration: "4:10", done: false, url: "/Videos/19-Shape/19-សិក្សាអំពី Shape.mp4" },
      { id: uid(), title: "19.1-ការ Edit Shape", duration: "4:10", done: false, url: "/Videos/19-Shape/19.1-ការ Edit Shape.mp4" },
      { id: uid(), title: "19.2-Shape Style", duration: "5:45", done: false, url: "/Videos/19-Shape/19.2-Shape Style.mp4" },
      { id: uid(), title: "19.3-Align Text In Shape", duration: "4:10", done: false, url: "/Videos/19-Shape/19.3-Align Text In Shape.mp4" },
      { id: uid(), title: "19.4-ការកំណត់ទិសដៅអក្សរ Text Direction In Shape", duration: "4:10", done: false, url: "/Videos/19-Shape/19.4-ការកំណត់ទិសដៅអក្សរ Text Direction In Shape.mp4" },
      { id: uid(), title: "19.5-Shape Create Link", duration: "4:10", done: false, url: "/Videos/19-Shape/19.5-Shape Create Link.mp4" },
      { id: uid(), title: "20-សិក្សាអំពី​ Smart Art", duration: "3:20", done: false, url: "/Videos/20-SmartArt/20-SmartArt.mp4" },
      { id: uid(), title: "20.1-សិក្សាអំពីរបៀបបញ្ចូល Smart Art", duration: "5:45", done: false, url: "/Videos/20-SmartArt/20.1-InsertSmartArt.mp4" },
      { id: uid(), title: "20.2-សិក្សាអំពីរបៀប Add Bullets", duration: "4:10", done: false, url: "/Videos/20-SmartArt/20.2-AddBullets.mp4" },
      { id: uid(), title: "20.3-សិក្សាអំពីរបៀប Add Text Pane", duration: "4:10", done: false, url: "/Videos/20-SmartArt/20.3-AddText.mp4" },
      { id: uid(), title: "20.4-សិក្សាអំពី Layout និង Color", duration: "4:10", done: false, url: "/Videos/20-SmartArt/20.4-ChangeLayoutAndColor.mp4" },
    ],
  },
  {
    id: 3,
    title: "មេរៀនទី ២: សិក្សាអំពី  Microsoft Excel 2021",
    total: 3,
    done: 0,
    open: false,
    lessons: [
      { id: uid(), title: "6.1-IF", duration: "6:00", done: false, url: "/Videos/Excel/6-Function/6.1-IF.mp4" },
      { id: uid(), title: "6.2-And & IF + AND", duration: "7:30", done: false, url: "/Videos/Excel/6-Function/6.2-And-IF-AND.mp4" },
      { id: uid(), title: "6.3-OR & IF+ OR", duration: "10:00", done: false, url: "/Videos/Excel/6-Function/6.3-OR-IF-OR.mp4" },
      { id: uid(), title: "6.4-NOT & IF + NOT", duration: "8:15", done: false, url: "/Videos/Excel/6-Function/6.4-Not-Not-If.mp4" },
      { id: uid(), title: "6.5-IF+AND+OR", duration: "5:50", done: false, url: "/Videos/Excel/6-Function/6.5-IF-AND-OR.mp4" },
      { id: uid(), title: "កំណែលំហាត់", duration: "5:50", done: false, locked: true, url: "/Videos/Excel/6-Function/6.1-IF.mp4" },
    ],
  },
  {
    id: 4,
    title: "មេរៀនទី ៣: គន្លឹះដោះស្រាយសំណួរ",
    total: 2,
    done: 0,
    open: false,
    lessons: [
      { id: uid(), title: "1.របៀបដោនឡូត និងតម្លើងកម្មវិធីតេលេក្រាមលើកុំព្យូទ័រ", duration: "8:15", done: false, url: "/Videos/telegram-install.mp4" },
      { id: uid(), title: "LAN, WAN, MAN", duration: "5:50", done: false, locked: true, url: "" },
    ],
  },
];

// ... component code ដដែល មិនមានការផ្លាស់ប្តូរ

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
    <div className="flex flex-col min-h-screen pt-16 mt-5 text-white bg-gray-950">

      {/* ── Top course bar ── */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-white/10">
        <div className="flex items-center gap-3">
          <BsCameraVideo className="text-lg text-indigo-400" />
          <span className="text-sm font-semibold text-white/90 font-khmer">
            ព័ត៌មានវិទ្យា – វីដេអូមេរៀន
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <AiOutlineEye className="text-base" />
          <span className="font-khmer">{stats.done}/{stats.total} មេរៀន</span>
          <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-700 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
              style={{ width: `${stats.pct}%` }}
            />
          </div>
          <span className="font-semibold text-indigo-400">{stats.pct}%</span>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="flex flex-col flex-1 overflow-hidden lg:flex-row">

        {/* ══ LEFT: Video Player ══ */}
        <div className="flex flex-col flex-1 bg-black">

          {/* Video */}
          <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "calc(100vh - 160px)" }}>
            {activeLesson?.url ? (
              <video
                key={activeLesson.id}
                className="object-contain w-full h-full"
                controls
                autoPlay
                src={activeLesson.url}
                onEnded={handleVideoEnded} // ✅ auto mark done
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full gap-4 bg-gray-900">
                <AiOutlineLock className="text-5xl text-white/30" />
                <p className="text-sm text-white/40 font-khmer">មេរៀននេះត្រូវបិទ</p>
              </div>
            )}
          </div>

          {/* Lesson info */}
          <div className="p-5 border-t border-white/5 bg-gray-950">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-lg font-bold leading-snug text-white font-khmer">
                  {activeLesson?.title}
                </h1>
                <p className="mt-1 text-xs text-white/40 font-khmer">
                  រយៈពេល: {activeLesson?.duration}
                </p>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  disabled={activeIdx === 0}
                  onClick={() => goLesson(allLessons[activeIdx - 1])}
                  className="px-4 py-2 text-xs font-semibold transition rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed font-khmer"
                >
                  ← មុន
                </button>
                <button
                  disabled={activeIdx === allLessons.length - 1 || allLessons[activeIdx + 1]?.locked}
                  onClick={() => goLesson(allLessons[activeIdx + 1])}
                  className="px-4 py-2 text-xs font-semibold transition bg-indigo-600 rounded-lg hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed font-khmer"
                >
                  បន្ទាប់ →
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 mt-4 text-sm leading-relaxed border bg-white/5 rounded-xl text-white/60 font-khmer border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineBookOpen className="text-indigo-400" />
                <span className="font-semibold text-white/80">សេចក្ដីពិពណ៌នា</span>
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
        <div className="flex flex-col w-full overflow-y-auto bg-gray-900 border-l lg:w-96 border-white/10">

          {/* Sidebar header */}
          <div className="sticky top-0 z-10 px-5 py-4 bg-gray-900 border-b border-white/10">
            <h2 className="text-sm font-bold text-white font-khmer">មាតិកាវីដេអូ</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-700 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                  style={{ width: `${stats.pct}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-indigo-400">{stats.pct}%</span>
            </div>
          </div>

          {/* Sections */}
          <div className="flex-1">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-white/5">

                {/* Section header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full px-5 py-4 text-left transition hover:bg-white/5"
                >
                  <div>
                    <p className="text-sm font-semibold text-white font-khmer">{section.title}</p>
                    <p className="text-xs text-white/40 mt-0.5 font-khmer">
                      {section.lessons.filter(l => l.done).length}/{section.total} •{" "}
                      {section.lessons.reduce((a, l) => a + parseInt(l.duration), 0)} នាទី
                    </p>
                  </div>
                  {section.open
                    ? <AiOutlineDown className="flex-shrink-0 text-sm text-white/50" />
                    : <AiOutlineRight className="flex-shrink-0 text-sm text-white/50" />
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
                              <AiOutlineLock className="text-base text-white/40" />
                            ) : lesson.done ? (
                              <AiOutlineCheckCircle className="text-base text-green-400" />
                            ) : isActive ? (
                              <BsPlayFill className="text-base text-indigo-400" />
                            ) : (
                              <AiOutlinePlayCircle className="text-base text-white/50" />
                            )}
                          </div>

                          {/* Title + duration */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-khmer leading-snug line-clamp-2
                              ${isActive ? "text-indigo-300 font-semibold" : "text-white/75"}`}>
                              {lesson.title}
                            </p>
                            <p className="mt-1 text-xs text-white/35">{lesson.duration}</p>
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