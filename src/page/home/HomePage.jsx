import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../../index.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
  })
};

/* ── Section Header (news-ribbon style) ── */
const SectionHeader = ({ label, color, to }) => (
  <div className="mb-8">
    {/* Ribbon row */}
    <div className="flex items-center gap-0 mb-0">
      <Link
        to={to}
        className="flex items-center gap-2 text-white text-base font-bold px-4 py-2 font-khmer
                   hover:brightness-110 transition-all duration-200 select-none"
        style={{
          background: color,
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)',
          paddingRight: '28px',
        }}
      >
        {label}
        <span className="text-white/80 font-light ml-1">›</span>
      </Link>
    </div>
    {/* Underline */}
    <div className="h-[3px] w-full mt-0" style={{ background: `linear-gradient(90deg, ${color} 180px, #e5e7eb 180px)` }} />
  </div>
);

/* ── Hero Card ── */
const HeroCard = ({ img, title, desc, i }) => (
  <motion.div
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="relative rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer"
    style={{ height: 420 }}
  >
    <img
      src={img + "?auto=format&fit=crop&w=900&q=80"}
      alt={title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h3 className="text-2xl font-bold text-white leading-snug mb-2">{title}</h3>
      <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

/* ── Small Card ── */
const SmallCard = ({ img, title, time, i }) => (
  <motion.div
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
  >
    <div className="overflow-hidden h-36">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <h4 className="font-semibold text-sm leading-snug line-clamp-2 text-gray-800 mb-2">{title}</h4>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </motion.div>
);

/* ── Video Card ── */
const VideoCard = ({ video, onLike, onShare }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
  >
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="p-5 flex flex-col flex-1">
      <h4 className="font-bold text-base leading-snug line-clamp-2 text-gray-900 mb-1">
        {video.title}
      </h4>
      <p className="text-xs text-gray-400 mb-4">{video.views} ចូលមើល · {video.duration}</p>

      <div className="flex items-center gap-5 mt-auto pt-4 border-t border-gray-100 text-sm text-gray-500">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => onLike(video.id)}
          className={`flex items-center gap-1.5 font-medium transition ${video.liked ? 'text-rose-500' : 'hover:text-rose-500'}`}
        >
          <span className="text-lg">{video.liked ? '❤️' : '🤍'}</span> {video.likes}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => onShare(video)}
          className="flex items-center gap-1.5 hover:text-blue-500 transition font-medium"
        >
          <span className="text-lg">🔗</span> Share
        </motion.button>

        <button className="flex items-center gap-1.5 hover:text-amber-500 transition font-medium">
          <span className="text-lg">📥</span> Save
        </button>
      </div>
    </div>
  </motion.div>
);

/* ════ MAIN PAGE ════ */
const HomePage = () => {
  const [videos, setVideos] = useState([
    { id: 1, youtubeId: "WWKom2ptiok",  title: "បច្ចេកវិទ្យាជួយដល់អ្នកសិក្សាក្នុងសត្សវត្សទី២១", duration: "4:32", views: "1.2K", likes: 342, liked: false },
    { id: 2, youtubeId: "jWp9xB9FMA4",  title: "ផលប៉ះពាល់នៃការប្រើប្រាស់ទូរស័ព្ទដៃលើសកម្រិត",     duration: "7:15", views: "2.8K", likes: 189, liked: false },
    { id: 3, youtubeId: "71HJaRRKyE8",  title: "សាលារៀនស្អាតផ្ដើមចេញពីយើងទាំងអស់គ្នា",                  duration: "5:48", views: "4.1K", likes: 456, liked: false },
    { id: 4, youtubeId: "-Pg9gUdRPFo",  title: "ការផលវិបាកនៃការបាត់បង់ព្រៃឈើ",          duration: "3:55", views: "1.9K", likes: 98,  liked: false },
    { id: 5, youtubeId: "He8CrtG7JK0",  title: "អត្ថប្រយោជន៍នៃការប្រើប្រាស់ទូរស័ព្ទដៃ",       duration: "6:20", views: "3.5K", likes: 267, liked: false },
    { id: 6, youtubeId: "UJ-bkBymHcg",  title: "ការញៀនទូរស័ព្ទ និងបណ្ដាញសង្គម",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 7, youtubeId: "kWbJY6vqO8g",  title: "ការការពារព័ត៌មានផ្ទាល់ខ្លូននៅលើ Internet",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 8, youtubeId: "HtEhf8twmiw",  title: "ការប្រើបញ្ញាសិប្បនិមិត្តក្នុងយុគ្គសម័យឌីជីថល",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 9, youtubeId: "TBLiYVIGDA4",  title: "ការប្រើប្រាស់ថង់ប្លាស្ទិក និងវិធីបង្ការ",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 10, youtubeId: "YEcZjP2rS60",  title: "ជំនាញបច្ចេកទេសនៅ វិចប ព្រះបាទសម្ដេចព្រះបរមនាថនរោត្តមសីហមុនី",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 11, youtubeId: "Sh7foiIj6qQ",  title: "បញ្ហាបរិស្ថានក្នុងសាលារៀន",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 12, youtubeId: "dd_yIKCdjjo",  title: "របៀបសំពះរបស់ខ្មែរ",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 13, youtubeId: "9acYqc1pF0I",  title: "ផលប៉ះពាល់នៃជំងឺទឹកនោមផ្អែម និងរបៀបបង្ការ",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 13, youtubeId: "MgriqFQBdlg",  title: "ការគ្រប់គ្រងសំរាម",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 13, youtubeId: "1QydIWMcOcw",  title: "សមិទ្ធិផលនៃការមិនខិតខំរៀនសូត្រ",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 13, youtubeId: "QbuVUlt6IYw",  title: "ការប្រើប្រាស់បណ្ដាញសង្គម",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 13, youtubeId: "TVljUbXf64o",  title: "ការបំពុលបរិស្ថានដោយថង់ប្លាស្ទិក",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 13, youtubeId: "na-SWi-tyyw",  title: "របៀបកែប្រែខ្លួនទៅជាមនុស្សវិជ្ជមាន",      duration: "8:10", views: "5.7K", likes: 512, liked: false },


  ]);

  const handleLike = (id) =>
    setVideos(prev => prev.map(v =>
      v.id === id ? { ...v, liked: !v.liked, likes: v.liked ? v.likes - 1 : v.likes + 1 } : v
    ));

  const handleShare = async (video) => {
    const url = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    try {
      if (navigator.share) await navigator.share({ title: video.title, url });
      else { await navigator.clipboard.writeText(url); alert("✅ បានចម្លង Link ទៅ Clipboard!"); }
    } catch (err) { console.log(err); }
  };

  const generalHeroes = [
    { img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", title: "មុខវិជ្ជាស្នូលឆ្នាំថ្មី",              desc: "គណិតវិទ្យា • វិទ្យាសាស្ត្រ • ភាសាខ្មែរ • ប្រវត្តិវិទ្យា" },
    { img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f", title: "ប្រកួតសរសេរអត្ថបទឈ្នះថ្នាក់ជាតិ", desc: "សិស្សថ្នាក់ទី១១ ទទួលបានជ័យលាភ" },
    { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6", title: "បណ្ណាល័យឌីជីថលថ្មី",                  desc: "អានសៀវភៅរាប់ពាន់ក្បាលតាមអនឡាញ" },
  ];

  const techHeroes = [
    { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", title: "ជំនាញអគ្គិសនី & សូឡា",  desc: "សិស្សបង្កើតប្រព័ន្ធសូឡាសម្រាប់សាលា" },
    { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "កែច្នៃអាហារ & កសិកម្ម", desc: "ផលិតផលកសិកម្មទំនើប" },
    { img: "https://images.unsplash.com/photo-1592982537447-6f2a6a6a0c10", title: "បសុវប្បកម្មទំនើប",        desc: "ការចិញ្ចឹមសត្វបែបវិទ្យាសាស្ត្រ" },
  ];

  const smallImgsGeneral = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
  ];

  const smallImgsTech = [
    "https://images.unsplash.com/photo-1581092160607-798aaaa19906?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=400&q=80",
  ];

  const smallTitles = [
    "ប្រធានបទថ្មី - វគ្គសិក្សា ២០២៦",
    "សកម្មភាពក្រុម STEM ថ្ងៃចុងសប្តាហ៍",
    "ការតាំងពិពណ៌គម្រោងវិទ្យាសាស្ត្រ",
    "ជំនួបសិស្សសាស្ត្រាចារ្យ",
    "វគ្គបណ្តុះបណ្តាលបច្ចេកទេស",
    "ការបង្ហាញស្នាដៃរបស់ក្រុម B",
    "ព្រឹត្តិការណ៍សរសេរកូដ Hackathon",
    "ពិព័រណ៍ស្នាដៃឌីជីថល",
    "ការប្រកួតចម្លើយរហ័ស",
    "ចែករំលែកចំណេះដឹងប្រចាំខែ",
  ];
  const timeLabels = ["ម្សិលមិញ","២ ថ្ងៃមុន","ថ្ងៃនេះ","៣ ថ្ងៃមុន","១ ម៉ោងមុន","ម្សិលមិញ","ថ្ងៃនេះ","៤ ថ្ងៃមុន","១ ម៉ោងមុន","ម្សិលមិញ"];

  return (
    <div
      className="font-khmer min-h-screen"
      style={{ background: 'linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f5f3ff 100%)' }}
    >

      {/* ═══ ១. ចំណេះទូទៅ ═══ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-16">
        <SectionHeader label="ចំណេះទូទៅ" color="#6366f1" to="/general" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {generalHeroes.map((item, i) => <HeroCard key={i} {...item} i={i} />)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {smallImgsGeneral.map((img, i) => (
            <SmallCard key={i} img={img} title={smallTitles[i]} time={timeLabels[i]} i={i} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ═══ ២. បច្ចេកទេស ═══ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <SectionHeader label="បច្ចេកទេស" color="#0d9488" to="/technical" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {techHeroes.map((item, i) => <HeroCard key={i} {...item} i={i} />)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {smallImgsTech.map((img, i) => (
            <SmallCard key={i} img={img} title={smallTitles[i]} time={timeLabels[i]} i={i} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* ═══ ៣. វីដេអូស្នាដៃសិស្ស ═══ */}
      <section style={{ background: 'linear-gradient(180deg, #fff1f2 0%, #ffffff 100%)' }} className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader label="វីដេអូស្នាដៃសិស្ស" color="#e11d48" to="/videos" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} onLike={handleLike} onShare={handleShare} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;