import React from "react";
import myimg from "../../assets/images/AboutMe.jpg";

const AboutMePage = () => {
  const authorData = {
    name: "ម៉ាន់ វាសនា",
    title: "អ្នកនិពន្ធកម្មវិធី និងស្ថាបនិក",
    education: "បរិញ្ញាបត្ររងវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    experience: "បទពិសោធន៍ ១ ឆ្នាំក្នុងវិស័យអប់រំឌីជីថល",
    bio: [
      "សួស្តី! ខ្ញុំគឺជាអ្នកអភិវឌ្ឍន៍ប្រព័ន្ធនេះឡើងក្នុងគោលបំណងលើកកម្ពស់វិស័យអប់រំនៅកម្ពុជា។",
      "រាល់ការរចនា និងការសរសេរកូដ ត្រូវបានធ្វើឡើងដោយផ្អែកលើភាពងាយស្រួលរបស់អ្នកប្រើប្រាស់។"
    ]
  };

  return (
    <div className="min-h-screen px-6 py-16 mt-10 transition-colors duration-300 bg-gray-50 dark:bg-gray-900 font-khmer">
      <div className="max-w-5xl mx-auto">

        {/* MAIN CARD */}
        <div className="flex flex-col md:flex-row items-center gap-12 
          bg-white dark:bg-gray-800 
          p-10 rounded-[2.5rem] shadow-2xl 
          border border-gray-100 dark:border-gray-700 
          relative overflow-hidden transition-all duration-300 hover:shadow-blue-900/10">

          {/* DECOR */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none bg-blue-900/5 dark:bg-blue-500/10"></div>

          {/* IMAGE */}
          <div className="relative flex-shrink-0 group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] 
              border-blue-50 dark:border-gray-700 
              p-1 shadow-inner overflow-hidden 
              transition-transform duration-500 group-hover:scale-105 bg-white dark:bg-gray-900">

              <img
                src={myimg}
                alt={authorData.name}
                className="object-cover w-full h-full rounded-full"
                onError={(e) => {
                  e.target.src =
                    "https://api.dicebear.com/8.x/avataaars/svg?seed=Felix";
                }}
              />
            </div>

            <div className="absolute px-6 py-2 text-xs font-bold text-white uppercase -translate-x-1/2 bg-blue-900 rounded-full shadow-lg -bottom-4 left-1/2">
              FOUNDER
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1 mt-8 text-center md:text-left md:mt-0">
            <span className="inline-block 
              bg-blue-100 text-blue-800 
              dark:bg-blue-900/40 dark:text-blue-300
              text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              បរិបទនៃបច្ចេកវិទ្យាថ្មី
            </span>

            <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              {authorData.name}
            </h1>

            <p className="mb-8 text-2xl text-blue-600 dark:text-blue-400">
              {authorData.title}
            </p>

            <div className="space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {authorData.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex flex-wrap justify-center gap-4 mt-10 md:justify-start">
              <button className="px-10 py-3 font-bold text-white transition bg-blue-900 dark:bg-blue-600 rounded-xl hover:bg-black dark:hover:bg-blue-700 active:scale-95">
                📧 ផ្ញើសារ
              </button>

              <div className="flex items-center gap-6 ml-4 text-3xl">
                <a href="#" className="transition hover:scale-125">📘</a>
                <a href="#" className="transition hover:scale-125">🔹</a>
              </div>
            </div>
          </div>
        </div>

        {/* EXTRA INFO */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">

          <div className="p-8 transition-all bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-2xl dark:border-gray-700 hover:-translate-y-1">

            <div className="mb-3 text-4xl">🎓</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              ការអប់រំ
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {authorData.education}
            </p>
          </div>

          <div className="p-8 transition-all bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-2xl dark:border-gray-700 hover:-translate-y-1">

            <div className="mb-3 text-4xl">💼</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              បទពិសោធន៍
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {authorData.experience}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMePage;