import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const SectionHeader = ({ label, color, to }) => (
  <div className="mb-10">
    <Link
      to={to}
      className="inline-flex items-center gap-3 px-8 py-4 text-2xl font-bold text-white transition-all font-khmer rounded-r-3xl hover:brightness-110"
      style={{
        background: color,
        clipPath:
          'polygon(0 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 0 100%)'
      }}
    >
      {label}
      <span className="text-3xl opacity-80">›</span>
    </Link>
  </div>
);

/* Large News Card */
const LargeNewsCard = ({ img, title, date, desc }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    whileHover={{ y: -8 }}
    className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-[460px] md:h-[520px] dark:shadow-xl"
  >
    <img
      src={img}
      alt={title}
      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
      <div className="flex items-center gap-2 mb-3 text-sm opacity-90">
        <Calendar size={16} />
        {date}
      </div>

      <h2 className="mb-3 text-2xl font-bold leading-tight">
        {title}
      </h2>

      <p className="line-clamp-3 text-white/80">
        {desc}
      </p>
    </div>
  </motion.div>
);

/* Small News Card */
const SmallNewsCard = ({ img, title, date }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    whileHover={{ y: -5 }}
    className="flex gap-4 overflow-hidden transition-all bg-white shadow-md cursor-pointer dark:bg-gray-800 rounded-2xl hover:shadow-xl group"
  >
    <div className="flex-shrink-0 w-32 h-24">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-full transition-transform group-hover:scale-105"
      />
    </div>

    <div className="flex-1 p-4">
      <p className="flex items-center gap-1 mb-1 text-xs text-gray-500 dark:text-gray-400">
        <Clock size={14} />
        {date}
      </p>

      <h4 className="font-semibold leading-snug text-gray-800 line-clamp-3 dark:text-gray-200">
        {title}
      </h4>
    </div>
  </motion.div>
);

/* Hero Card */
const HeroCard = ({ img, title, desc }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -10 }}
    className="relative rounded-3xl overflow-hidden shadow-2xl group h-[380px]"
  >
    <img
      src={img}
      alt={title}
      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

    <div className="absolute bottom-0 text-white p-7">
      <h3 className="mb-2 text-xl font-bold">
        {title}
      </h3>

      <p className="text-sm text-white/80 line-clamp-2">
        {desc}
      </p>
    </div>
  </motion.div>
);

/* Small Activity Card */
const SmallActivityCard = ({ img, title }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -6 }}
    className="overflow-hidden transition-all bg-white shadow cursor-pointer dark:bg-gray-800 rounded-2xl hover:shadow-xl group"
  >
    <div className="overflow-hidden h-44">
      <img
        src={img}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-4">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
        {title}
      </h4>
    </div>
  </motion.div>
);

/* Video Card */
const VideoCard = ({ video, onLike, onShare }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    className="flex flex-col h-full overflow-hidden transition-all bg-white shadow-lg dark:bg-gray-800 rounded-3xl hover:shadow-2xl"
  >
    <div className="relative w-full pt-[56.25%]">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>

    <div className="flex flex-col flex-1 p-5">
      <h4 className="mb-2 text-base font-bold leading-snug text-gray-900 line-clamp-2 dark:text-white">
        {video.title}
      </h4>

      <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
        {video.views} ចូលមើល • {video.duration}
      </p>

      <div className="flex items-center gap-6 mt-auto text-sm text-gray-500 dark:text-gray-400">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onLike(video.id)}
          className={`flex items-center gap-1.5 transition ${
            video.liked
              ? 'text-rose-500'
              : 'hover:text-rose-500'
          }`}
        >
          <span className="text-xl">
            {video.liked ? '❤️' : '🤍'}
          </span>

          <span>{video.likes}</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onShare(video)}
          className="flex items-center gap-1.5 hover:text-blue-600 transition"
        >
          🔗 Share
        </motion.button>
      </div>
    </div>
  </motion.div>
);

/* ===================== MAIN HOMEPAGE ===================== */

const HomePage = () => {
  /* ================= NEWS ================= */

  const latestNews = [
    {
      img: 'https://picsum.photos/1000/700?1',
      title: 'សាលាបានរៀបចំព្រឹត្តិការណ៍អប់រំថ្មី',
      date: '08 May 2026',
      desc: 'សិស្សានុសិស្សជាច្រើនបានចូលរួមក្នុងកម្មវិធីអប់រំថ្មីនេះ។'
    }
  ];

  const moreNews = [
    {
      img: 'https://picsum.photos/300/200?2',
      title: 'ការប្រឡងប្រចាំឆមាស',
      date: '08 May 2026'
    },
    {
      img: 'https://picsum.photos/300/200?3',
      title: 'សិក្ខាសាលាបច្ចេកវិទ្យា',
      date: '07 May 2026'
    },
    {
      img: 'https://picsum.photos/300/200?4',
      title: 'សកម្មភាពសិស្សឆ្នើម',
      date: '06 May 2026'
    }
  ];

  /* ================= GENERAL ================= */

  const generalHeroes = [
    {
      img: 'https://picsum.photos/800/500?5',
      title: 'ចំណេះដឹងទូទៅ',
      desc: 'ការអប់រំជួយអភិវឌ្ឍសមត្ថភាព និងចំណេះដឹង។'
    },
    {
      img: 'https://picsum.photos/800/500?6',
      title: 'ការសិក្សាថ្មីៗ',
      desc: 'បច្ចេកទេសសិក្សាដែលមានប្រសិទ្ធភាពខ្ពស់។'
    }
  ];

  const generalActivities = [
    'https://picsum.photos/300/300?7',
    'https://picsum.photos/300/300?8',
    'https://picsum.photos/300/300?9',
    'https://picsum.photos/300/300?10',
    'https://picsum.photos/300/300?11'
  ];

  /* ================= TECH ================= */

  const techHeroes = [
    {
      img: 'https://picsum.photos/800/500?12',
      title: 'React & Web Development',
      desc: 'សិក្សាពីការអភិវឌ្ឍន៍គេហទំព័រទំនើប។'
    },
    {
      img: 'https://picsum.photos/800/500?13',
      title: 'AI Technology',
      desc: 'បច្ចេកវិទ្យា AI កំពុងផ្លាស់ប្តូរពិភពលោក។'
    }
  ];

  const techActivities = [
    'https://picsum.photos/300/300?14',
    'https://picsum.photos/300/300?15',
    'https://picsum.photos/300/300?16',
    'https://picsum.photos/300/300?17',
    'https://picsum.photos/300/300?18'
  ];

  /* ================= VIDEOS ================= */

  const [videos, setVideos] = useState([
    {
      id: 1,
      youtubeId: 'dQw4w9WgXcQ',
      title: 'Student Project Presentation',
      views: '12K',
      duration: '10:25',
      likes: 120,
      liked: false
    },
    {
      id: 2,
      youtubeId: '3JZ_D3ELwOQ',
      title: 'Programming Tutorial',
      views: '8K',
      duration: '15:40',
      likes: 95,
      liked: false
    },
    {
      id: 3,
      youtubeId: 'L_jWHffIx5E',
      title: 'Technology Innovation',
      views: '5K',
      duration: '08:12',
      likes: 70,
      liked: false
    }
  ]);

  const handleLike = (id) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === id
          ? {
              ...video,
              liked: !video.liked,
              likes: video.liked
                ? video.likes - 1
                : video.likes + 1
            }
          : video
      )
    );
  };

  const handleShare = async (video) => {
    if (navigator.share) {
      await navigator.share({
        title: video.title,
        url: `https://youtube.com/watch?v=${video.youtubeId}`
      });
    } else {
      navigator.clipboard.writeText(
        `https://youtube.com/watch?v=${video.youtubeId}`
      );

      alert('បានចម្លង Link!');
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 font-khmer bg-gray-50 dark:bg-gray-950">

      {/* NEWS */}
      <section className="px-5 pt-8 pb-16 mx-auto max-w-7xl lg:px-8">
        <SectionHeader
          label="ព័ត៌មានថ្មីៗ"
          color="#1e40af"
          to="/news"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {latestNews.length > 0 && (
              <LargeNewsCard {...latestNews[0]} />
            )}
          </div>

          <div className="space-y-6 lg:col-span-5">
            {moreNews.map((news, i) => (
              <SmallNewsCard key={i} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* GENERAL */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <SectionHeader
            label="ចំណេះទូទៅ"
            color="#6366f1"
            to="/general"
          />

          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
            {generalHeroes.map((item, i) => (
              <HeroCard key={i} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {generalActivities.map((img, i) => (
              <SmallActivityCard
                key={i}
                img={img}
                title="សកម្មភាពសិក្សា"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <SectionHeader
            label="បច្ចេកទេស"
            color="#0d9488"
            to="/technical"
          />

          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
            {techHeroes.map((item, i) => (
              <HeroCard key={i} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {techActivities.map((img, i) => (
              <SmallActivityCard
                key={i}
                img={img}
                title="គម្រោងបច្ចេកទេស"
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <SectionHeader
            label="វីដេអូស្នាដៃសិស្ស"
            color="#e11d48"
            to="/videos"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onLike={handleLike}
                onShare={handleShare}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;