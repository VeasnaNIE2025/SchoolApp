import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";
const HomePage = () => {
  return (
    <div className="space-y-20 py-16 bg-gray-50 font-khmer">
      
      {/* ផ្នែក ១: ចំណេះទូទៅ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8" >
        <div className="mb-8 flex items-center justify-between border-b-4 border-red-600 pb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="bg-red-600 text-white px-5 py-2 rounded-r-lg inline-block shadow-md">
              ចំណេះទូទៅ
            </span>
          </h2>
          <Link 
            to="/general" 
            className="text-red-600 font-bold text-lg hover:text-red-800 transition flex items-center gap-2 hidden md:flex"
          >
            មើលបន្ថែមទាំងអស់ →
          </Link>
        </div>

        {/* Featured - ទំហំស្មើគ្នា */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group col-span-1 md:col-span-2 lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80" 
              alt="ថ្នាក់រៀនចំណេះទូទៅ" 
              className="w-full h-80 md:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">មុខវិជ្ជាស្នូលឆ្នាំថ្មី</h3>
              <p className="text-base md:text-lg opacity-90">គណិតវិទ្យា • វិទ្យាសាស្ត្រ • ភាសាខ្មែរ • ប្រវត្តិវិទ្យា</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=800&q=80" 
              alt="សកម្មភាពសិស្ស" 
              className="w-full h-80 md:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">ប្រកួតសរសេរអត្ថបទឈ្នះថ្នាក់ជាតិ</h3>
              <p className="text-base md:text-lg opacity-90">សិស្សថ្នាក់ទី១១ ទទួលបានជ័យលាភ</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80" 
              alt="បណ្ណាល័យ" 
              className="w-full h-80 md:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">បណ្ណាល័យឌីជីថលថ្មី</h3>
              <p className="text-base md:text-lg opacity-90">អានសៀវភៅរាប់ពាន់ក្បាលតាមអនឡាញ</p>
            </div>
          </div>
        </div>

        {/* Small cards - ទំហំស្មើគ្នា */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80" 
                alt="សកម្មភាព" 
                className="w-full h-40 object-cover flex-shrink-0"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h4 className="font-semibold text-base line-clamp-2 mb-2">ប្រធានបទថ្មី វគ្គសិក្សា...</h4>
                <p className="text-sm text-gray-500">១ ម៉ោងមុន</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ផ្នែក ២: បច្ចេកទេស */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b-4 border-green-600 pb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="bg-green-600 text-white px-5 py-2 rounded-r-lg inline-block shadow-md">
              បច្ចេកទេស
            </span>
          </h2>
          <Link 
            to="/technical" 
            className="text-green-600 font-bold text-lg hover:text-green-800 transition flex items-center gap-2 hidden md:flex"
          >
            មើលបន្ថែមទាំងអស់ →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group col-span-1 md:col-span-2 lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80" 
              alt="អគ្គិសនី" 
              className="w-full h-80 md:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">ជំនាញអគ្គិសនី & សូឡា</h3>
              <p className="text-base md:text-lg opacity-90">សិស្សបង្កើតប្រព័ន្ធសូឡាសម្រាប់សាលា</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
              alt="កែច្នៃអាហារ" 
              className="w-full h-80 md:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">កែច្នៃអាហារ & កសិកម្ម</h3>
              <p className="text-base md:text-lg opacity-90">ផលិតផលកសិកម្មទំនើប</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1592982537447-6f2a6a6a0c10?auto=format&fit=crop&w=800&q=80" 
              alt="បសុវិទ្យា" 
              className="w-full h-80 md:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">បសុវប្បកម្មទំនើប</h3>
              <p className="text-base md:text-lg opacity-90">ការចិញ្ចឹមសត្វបែបវិទ្យាសាស្ត្រ</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-798aaaa19906?auto=format&fit=crop&w=400&q=80" 
                alt="project" 
                className="w-full h-40 object-cover flex-shrink-0"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h4 className="font-semibold text-base line-clamp-2 mb-2">គម្រោងសិស្សថ្មី...</h4>
                <p className="text-sm text-gray-500">ថ្ងៃនេះ</p>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* ផ្នែក ៣: កម្រងវីដេអូស្នាដៃសិស្ស */}
<section className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mb-8 flex items-center justify-between border-b-4 border-red-600 pb-4">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
      <span className="bg-red-600 text-white px-5 py-2 rounded-r-lg inline-block shadow-md">
        កម្រងវីដេអូស្នាដៃសិស្ស
      </span>
    </h2>
    <Link 
      to="/videos" 
      className="text-red-600 font-bold text-lg hover:text-red-800 transition flex items-center gap-2 hidden md:flex"
    >
      មើលវីដេអូទាំងអស់ →
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {Array.from({ length: 6 }).map((_, i) => (  // បង្ហាញ ៦ វីដេអូសិន (២ ជួរ × ៣) អាចបន្ថែមបាន
      <div 
        key={i} 
        className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer flex flex-col bg-gray-900"
      >
        {/* Thumbnail + Play Overlay */}
        <div className="relative flex-shrink-0 aspect-video">  {/* aspect-video = 16:9 សម្រាប់វីដេអូ */}
          <img 
            src={`https://images.unsplash.com/photo-1611162617210-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80&ixlib=rb-4.0.3${i % 3 === 0 ? '&crop=entropy' : ''}`} 
            alt={`ស្នាដៃសិស្ស ${i + 1}`} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-70 group-hover:opacity-90 transition">
            <span className="text-white text-7xl md:text-8xl drop-shadow-2xl transform group-hover:scale-110 transition duration-300">
              ▶
            </span>
          </div>
        </div>

        {/* Title & Info - ដាក់នៅខាងក្រោម មិន overlap លើរូបទាំងស្រុងទៀតទេ */}
        <div className="p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
          <h4 className="text-xl md:text-2xl font-bold line-clamp-2 mb-2">
            ស្នាដៃគម្រោងវិទ្យាសាស្ត្រ {2026 + i} - ថ្នាក់ទី {10 + i % 3}
          </h4>
          <p className="text-base opacity-90 flex items-center gap-3">
            <span>៤:៣០</span>
            <span>•</span>
            <span>១.{i + 1}K ចូលមើល</span>
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* បើចង់បន្ថែម "មើលបន្ថែម" ខាងក្រោម */}
  <div className="mt-10 text-center">
    <Link 
      to="/videos" 
      className="inline-block bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-red-700 transition shadow-lg"
    >
      មើលវីដេអូស្នាដៃសិស្សបន្ថែម →
    </Link>
  </div>
</section>
    </div>
  );
};

export default HomePage;