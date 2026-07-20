import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineArrowLeft,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineClose,
  AiOutlineZoomIn,
  AiOutlineFire,
  AiOutlineLineChart,
} from "react-icons/ai";

import { allNews } from "../../data/newsData";

// ============================
// Custom Hook: Fetch Google Sheet data
// ============================
const useGoogleSheetData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

// ============================
// Dynamic Table Component (auto‑generated from JSON)
// ============================
const DynamicTable = ({ sheetUrl }) => {
  const { data, loading, error } = useGoogleSheetData(sheetUrl);

  if (loading) return <div className="p-4 text-center" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.6' }}>កំពុងផ្ទុកទិន្នន័យសិស្ស...</div>;
  if (error) return <div className="p-4 text-center text-red-500" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.6' }}>មានបញ្ហា៖ {error.message}</div>;
  if (!data || data.length === 0) return <div className="p-4 text-center" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.6' }}>មិនមានទិន្នន័យសិស្ស</div>;

  const columns = Object.keys(data[0]);

  return (
    <div 
      className="my-6 overflow-x-auto border border-gray-200 shadow-md rounded-xl dark:border-gray-700" 
      style={{ 
        maxHeight: '600px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#3b82f6 #e5e7eb',
        fontFamily: "'Kantumruy Pro', sans-serif"
      }}>
      <style>{`
        /* Horizontal Scrollbar Styling */
        div::-webkit-scrollbar {
          height: 10px;
        }
        div::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
          border: 2px solid #f3f4f6;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
      <table 
        className="text-xs text-left text-gray-600 dark:text-gray-300" 
        style={{ width: 'fit-content', minWidth: '100%', lineHeight: '1.7', letterSpacing: '0.2px' }}>
        <thead className="sticky top-0 z-10 text-xs font-semibold text-gray-700 uppercase bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200" style={{ lineHeight: '1.6' }}>
          <tr>
            {columns.map((col) => (
              <th 
                key={col} 
                className="px-3 py-2.5 whitespace-nowrap border-r border-gray-200 dark:border-gray-600 last:border-r-0 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr 
              key={idx} 
              className="transition-colors bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700/50">
              {columns.map((col) => (
                <td 
                  key={`${idx}-${col}`} 
                  className="px-3 py-1.5 whitespace-nowrap border-r border-gray-100 dark:border-gray-700 last:border-r-0">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ============================
// Lightbox Component
// ============================
const Lightbox = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/90 backdrop-blur-sm"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          src={image}
          alt="Full screen"
          className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute p-2 text-white transition rounded-full right-6 top-6 bg-white/20 hover:bg-white/40"
          aria-label="Close"
        >
          <AiOutlineClose size={28} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

// ============================
// Sidebar Widgets (with safe fallbacks for missing data)
// ============================
const RecentNewsWidget = ({ news }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="sticky p-5 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700 top-24"
    style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
  >
    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900 dark:text-white" style={{ lineHeight: '1.6' }}>
      <AiOutlineFire className="text-xl text-red-500" />
      ព័ត៌មានថ្មីៗ
    </h3>
    <div className="space-y-4">
      {news.slice(0, 5).map((n) => (
        <Link key={n.id} to={`/news/${n.id}`}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex gap-3 cursor-pointer group"
          >
            <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-xl">
              <img
                src={n.coverImage}
                alt={n.title}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition bg-black/20 group-hover:bg-black/40" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 transition-colors dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{ lineHeight: '1.6', letterSpacing: '0.2px' }}>
                {n.title}
              </p>
              <p className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                <AiOutlineCalendar className="text-xs" /> {n.date}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.div>
);

const TrendingWidget = ({ news }) => {
  // Ensure every article has views (default 0)
  const safeNews = news.map(n => ({ ...n, views: n.views || 0, likes: n.likes || 0 }));
  const sorted = [...safeNews].sort((a, b) => b.views - a.views);
  const topNews = sorted.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="p-5 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700"
      style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
    >
      <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900 dark:text-white" style={{ lineHeight: '1.6' }}>
        <AiOutlineLineChart className="text-xl text-green-500" />
        កំពុងពេញនិយម
      </h3>
      <div className="space-y-3">
        {topNews.map((n, i) => (
          <Link key={n.id} to={`/news/${n.id}`}>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-3 py-2 border-b cursor-pointer group border-gray-50 dark:border-gray-700 last:border-0"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm text-gray-700 transition-colors dark:text-gray-300 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400" style={{ lineHeight: '1.6', letterSpacing: '0.2px' }}>
                  {n.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                  <span className="flex items-center gap-0.5">
                    <AiOutlineEye className="text-xs" /> {n.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <AiOutlineLike /> {n.likes}
                  </span>
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const StatsWidget = ({ news }) => {
  const totalLikes = news.reduce((sum, n) => sum + (n.likes || 0), 0);
  const totalComments = news.reduce((sum, n) => sum + (n.comments || 0), 0);
  const totalViews = news.reduce((sum, n) => sum + (n.views || 0), 0);

  const stats = [
    { label: "អត្ថបទសរុប", value: news.length, icon: <AiOutlineLineChart /> },
    { label: "អ្នកមើលសរុប", value: totalViews.toLocaleString(), icon: <AiOutlineEye /> },
    { label: "Like សរុប", value: totalLikes.toLocaleString(), icon: <AiOutlineLike /> },
    { label: "ការចែករំលែក", value: "248", icon: <AiOutlineShareAlt /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="p-5 text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl"
      style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
    >
      <h3 className="flex items-center gap-2 mb-4 text-lg font-bold" style={{ lineHeight: '1.6' }}>
        <AiOutlineLineChart /> ស្ថិតិព័ត៌មាន
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ scale: 1.05 }}
            className="p-3 text-center bg-white/15 rounded-xl backdrop-blur-sm"
          >
            <div className="mb-1 text-2xl">{s.icon}</div>
            <div className="text-xl font-bold">{s.value}</div>
            <div className="text-xs text-white/80" style={{ lineHeight: '1.6' }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ============================
// Helper Components
// ============================
const BackButton = ({ onClick }) => (
  <motion.button
    whileHover={{ x: -5 }}
    onClick={onClick}
    className="group flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800"
    style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.5', letterSpacing: '0.2px' }}
  >
    <AiOutlineArrowLeft className="transition-transform group-hover:-translate-x-1" />
    <span>ត្រឡប់ក្រោយ</span>
  </motion.button>
);

const CategoryBadge = ({ category }) => (
  <span className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.4' }}>
    {category}
  </span>
);

const MetaItem = ({ icon: Icon, text }) => {
  if (!Icon) return null;
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.5', letterSpacing: '0.2px' }}>
      <Icon className="text-base" />
      <span>{text}</span>
    </div>
  );
};

const AuthorCard = ({ author }) => (
  <div className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-2xl dark:bg-gray-800/50" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-br from-blue-400 to-indigo-500">
      <AiOutlineUser className="text-xl" />
    </div>
    <div>
      <p className="font-semibold text-gray-800 dark:text-white" style={{ lineHeight: '1.5', letterSpacing: '0.2px' }}>{author}</p>
      <p className="text-xs text-gray-400" style={{ lineHeight: '1.4' }}>អ្នកនិពន្ធ</p>
    </div>
  </div>
);

const LikeShareBar = ({ liked, likes, shares, onLike, onShare }) => (
  <div className="fixed z-40 flex gap-3 p-2 -translate-x-1/2 shadow-xl bottom-6 left-1/2 rounded-2xl bg-white/90 backdrop-blur-md dark:bg-gray-900/90" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onLike}
      className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-medium transition-all ${
        liked
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200"
      }`}
      style={{ lineHeight: '1.5', letterSpacing: '0.2px' }}
    >
      <AiOutlineLike className="text-lg" />
      <span>{likes}</span>
    </motion.button>
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onShare}
      className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-2.5 font-medium text-gray-700 transition-all hover:bg-green-100 dark:bg-gray-800 dark:text-gray-200"
      style={{ lineHeight: '1.5', letterSpacing: '0.2px' }}
    >
      <AiOutlineShareAlt className="text-lg" />
      <span>{shares}</span>
    </motion.button>
  </div>
);

const GalleryGrid = ({ images, onImageClick }) => {
  if (!images?.length) return null;
  return (
    <div className="mt-12" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
      <h3 className="mb-5 text-2xl font-bold text-gray-800 dark:text-white" style={{ lineHeight: '1.6', letterSpacing: '0.2px' }}>🖼️ វិចិត្រដ្ឋាន</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            onClick={() => onImageClick(img)}
            className="relative overflow-hidden transition-all shadow-lg cursor-pointer group rounded-2xl hover:shadow-xl"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/40 group-hover:opacity-100">
              <AiOutlineZoomIn className="text-4xl text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const RelatedNews = ({ articles }) => {
  if (!articles?.length) return null;
  return (
    <div className="pt-12 mt-8 border-t border-gray-200 dark:border-gray-800">
      <h3 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.6', letterSpacing: '0.2px' }}>📌 ព័ត៌មានពាក់ព័ន្ធ</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((news) => (
          <Link
            key={news.id}
            to={`/news/${news.id}`}
            className="overflow-hidden transition-all bg-white shadow-md group rounded-2xl hover:shadow-xl dark:bg-gray-800"
          >
            <img
              src={news.coverImage}
              alt={news.title}
              className="object-cover w-full transition-transform h-44 group-hover:scale-105"
              loading="lazy"
            />
            <div className="p-4" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
              <h4 className="font-bold text-gray-800 line-clamp-2 dark:text-white" style={{ lineHeight: '1.5', letterSpacing: '0.2px' }}>{news.title}</h4>
              <p className="mt-2 text-xs text-gray-400" style={{ lineHeight: '1.4' }}>{news.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ============================
// Custom Hook for Interactions (Like/Share)
// ============================
const useInteractions = (initialLikes = 0) => {
  const [state, setState] = useState({
    liked: false,
    likes: initialLikes,
    shares: 0,
  });
  const handleLike = useCallback(() => {
    setState((prev) => ({
      ...prev,
      liked: !prev.liked,
      likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
    }));
  }, []);
  const handleShare = useCallback(async () => {
    setState((prev) => ({ ...prev, shares: prev.shares + 1 }));
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("✅ ចម្លងតំណជោគជ័យ!");
    } catch {
      console.error("Copy failed");
    }
  }, []);
  return { interactions: state, handleLike, handleShare };
};

// ============================
// Main Component: NewsDetail
// ============================
const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = useMemo(() => allNews.find((n) => n.id === parseInt(id, 10)), [id]);

  const relatedNews = useMemo(() => {
    if (!article) return [];
    return allNews
      .filter((n) => n.id !== article.id && n.category === article.category)
      .slice(0, 3);
  }, [article]);

  const { interactions, handleLike, handleShare } = useInteractions(article?.likes || 0);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Prepare data for sidebar (with defaults for missing numeric fields)
  const allNewsWithDefaults = useMemo(() => {
    return allNews.map(n => ({
      ...n,
      views: n.views || 0,
      likes: n.likes || 0,
      comments: n.comments || 0,
    }));
  }, []);

  const recentNews = allNewsWithDefaults.filter(n => n.isNew === true);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen pt-20 bg-gray-50 dark:bg-gray-950" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
        <div className="text-center">
          <h1 className="font-bold text-gray-300 text-7xl">404</h1>
          <p className="mt-4 text-gray-500" style={{ lineHeight: '1.6', letterSpacing: '0.2px' }}>រកមិនឃើញព័ត៌មាននេះទេ</p>
          <Link to="/news" className="inline-block mt-6 text-blue-500 hover:underline" style={{ lineHeight: '1.6', letterSpacing: '0.2px' }}>
            ← ត្រឡប់ទៅកាន់ព័ត៌មាន
          </Link>
        </div>
      </div>
    );
  }

  const googleSheetUrl = "https://script.google.com/macros/s/AKfycbxl0O-Wl37JSNTSn4-okXGeOQMuYODTBVUpY-LHIaGhF6R0DUA7x0KdKFnJ4jDWl49EzQ/exec";

  return (
    <div className="relative min-h-screen pb-32 bg-gradient-to-b from-gray-50 to-white font-khmer dark:from-gray-950 dark:to-gray-900" style={{ fontFamily: "'Kantumruy Pro', 'Khmer OS', sans-serif" }}>
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />

      <LikeShareBar
        liked={interactions.liked}
        likes={interactions.likes}
        shares={interactions.shares}
        onLike={handleLike}
        onShare={handleShare}
      />

      <div className="px-4 py-8 mx-auto max-w-7xl md:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <BackButton onClick={() => navigate(-1)} />
        </div>

        {/* Two-column layout */}
      {/* Two-column layout */}
<div className="flex flex-col gap-8 lg:flex-row">

  {/* ← បន្ថែម min-w-0 ត្រង់នេះ គឺសំខាន់បំផុត */}
  <div className="flex-1 min-w-0">

    {/* Header */}
    <div className="space-y-5">
      <CategoryBadge category={article.category} />
      <h1 className="text-3xl font-extrabold leading-relaxed text-gray-900 dark:text-white md:text-4xl lg:text-5xl" style={{ lineHeight: '1.8', letterSpacing: '0.2px' }}>
        {article.title}
      </h1>
      <div className="flex flex-wrap items-center gap-5">
        <MetaItem icon={AiOutlineCalendar} text={article.date} />
        <MetaItem icon={AiOutlineEye} text={`${(article.views || 0).toLocaleString()} ដង`} />
      </div>
    </div>

    {/* Author Card */}
    <div className="my-8">
      <AuthorCard author={article.author} />
    </div>

    {/* Cover Image */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => setLightboxImage(article.coverImage)}
      className="relative my-10 overflow-hidden shadow-2xl cursor-pointer group rounded-3xl"
    >
      <img
        src={article.coverImage}
        alt={article.title}
        className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/40 group-hover:opacity-100">
        <AiOutlineZoomIn className="text-5xl text-white drop-shadow-lg" />
      </div>
    </motion.div>

    {/* Article Content */}
    <div className="prose prose-lg text-gray-700 max-w-none dark:prose-invert dark:text-gray-300 prose-headings:font-bold prose-p:leading-loose" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
      {article.content.split("\n").map((paragraph, idx) => {
        if (paragraph.trim() === "") return null;
        if (paragraph.match(/^\[.*\]/) || (paragraph.includes("៖") && paragraph.length < 100)) {
          return (
            <h3 key={idx} className="mt-8 text-xl font-bold text-indigo-700 dark:text-indigo-400" style={{ lineHeight: '1.8', letterSpacing: '0.2px' }}>
              {paragraph}
            </h3>
          );
        }
        return (
          <p key={idx} className="mb-5 text-base" style={{ lineHeight: '1.95', letterSpacing: '0.2px' }}>
            {paragraph}
          </p>
        );
      })}
    </div>

    {/* Google Sheets Table */}
    {article.id === 7 && (
      <div className="my-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.7', letterSpacing: '0.2px' }}>
          📋 បញ្ជីឈ្មោះសិស្សថ្នាក់ទី១០ (ប្រចាំឆ្នាំសិក្សា ២០២៥-២០២៦)
        </h2>
        <DynamicTable sheetUrl={googleSheetUrl} />
        <p className="mt-4 text-sm italic text-gray-500" style={{ fontFamily: "'Kantumruy Pro', sans-serif", lineHeight: '1.6', letterSpacing: '0.2px' }}>
          * ទិន្នន័យយកចេញពី Google Sheet របស់សាលា (ធ្វើបច្ចុប្បន្នភាពដោយស្វ័យប្រវត្តិ)
        </p>
      </div>
    )}

    {/* Gallery */}
    <GalleryGrid images={article.gallery} onImageClick={setLightboxImage} />

    {/* Related News */}
    <RelatedNews articles={relatedNews} />
  </div>

  {/* Sidebar (Right) */}
  <div className="space-y-6 lg:w-80 lg:flex-shrink-0">
    <RecentNewsWidget news={recentNews.length ? recentNews : allNewsWithDefaults.slice(0, 5)} />
    <TrendingWidget news={allNewsWithDefaults} />
    <StatsWidget news={allNewsWithDefaults} />
  </div>

</div>
      </div>
    </div>
  );
};

export default NewsDetail;


