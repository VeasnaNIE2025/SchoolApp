import React from 'react';
// Import រូបភាពផ្ទាល់ខ្លួនរបស់អ្នក
import myimg from "../../assets/images/AboutMe.jpg";

const AboutMePage = () => {
  const authorData = {
    name: "ម៉ាន់ វាសនា",
    title: "អ្នកនិពន្ធកម្មវិធី និងស្ថាបនិក",
    education: "បរិញ្ញាបត្ររងវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    experience: "បទពិសោធន៍ ១ ឆ្នាំក្នុងវិស័យអប់រំឌីជីថល",
    bio: [
      "សួស្តី! ខ្ញុំគឺជាអ្នកអភិវឌ្ឍន៍ប្រព័ន្ធនេះឡើងក្នុងគោលបំណងលើកកម្ពស់វិស័យអប់រំនៅកម្ពុជា។ ខ្ញុំជឿជាក់ថា បច្ចេកវិទ្យាគឺជាស្ពានចម្លងចំណេះដឹងទៅកាន់គ្រប់ទិសទី។",
      "រាល់ការរចនា និងការសរសេរកូដនៅក្នុងកម្មវិធីនេះ ត្រូវបានធ្វើឡើងដោយផ្អែកលើភាពងាយស្រួលរបស់អ្នកប្រើប្រាស់ជាចម្បង។"
    ]
  };

  return (
    // ប្រើ font-khmer ដូចដែលអ្នកបានកំណត់ក្នុង CSS
    <div className="bg-gray-50 min-h-screen py-16 px-6 font-khmer mt-10">
      <div className="max-w-5xl mx-auto">
        
        {/* ប្លុកព័ត៌មានមេ (Card) */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-blue-900/10">
          
          {/* តុបតែងផ្ទៃខាងក្រោយបន្តិច (Optional) */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-900/5 rounded-bl-full pointer-events-none"></div>

          {/* ----------------------------------------------------------- */}
          {/* ផ្នែករូបថតរង្វង់សង្ហា (ដាក់រូបភាពនៅទីនេះ) */}
          {/* ----------------------------------------------------------- */}
          <div className="relative group flex-shrink-0">
            {/* ស៊ុមខាងក្រៅ */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-blue-50 p-1 shadow-inner overflow-hidden shadow-blue-900/10 transition-transform duration-500 group-hover:scale-105 bg-white">
              {/* Tag <img> ដែលហៅរូបភាពរបស់អ្នក */}
              <img 
                src={myimg} // <-- នេះគឺជាកន្លែងដាក់រូបភាពដែល import
                alt={authorData.name} 
                className="w-full h-full object-cover rounded-full"
                // បន្ថែមរូបភាពជំនួស ប្រសិនបើរូបពិតរកមិនឃើញ (Optional)
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://api.dicebear.com/8.x/avataaars/svg?seed=Felix"; 
                }}
              />
            </div>
            {/* Badge តុបតែងខាងក្រោមរូប */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-bold py-2 px-6 rounded-full shadow-lg whitespace-nowrap tracking-wider uppercase">
              FOUNDER
            </div>
          </div>
          {/* ----------------------------------------------------------- */}

          {/* ផ្នែកអត្ថបទព័ត៌មាន (ខាងស្តាំ) */}
          <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              បរិបទនៃបច្ចេកវិទ្យាថ្មី
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              {authorData.name}
            </h1>
            <p className="text-2xl text-blue-600 font-medium mb-8">
              {authorData.title}
            </p>
            
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              {authorData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* ប៊ូតុងទំនាក់ទំនង */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-blue-900 text-white px-10 py-3 rounded-xl font-bold hover:bg-black transition-all duration-300 shadow-lg shadow-blue-900/20 active:scale-95">
                📧 ផ្ញើសារមកខ្ញុំ
              </button>
              {/* Emoji Icons ជំនួស Icons Library ដើម្បីកុំឱ្យ Error */}
              <div className="flex items-center gap-6 ml-4 text-3xl">
                <a href="#" className="hover:scale-125 transition">📘</a>
                <a href="#" className="hover:scale-125 transition">🔹</a>
              </div>
            </div>
          </div>
        </div>

        {/* ប្លុកព័ត៌មានបន្ថែមខាងក្រោម */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">ការអប់រំ</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{authorData.education}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">បទពិសោធន៍</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{authorData.experience}</p>
          </div>
        </div>

        {/* Footer
        <p className="text-center mt-12 text-gray-400 text-sm">
          រក្សាសិទ្ធិគ្រប់យ៉ាងដោយអ្នកនិពន្ធ © ២០២៦
        </p> */}

      </div>
    </div>
  );
};

export default AboutMePage;