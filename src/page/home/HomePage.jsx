import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, Heart, Share2, Bookmark, Eye, 
  Calendar, TrendingUp, Sparkles, Users, Award 
} from 'lucide-react';
import "../../index.css";

// ===================== ANIMATIONS =====================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};

// ===================== COMPONENTS =====================

/* Modern Section Header */
const SectionHeader = ({ label, color, to, icon: Icon, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="p-2 rounded-2xl" style={{ background: `${color}15` }}>
            <Icon size={28} style={{ color }} />
          </div>
        )}
        <div>
          <Link
            to={to}
            className="flex items-center gap-2 text-2xl font-bold transition-all duration-300 group md:text-3xl"
            style={{ color }}
          >
            {label}
            <ChevronRight 
              size={28} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
          {subtitle && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      </div>
      <Link 
        to={to}
        className="px-4 py-2 text-sm font-medium transition-all rounded-full hover:shadow-md"
        style={{ background: `${color}10`, color }}
      >
        មើលទាំងអស់ →
      </Link>
    </div>
    <div className="w-24 h-1 mt-3 rounded-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}40)` }} />
  </motion.div>
);

/* Modern Hero Card */
const HeroCard = ({ img, title, desc, i, category }) => (
  <motion.div
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="relative overflow-hidden shadow-xl cursor-pointer rounded-3xl group"
    style={{ height: 420 }}
  >
    <img
      src={img + "?auto=format&fit=crop&w=900&q=80"}
      alt={title}
      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    
    {category && (
      <span className="absolute px-3 py-1 text-xs font-medium text-white rounded-full top-4 left-4 bg-white/20 backdrop-blur-md">
        {category}
      </span>
    )}
    
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="mb-2 text-xl font-bold leading-snug md:text-2xl line-clamp-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/80 line-clamp-2">
        {desc}
      </p>
      <div className="mt-3 transition-opacity opacity-0 group-hover:opacity-100">
        <span className="text-sm font-medium underline underline-offset-4">
          អានបន្ថែម →
        </span>
      </div>
    </div>
  </motion.div>
);

/* Modern Small Card */
const SmallCard = ({ img, title, time, i, views, category }) => (
  <motion.div
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="overflow-hidden transition-all duration-300 bg-white shadow-md cursor-pointer dark:bg-gray-800 rounded-2xl hover:shadow-2xl group"
  >
    <div className="relative h-40 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      {category && (
        <span className="absolute px-2 py-1 text-xs text-white rounded-lg top-2 right-2 bg-black/50 backdrop-blur-sm">
          {category}
        </span>
      )}
    </div>
    <div className="p-4">
      <h4 className="mb-2 text-sm font-semibold leading-snug text-gray-800 transition-colors line-clamp-2 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
        {title}
      </h4>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {time}
        </span>
        {views && (
          <span className="flex items-center gap-1">
            <Eye size={12} />
            {views}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

/* Modern Video Card */
const VideoCard = ({ video, onLike, onShare }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-3xl hover:shadow-2xl group"
  >
    <div className="relative w-full pt-[56.25%] overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
      <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none bg-black/20 group-hover:opacity-100" />
    </div>

    <div className="flex flex-col flex-1 p-5">
      <h4 className="mb-2 text-base font-bold leading-snug text-gray-900 line-clamp-2 dark:text-white">
        {video.title}
      </h4>
      
      <div className="flex items-center gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <Eye size={14} />
          {video.views}
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {video.duration}
        </span>
      </div>

      <div className="flex items-center gap-4 pt-4 mt-auto border-t border-gray-100 dark:border-gray-700">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onLike(video.id)}
          className={`flex items-center gap-1.5 text-sm font-medium transition-all ${
            video.liked 
              ? 'text-rose-500' 
              : 'text-gray-500 hover:text-rose-500 dark:text-gray-400'
          }`}
        >
          <Heart size={18} fill={video.liked ? 'currentColor' : 'none'} />
          <span>{video.likes}</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onShare(video)}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-indigo-600 transition dark:text-gray-400"
        >
          <Share2 size={16} />
          <span>ចែករំលែក</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-amber-600 transition dark:text-gray-400"
        >
          <Bookmark size={16} />
          <span>រក្សាទុក</span>
        </motion.button>
      </div>
    </div>
  </motion.div>
);

/* Stats Counter */
const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div
    variants={fadeUp}
    className="p-6 text-center bg-white shadow-lg dark:bg-gray-800 rounded-3xl"
  >
    <div className="inline-flex p-3 mb-4 rounded-2xl" style={{ background: `${color}15` }}>
      <Icon size={32} style={{ color }} />
    </div>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{value}</h3>
    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{label}</p>
  </motion.div>
);

// ===================== MAIN PAGE =====================
const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const fetchVideos = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setVideos([
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
    { id: 14, youtubeId: "MgriqFQBdlg",  title: "ការគ្រប់គ្រងសំរាម",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 15, youtubeId: "1QydIWMcOcw",  title: "សមិទ្ធិផលនៃការមិនខិតខំរៀនសូត្រ",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 16, youtubeId: "QbuVUlt6IYw",  title: "ការប្រើប្រាស់បណ្ដាញសង្គម",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 17, youtubeId: "TVljUbXf64o",  title: "ការបំពុលបរិស្ថានដោយថង់ប្លាស្ទិក",      duration: "8:10", views: "5.7K", likes: 512, liked: false },
    { id: 18, youtubeId: "na-SWi-tyyw",  title: "របៀបកែប្រែខ្លួនទៅជាមនុស្សវិជ្ជមាន",      duration: "8:10", views: "5.7K", likes: 512, liked: false },

        // { id: 1, youtubeId: "WWKom2ptiok",  title: "បច្ចេកវិទ្យាជួយដល់អ្នកសិក្សាក្នុងសតវត្សរ៍ទី២១", duration: "4:32", views: "1.2K", likes: 342, liked: false },
        // { id: 2, youtubeId: "jWp9xB9FMA4",  title: "ផលប៉ះពាល់នៃការប្រើប្រាស់ទូរស័ព្ទដៃលើសកម្រិត", duration: "7:15", views: "2.8K", likes: 189, liked: false },
        // { id: 3, youtubeId: "71HJaRRKyE8",  title: "សាលារៀនស្អាតផ្ដើមចេញពីយើងទាំងអស់គ្នា", duration: "5:48", views: "4.1K", likes: 456, liked: false },
        // { id: 4, youtubeId: "-Pg9gUdRPFo",  title: "ការផលវិបាកនៃការបាត់បង់ព្រៃឈើ", duration: "3:55", views: "1.9K", likes: 98, liked: false },
        // { id: 5, youtubeId: "He8CrtG7JK0",  title: "អត្ថប្រយោជន៍នៃការប្រើប្រាស់ទូរស័ព្ទដៃ", duration: "6:20", views: "3.5K", likes: 267, liked: false },
        // { id: 6, youtubeId: "UJ-bkBymHcg",  title: "ការញៀនទូរស័ព្ទ និងបណ្ដាញសង្គម", duration: "8:10", views: "5.7K", likes: 512, liked: false },
      ]);
      setLoading(false);
    };
    fetchVideos();
  }, []);

  const handleLike = (id) => {
    setVideos(prev => prev.map(v =>
      v.id === id ? { ...v, liked: !v.liked, likes: v.liked ? v.likes - 1 : v.likes + 1 } : v
    ));
  };

  const handleShare = async (video) => {
    const url = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: video.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert("✅ បានចម្លង Link ទៅ Clipboard!");
      }
    } catch (err) { console.log(err); }
  };

  // Data
  const generalHeroes = [
    { img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", title: "មុខវិជ្ជាស្នូលឆ្នាំថ្មី", desc: "គណិតវិទ្យា • វិទ្យាសាស្ត្រ • ភាសាខ្មែរ • ប្រវត្តិវិទ្យា", category: "កម្មវិធីសិក្សា" },
    { img: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f", title: "ប្រកួតសរសេរអត្ថបទឈ្នះថ្នាក់ជាតិ", desc: "សិស្សថ្នាក់ទី១១ ទទួលបានជ័យលាភី", category: "សមិទ្ធិផល" },
    { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6", title: "បណ្ណាល័យឌីជីថលថ្មី", desc: "អានសៀវភៅរាប់ពាន់ក្បាលតាមអនឡាញ", category: "បណ្ណាល័យ" },
  ];

  const techHeroes = [
    { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", title: "ជំនាញអគ្គិសនី & សូឡា", desc: "សិស្សបង្កើតប្រព័ន្ធសូឡាសម្រាប់សាលា", category: "ថាមពលស្អាត" },
    { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "កែច្នៃអាហារ & កសិកម្ម", desc: "ផលិតផលកសិកម្មទំនើប", category: "កសិកម្ម" },
    { img: "https://images.unsplash.com/photo-1592982537447-6f2a6a6a0c10", title: "បសុវប្បកម្មទំនើប", desc: "ការចិញ្ចឹមសត្វបែបវិទ្យាសាស្ត្រ", category: "បសុកម្ម" },
  ];

  const smallImgsGeneral = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=400&q=80",
  ];

  const smallImgsTech = [
    "https://images.unsplash.com/photo-1581092160607-798aaaa19906?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
  ];

  const smallTitles = [
    "ប្រធានបទថ្មី - វគ្គសិក្សា ២០២៦",
    "សកម្មភាពក្រុម STEM ថ្ងៃចុងសប្តាហ៍",
    "ការតាំងពិពណ៌គម្រោងវិទ្យាសាស្ត្រ",
    "ជំនួបសិស្សានុសិស្ស និងលោកគ្រូអ្នកគ្រូ",
    "វគ្គបណ្តុះបណ្តាលបច្ចេកទេស",
  ];

  const timeLabels = ["ម្សិលមិញ", "២ ថ្ងៃមុន", "ថ្ងៃនេះ", "៣ ថ្ងៃមុន", "១ ម៉ោងមុន"];

  const stats = [
    { icon: Users, value: "5,000+", label: "សិស្សានុសិស្ស", color: "#6366f1" },
    { icon: Award, value: "120+", label: "ពានរង្វាន់ជាតិ", color: "#e11d48" },
    { icon: TrendingUp, value: "50+", label: "កម្មវិធីបណ្តុះបណ្តាល", color: "#0d9488" },
    { icon: Sparkles, value: "30+", label: "គ្រូបង្គោលឯកទេស", color: "#f59e0b" },
  ];

  return (
    <div className="min-h-screen font-khmer bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      
      {/* Hero Banner */}
      <motion.div 
        style={{ opacity }}
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-6 py-20 mx-auto text-center max-w-7xl lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl font-bold text-white md:text-5xl"
          >
            ស្វាគមន៍មកកាន់វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-white/90"
          >
            មជ្ឈមណ្ឌលអប់រំឈានមុខគេ បំពាក់ដោយបច្ចេកវិទ្យាទំនើប និងគុណភាពអប់រំខ្ពស់
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <section className="px-6 mx-auto mb-16 -mt-10 max-w-7xl lg:px-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </motion.div>
      </section>

      {/* ═══ ១. ចំណេះទូទៅ ═══ */}
      <section className="px-6 py-12 mx-auto max-w-7xl lg:px-10">
        <SectionHeader 
          label="ចំណេះទូទៅ" 
          color="#6366f1" 
          to="/general" 
          icon={Bookmark}
          subtitle="ស្វែងយល់ពីចំណេះដឹងទូទៅគ្រប់មុខវិជ្ជា"
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3"
        >
          {generalHeroes.map((item, i) => <HeroCard key={i} {...item} i={i} />)}
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {smallImgsGeneral.map((img, i) => (
            <SmallCard 
              key={i} 
              img={img} 
              title={smallTitles[i]} 
              time={timeLabels[i]} 
              views={["1.2K", "890", "2.1K", "456", "3.4K"][i]}
              category="អប់រំ"
              i={i} 
            />
          ))}
        </motion.div>
      </section>

      <div className="px-10 mx-auto max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      </div>

      {/* ═══ ២. បច្ចេកទេស ═══ */}
      <section className="px-6 py-16 mx-auto max-w-7xl lg:px-10">
        <SectionHeader 
          label="បច្ចេកវិទ្យា" 
          color="#0d9488" 
          to="/technical" 
          icon={TrendingUp}
          subtitle="បណ្តុះបណ្តាលជំនាញបច្ចេកទេសទំនើប"
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3"
        >
          {techHeroes.map((item, i) => <HeroCard key={i} {...item} i={i} />)}
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {smallImgsTech.map((img, i) => (
            <SmallCard 
              key={i} 
              img={img} 
              title={smallTitles[i]} 
              time={timeLabels[i]} 
              views={["2.3K", "1.5K", "3.2K", "987", "4.1K"][i]}
              category="បច្ចេកទេស"
              i={i} 
            />
          ))}
        </motion.div>
      </section>

      <div className="px-10 mx-auto max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
      </div>

      {/* ═══ ៣. វីដេអូស្នាដៃសិស្ស ═══ */}
      <section className="py-16 bg-gradient-to-br from-rose-50/50 via-white to-pink-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="px-6 mx-auto max-w-7xl lg:px-10">
          <SectionHeader 
            label="វីដេអូស្នាដៃសិស្ស" 
            color="#e11d48" 
            to="/videos" 
            icon={Sparkles}
            subtitle="ស្នាដៃច្នៃប្រឌិតពីសិស្សានុសិស្សរបស់យើង"
          />
          
          {loading ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3].map(i => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl pt-[56.25%]" />
                  <div className="p-5 space-y-3">
                    <div className="w-3/4 h-4 bg-gray-200 rounded dark:bg-gray-800" />
                    <div className="w-1/2 h-3 bg-gray-200 rounded dark:bg-gray-800" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} onLike={handleLike} onShare={handleShare} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-white md:text-4xl"
          >
            ត្រៀមខ្លួនដើម្បីអនាគតភ្លឺស្វាង?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8 text-lg text-indigo-100"
          >
            ចូលរៀនថ្ងៃនេះ ដើម្បីក្លាយជាផ្នែកមួយនៃភាពជោគជ័យ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-indigo-600 transition-all bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              ចុះឈ្មោះចូលរៀនឆ្នាំសិក្សាថ្មី
              <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;