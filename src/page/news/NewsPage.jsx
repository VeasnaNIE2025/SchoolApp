import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineSearch,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineComment,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineFire,
  AiOutlineClockCircle,
  AiOutlineTags,
  AiOutlineLineChart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

// ==================== ANIMATIONS ====================
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ==================== MOCK DATA ====================
const allNews = [
  {
    id: 1,
    title: "រដ្ឋបាលខេត្តបើកដំណើរការកម្មវិធីបណ្តុះបណ្តាលយុវវ័យ",
    excerpt: "រដ្ឋបាលខេត្តបានប្រកាសបើកដំណើរការកម្មវិធីបណ្តុះបណ្តាលថ្មីសម្រាប់យុវវ័យ ដើម្បីពង្រឹងជំនាញវិជ្ជាជីវៈ និងបច្ចេកវិទ្យា...",
    category: "ការអប់រំ",
    date: "២៦ មីនា ២០២៦",
    author: "សុខ វិចិត្រ",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    views: 1240,
    likes: 87,
    comments: 23,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "វិទ្យាល័យបានទទួលពានរង្វាន់ល្អបំផុតថ្នាក់ជាតិ",
    excerpt: "វិទ្យាល័យរបស់យើងបានទទួលពានរង្វាន់សាលារៀនល្អបំផុតនៅថ្នាក់ជាតិ ដោយសារការខិតខំប្រឹងប្រែងរបស់គ្រូ និងសិស្ស...",
    category: "សមិទ្ធផល",
    date: "២៤ មីនា ២០២៦",
    author: "ចាន់ ម៉ករា",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    views: 2150,
    likes: 214,
    comments: 41,
    isNew: true,
    isFeatured: false,
  },
  {
    id: 3,
    title: "ការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិឆ្នាំ២០២៦",
    excerpt: "ក្រសួងអប់រំបានប្រកាសកាលវិភាគការប្រឡងជាផ្លូវការ ហើយសិស្សទាំងអស់ត្រូវត្រៀមខ្លួនឱ្យបានត្រឹមត្រូវ...",
    category: "ការប្រឡង",
    date: "២០ មីនា ២០២៦",
    author: "លី សុខា",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    views: 3800,
    likes: 312,
    comments: 67,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 4,
    title: "សិស្សានុសិស្សចូលរួមប្រកួតបច្ចេកវិទ្យាអន្តរជាតិ",
    excerpt: "ក្រុមសិស្សពីវិទ្យាល័យរបស់យើងបានចូលរួមប្រកួតបច្ចេកវិទ្យាអន្តរជាតិ និងសម្រេចបានជោគជ័យយ៉ាងត្រចះត្រចង់...",
    category: "ICT",
    date: "១៥ មីនា ២០២៦",
    author: "ហេង ចន្ទ",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    views: 1670,
    likes: 143,
    comments: 29,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 5,
    title: "សកម្មភាពអភិរក្សបរិស្ថានក្នុងសាលា",
    excerpt: "សិស្សានុសិស្សបានរៀបចំកម្មវិធីដាំដើមឈើ និងសម្អាតបរិស្ថានជុំវិញវិទ្យាល័យ ដើម្បីចូលរួមអភិរក្សធម្មជាតិ...",
    category: "បរិស្ថាន",
    date: "១០ មីនា ២០២៦",
    author: "ពៅ ច័ន្ទតារា",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    views: 890,
    likes: 76,
    comments: 14,
    isNew: false,
    isFeatured: false,
  },
  {
    id: 6,
    title: "ជំរំកីឡាប្រចាំឆ្នាំ២០២៦ ប្រព្រឹត្តទៅដោយជោគជ័យ",
    excerpt: "ជំរំកីឡាប្រចាំឆ្នាំរបស់វិទ្យាល័យបានបញ្ចប់ដោយជោគជ័យ ដោយមានការចូលរួមពីសិស្សជាង ៥០០នាក់...",
    category: "កីឡា",
    date: "០៥ មីនា ២០២៦",
    author: "ឃុន ពិសិដ្ឋ",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    views: 1120,
    likes: 98,
    comments: 18,
    isNew: false,
    isFeatured: false,
  },
];

const categories = [
  { id: "all", name: "ទាំងអស់", color: "#6366f1" },
  { id: "ការអប់រំ", name: "ការអប់រំ", color: "#3b82f6" },
  { id: "សមិទ្ធផល", name: "សមិទ្ធផល", color: "#10b981" },
  { id: "ការប្រឡង", name: "ការប្រឡង", color: "#f59e0b" },
  { id: "ICT", name: "ICT", color: "#8b5cf6" },
  { id: "បរិស្ថាន", name: "បរិស្ថាន", color: "#14b8a6" },
  { id: "កីឡា", name: "កីឡា", color: "#ef4444" },
];

const ITEMS_PER_PAGE = 6;

// ==================== FEATURED CARD ====================
const FeaturedCard = ({ article, interactions, onLike, onShare }) => {
  const inter = interactions[article.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer mb-12 h-[500px]"
    >
      <img
        src={article.image}
        alt={article.title}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      {article.isNew && (
        <span className="absolute flex items-center gap-2 px-4 py-2 text-xs font-bold text-white rounded-full shadow-lg top-5 left-5 bg-gradient-to-r from-red-500 to-rose-500">
          <AiOutlineFire className="text-sm" /> ព័ត៌មានក្តៅ
        </span>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
        <Link 
          to={`/news/${article.id}`}
          className="inline-block bg-white/20 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full mb-4 hover:bg-white/30 transition"
        >
          {article.category}
        </Link>
        
        <h2 className="mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl line-clamp-2">
          {article.title}
        </h2>
        
        <p className="max-w-2xl mb-6 text-sm text-white/80 md:text-base line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <AiOutlineUser className="text-base" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCalendar className="text-base" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineEye className="text-base" />
              {article.views.toLocaleString()}
            </span>
          </div>
          
          <div className="flex gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => onLike(article.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                inter.liked
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
              }`}
            >
              <AiOutlineLike className="text-base" />
              {inter.likes}
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => onShare(article.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all"
            >
              <AiOutlineShareAlt className="text-base" />
              {inter.shares}
            </motion.button>
            
            <Link
              to={`/news/${article.id}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all"
            >
              <AiOutlineComment className="text-base" />
              {inter.comments}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== ARTICLE CARD ====================
const ArticleCard = ({ article, interactions, onLike, onShare }) => {
  const inter = interactions[article.id];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-md cursor-pointer dark:bg-gray-800 rounded-2xl hover:shadow-2xl group dark:border-gray-700"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={article.image}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute flex gap-2 top-3 left-3">
          {article.isNew && (
            <span className="bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
              <AiOutlineFire className="text-xs" /> ថ្មី
            </span>
          )}
          <span 
            className="text-white text-xs px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm"
            style={{ backgroundColor: categories.find(c => c.name === article.category)?.color + 'CC' || '#6366f1CC' }}
          >
            {article.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5">
        <Link to={`/news/${article.id}`}>
          <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 transition-colors dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {article.title}
          </h3>
        </Link>
        
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gray-400 dark:text-gray-500">
          <span className="flex items-center gap-1">
            <AiOutlineUser className="text-sm" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineCalendar className="text-sm" />
            {article.date}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <AiOutlineEye className="text-sm" />
            {article.views.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onLike(article.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all flex-1 justify-center ${
              inter.liked
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900/30"
            }`}
          >
            <AiOutlineLike /> {inter.likes}
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onShare(article.id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-green-900/30 transition-all flex-1 justify-center"
          >
            <AiOutlineShareAlt /> {inter.shares}
          </motion.button>
          
          <Link
            to={`/news/${article.id}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-purple-900/30 transition-all flex-1 justify-center"
          >
            <AiOutlineComment /> {inter.comments}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== SIDEBAR COMPONENTS ====================
const RecentNewsWidget = ({ news }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="sticky p-5 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700 top-24"
  >
    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900 dark:text-white">
      <AiOutlineFire className="text-xl text-red-500" /> 
      ព័ត៌មានថ្មីៗ
    </h3>
    <div className="space-y-4">
      {news.slice(0, 5).map((n, i) => (
        <Link key={n.id} to={`/news/${n.id}`}>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex gap-3 cursor-pointer group"
          >
            <div className="relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-xl">
              <img
                src={n.image}
                alt={n.title}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition bg-black/20 group-hover:bg-black/40" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 transition-colors dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
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

const TrendingWidget = ({ news }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
    className="p-5 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700"
  >
    <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900 dark:text-white">
      <AiOutlineLineChart className="text-xl text-green-500" /> 
      កំពុងពេញនិយម
    </h3>
    <div className="space-y-3">
      {news.sort((a,b) => b.views - a.views).slice(0, 5).map((n, i) => (
        <Link key={n.id} to={`/news/${n.id}`}>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 py-2 border-b cursor-pointer group border-gray-50 dark:border-gray-700 last:border-0"
          >
            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-xs font-bold text-white rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-sm text-gray-700 transition-colors dark:text-gray-300 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {n.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                <span className="flex items-center gap-0.5"><AiOutlineEye className="text-xs" /> {n.views.toLocaleString()}</span>
                <span className="flex items-center gap-0.5"><AiOutlineLike /> {n.likes}</span>
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.div>
);

const StatsWidget = ({ news }) => {
  const totalLikes = news.reduce((a, n) => a + n.likes, 0);
  const totalComments = news.reduce((a, n) => a + n.comments, 0);
  const totalViews = news.reduce((a, n) => a + n.views, 0);

  const stats = [
    { label: "អត្ថបទសរុប", value: news.length, icon: <AiOutlineComment />, color: "#6366f1" },
    { label: "អ្នកមើលសរុប", value: totalViews.toLocaleString(), icon: <AiOutlineEye />, color: "#10b981" },
    { label: "Like សរុប", value: totalLikes.toLocaleString(), icon: <AiOutlineLike />, color: "#ef4444" },
    { label: "ការចែករំលែក", value: "248", icon: <AiOutlineShareAlt />, color: "#f59e0b" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="p-5 text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl"
    >
      <h3 className="flex items-center gap-2 mb-4 text-lg font-bold">
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
            <div className="text-xs text-white/80">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ==================== MAIN PAGE ====================
const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [interactions, setInteractions] = useState(() => {
    const map = {};
    allNews.forEach((n) => {
      map[n.id] = { liked: false, likes: n.likes, comments: n.comments, shares: 0 };
    });
    return map;
  });

  const handleLike = (id) => {
    setInteractions((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        liked: !prev[id].liked,
        likes: prev[id].liked ? prev[id].likes - 1 : prev[id].likes + 1,
      },
    }));
  };

  const handleShare = async (id) => {
    setInteractions((prev) => ({
      ...prev,
      [id]: { ...prev[id], shares: prev[id].shares + 1 },
    }));
    
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Optional: Show toast notification
    } catch (err) {
      console.log("Failed to copy");
    }
  };

  // Filter logic
  const filteredNews = useMemo(() => {
    return allNews.filter((n) => {
      const matchCat = activeCategory === "all" || n.category === activeCategory;
      const matchSearch =
        search === "" ||
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const featuredNews = allNews.find((n) => n.isFeatured);
  const recentNews = allNews.filter((n) => n.isNew);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen pt-20 transition-colors duration-300 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 font-khmer">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h1 className="mb-3 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            ព័ត៌មាន
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            ព័ត៌មានថ្មីៗ និងសកម្មភាពរបស់វិទ្យាល័យ
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <AiOutlineSearch className="absolute text-xl text-gray-400 -translate-y-1/2 left-5 top-1/2" />
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="ស្វែងរកព័ត៌មាន..."
              className="w-full py-4 pr-5 text-gray-900 placeholder-gray-400 transition bg-white border border-gray-200 shadow-sm pl-14 rounded-2xl dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredNews && activeCategory === "all" && search === "" && currentPage === 1 && (
          <FeaturedCard
            article={featuredNews}
            interactions={interactions}
            onLike={handleLike}
            onShare={handleShare}
          />
        )}

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="flex-1">
            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky z-10 flex flex-wrap gap-2 py-3 mb-8 top-20 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm"
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "text-white shadow-lg"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
                  }`}
                  style={{
                    background: activeCategory === cat.id ? cat.color : undefined,
                  }}
                >
                  {cat.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Articles Grid */}
            <AnimatePresence mode="wait">
              {paginatedNews.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-20 text-center"
                >
                  <div className="mb-4 text-6xl">🔍</div>
                  <p className="text-lg text-gray-400 dark:text-gray-500">រកមិនឃើញព័ត៌មាន</p>
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2"
                >
                  {paginatedNews.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      interactions={interactions}
                      onLike={handleLike}
                      onShare={handleShare}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <AiOutlineLeft />
                </motion.button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                      currentPage === page
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 transition bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <AiOutlineRight />
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:w-80">
            <RecentNewsWidget news={recentNews} />
            <TrendingWidget news={allNews} />
            <StatsWidget news={allNews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;