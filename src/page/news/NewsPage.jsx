import { useState } from "react";
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
} from "react-icons/ai";

// ==================== MOCK DATA ====================
const allNews = [
  {
    id: 1,
    title: "រដ្ឋបាលខេត្តបើកដំណើរការកម្មវិធីបណ្តុះបណ្តាលយុវវ័យ",
    excerpt: "រដ្ឋបាលខេត្តបានប្រកាសបើកដំណើរការកម្មវិធីបណ្តុះបណ្តាលថ្មីសម្រាប់យុវវ័យ ដើម្បីពង្រឹងជំនាញវិជ្ជាជីវៈ និងបច្ចេកវិទ្យា...",
    category: "ការអប់រំ",
    date: "២៦ មីនា ២០២៦",
    author: "សុខ វិចិត្រ",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    views: 1240,
    likes: 87,
    comments: 23,
    isNew: true,
  },
  {
    id: 2,
    title: "វិទ្យាល័យបានទទួលពានរង្វាន់ល្អបំផុតថ្នាក់ជាតិ",
    excerpt: "វិទ្យាល័យរបស់យើងបានទទួលពានរង្វាន់សាលារៀនល្អបំផុតនៅថ្នាក់ជាតិ ដោយសារការខិតខំប្រឹងប្រែងរបស់គ្រូ និងសិស្ស...",
    category: "សមិទ្ធផល",
    date: "២៤ មីនា ២០២៦",
    author: "ចាន់ ម៉ករា",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80",
    views: 2150,
    likes: 214,
    comments: 41,
    isNew: true,
  },
  {
    id: 3,
    title: "ការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិឆ្នាំ២០២៦",
    excerpt: "ក្រសួងអប់រំបានប្រកាសកាលវិភាគការប្រឡងជាផ្លូវការ ហើយសិស្សទាំងអស់ត្រូវត្រៀមខ្លួនឱ្យបានត្រឹមត្រូវ...",
    category: "ការប្រឡង",
    date: "២០ មីនា ២០២៦",
    author: "លី សុខា",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    views: 3800,
    likes: 312,
    comments: 67,
    isNew: false,
  },
  {
    id: 4,
    title: "សិស្សានុសិស្សចូលរួមប្រកួតបច្ចេកវិទ្យាអន្តរជាតិ",
    excerpt: "ក្រុមសិស្សពីវិទ្យាល័យរបស់យើងបានចូលរួមប្រកួតបច្ចេកវិទ្យាអន្តរជាតិ និងសម្រេចបានជោគជ័យយ៉ាងត្រចះត្រចង់...",
    category: "ICT",
    date: "១៥ មីនា ២០២៦",
    author: "ហេង ចន្ទ",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    views: 1670,
    likes: 143,
    comments: 29,
    isNew: false,
  },
  {
    id: 5,
    title: "សកម្មភាពអភិរក្សបរិស្ថានក្នុងសាលា",
    excerpt: "សិស្សានុសិស្សបានរៀបចំកម្មវិធីដាំដើមឈើ និងសម្អាតបរិស្ថានជុំវិញវិទ្យាល័យ ដើម្បីចូលរួមអភិរក្សធម្មជាតិ...",
    category: "បរិស្ថាន",
    date: "១០ មីនា ២០២៦",
    author: "ពៅ ​ច័ន្ទតារា",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    views: 890,
    likes: 76,
    comments: 14,
    isNew: false,
  },
  {
    id: 6,
    title: "ជំរំកីឡាប្រចាំឆ្នាំ២០២៦ ប្រព្រឹត្តទៅដោយជោគជ័យ",
    excerpt: "ជំរំកីឡាប្រចាំឆ្នាំរបស់វិទ្យាល័យបានបញ្ចប់ដោយជោគជ័យ ដោយមានការចូលរួមពីសិស្សជាង ៥០០នាក់...",
    category: "កីឡា",
    date: "០៥ មីនា ២០២៦",
    author: "ឃុន ពិសិដ្ឋ",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    views: 1120,
    likes: 98,
    comments: 18,
    isNew: false,
  },
];

const categories = ["ទាំងអស់", "ការអប់រំ", "សមិទ្ធផល", "ការប្រឡង", "ICT", "បរិស្ថាន", "កីឡា"];

const ITEMS_PER_PAGE = 4;

// ==================== LIKE/SHARE/COMMENT STATE ====================
const initInteractions = () => {
  const map = {};
  allNews.forEach((n) => {
    map[n.id] = { liked: false, likes: n.likes, comments: n.comments, shares: 0 };
  });
  return map;
};

// ==================== ARTICLE CARD ====================
const ArticleCard = ({ article, interactions, onLike, onShare, featured }) => {
  const inter = interactions[article.id];

  if (featured) {
    return (
      <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer mb-8 h-[420px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {article.isNew && (
          <span className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 font-khmer">
            <AiOutlineFire /> ថ្មី
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="inline-block bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full mb-3 font-khmer">
            {article.category}
          </span>
          <h2 className="text-2xl font-bold text-white mb-3 leading-snug font-khmer line-clamp-2">
            {article.title}
          </h2>
          <p className="text-white/70 text-sm mb-5 line-clamp-2 font-khmer">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><AiOutlineUser />{article.author}</span>
              <span className="flex items-center gap-1.5"><AiOutlineCalendar />{article.date}</span>
              <span className="flex items-center gap-1.5"><AiOutlineEye />{article.views}</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onLike(article.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  inter.liked ? "bg-blue-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <AiOutlineLike /> {inter.likes}
              </button>
              <button
                onClick={() => onShare(article.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-all"
              >
                <AiOutlineShareAlt /> {inter.shares}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group cursor-pointer">
      <div className="relative overflow-hidden h-48">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {article.isNew && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 font-khmer">
              <AiOutlineFire className="text-xs" /> ថ្មី
            </span>
          )}
          <span className="bg-black/50 backdrop-blur text-white text-xs px-2.5 py-1 rounded-full font-khmer">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug mb-2 line-clamp-2 font-khmer group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 font-khmer flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500 mb-4 font-khmer">
          <span className="flex items-center gap-1"><AiOutlineUser />{article.author}</span>
          <span className="flex items-center gap-1"><AiOutlineClockCircle />{article.date}</span>
          <span className="flex items-center gap-1 ml-auto"><AiOutlineEye />{article.views}</span>
        </div>

        <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => onLike(article.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all flex-1 justify-center ${
              inter.liked
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900/30"
            }`}
          >
            <AiOutlineLike /> {inter.likes}
          </button>
          <button
            onClick={() => onShare(article.id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-green-900/30 transition-all flex-1 justify-center"
          >
            <AiOutlineShareAlt /> {inter.shares}
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-purple-900/30 transition-all flex-1 justify-center">
            <AiOutlineComment /> {inter.comments}
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN PAGE ====================
const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ទាំងអស់");
  const [currentPage, setCurrentPage] = useState(1);
  const [interactions, setInteractions] = useState(initInteractions);

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

  const handleShare = (id) => {
    setInteractions((prev) => ({
      ...prev,
      [id]: { ...prev[id], shares: prev[id].shares + 1 },
    }));
    navigator.clipboard?.writeText(window.location.href);
  };

  // Filter
  const filtered = allNews.filter((n) => {
    const matchCat = activeCategory === "ទាំងអស់" || n.category === activeCategory;
    const matchSearch =
      search === "" ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const featured = allNews.find((n) => n.isNew && n.id === 2);
  const recentNews = allNews.filter((n) => n.isNew);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 transition-colors duration-300 font-khmer">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* ==================== HEADER ==================== */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">ព័ត៌មាន</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">ព័ត៌មានថ្មីៗ និងសកម្មភាពរបស់វិទ្យាល័យ</p>
        </div>

        {/* ==================== FEATURED ==================== */}
        {featured && activeCategory === "ទាំងអស់" && search === "" && currentPage === 1 && (
          <ArticleCard
            article={featured}
            interactions={interactions}
            onLike={handleLike}
            onShare={handleShare}
            featured
          />
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ==================== LEFT: MAIN CONTENT ==================== */}
          <div className="flex-1">
            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <AiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="ស្វែងរកព័ត៌មាន..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-khmer"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all font-khmer ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:border-blue-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Article Grid */}
            {paginated.length === 0 ? (
              <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                <AiOutlineSearch className="text-5xl mx-auto mb-4" />
                <p className="text-lg font-khmer">រកមិនឃើញព័ត៌មាន</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {paginated.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    interactions={interactions}
                    onLike={handleLike}
                    onShare={handleShare}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  <AiOutlineLeft />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                      currentPage === page
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                  <AiOutlineRight />
                </button>
              </div>
            )}
          </div>

          {/* ==================== RIGHT: SIDEBAR ==================== */}
          <div className="lg:w-80 space-y-6">
            {/* ព័ត៌មានថ្មីៗ */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 font-khmer">
                <AiOutlineFire className="text-red-500 text-xl" /> ព័ត៌មានថ្មីៗ
              </h3>
              <div className="space-y-4">
                {recentNews.map((n) => (
                  <div key={n.id} className="flex gap-3 group cursor-pointer">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:opacity-80 transition"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 font-khmer group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {n.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1 font-khmer">
                        <AiOutlineCalendar /> {n.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ព័ត៌មានពីមុន */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 font-khmer">
                <AiOutlineClockCircle className="text-blue-500 text-xl" /> ព័ត៌មានពីមុន
              </h3>
              <div className="space-y-3">
                {allNews.filter((n) => !n.isNew).slice(0, 4).map((n) => (
                  <div
                    key={n.id}
                    className="flex items-start gap-2 group cursor-pointer py-2 border-b border-gray-50 dark:border-gray-700 last:border-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-khmer line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {n.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 font-khmer">{n.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-5 text-white">
              <h3 className="font-bold mb-4 font-khmer">ស្ថិតិព័ត៌មាន</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "អត្ថបទ", value: allNews.length, icon: <AiOutlineComment /> },
                  { label: "អ្នកមើល", value: "10.2K", icon: <AiOutlineEye /> },
                  { label: "Like", value: allNews.reduce((a, n) => a + n.likes, 0), icon: <AiOutlineLike /> },
                  { label: "Share", value: "248", icon: <AiOutlineShareAlt /> },
                ].map((s) => (
                  <div key={s.label} className="bg-white/15 rounded-xl p-3 text-center">
                    <div className="text-xl mb-1">{s.icon}</div>
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-xs text-white/70 font-khmer">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;