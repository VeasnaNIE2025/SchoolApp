import React, { useMemo, useState } from 'react'
import { FiSearch, FiDownload, FiBookOpen } from 'react-icons/fi'

// ទិន្នន័យសៀវភៅគំរូ — អ្នកអាចជំនួសដោយទិន្នន័យពិតពី Google Sheets / API
const CATEGORIES = ['ទាំងអស់', 'ប្រលោមលោក', 'វិទ្យាសាស្ត្រ', 'ប្រវត្តិសាស្ត្រ', 'កុមារ', 'បច្ចេកវិទ្យា']

const BOOKS = [
  {
    id: 1,
    title: '2020-02-06 Manual Scratch in Khmer',
    author: 'មិនឈ្មោះអ្នកនិពន្ធ',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Scratch/2020-02-06 Manual Scratch in Khmer.jpg',
    downloadUrl: '/PDF/Library/Scratch/2020-02-06 Manual Scratch in Khmer.pdf',
  },
  {
    id: 2,
    title: 'សរសេរកូដបញ្ជា Robot Mini BotCam ជាមួយកម្មវិធី mBlock',
    author: 'ក្រុមហ៊ុនអង្គរអ៊ី និងស៊ី (EANC)',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/MinibotCammBlock/mBlock book.jpg',
    downloadUrl: '/PDF/Library/MinibotCammBlock/mBlock book.pdf',
  },
  {
    id: 3,
    title: 'សរសេរកូដបញ្ជា Robot Mini BotCam ជាមួយកម្មវិធី Mind+',
    author: 'ក្រុមហ៊ុនអង្គរអ៊ី និងស៊ី (EANC)',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/MiniBotCamMindPlus/Mini BotCam with Mind Plus.jpg',
    downloadUrl: '/PDF/Library/MiniBotCamMindPlus/mBlock Mini BotCam with Mind Plus.pdf',
  },
  {
    id: 4,
    title: 'មេរៀន និងលំហាត់កម្មវិធី Adobe Photoshop',
    author: 'លោកគ្រូ នន់ សុវណ្ណរាជ',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Photoshop/photoshop.jpg',
    downloadUrl: '/PDF/Library/Photoshop/photoshop.pdf',
  },
  {
    id: 5,
    title: 'Programming Arduino IDE',
    author: 'លោកគ្រូ គាន ប៊ុនធា',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Arduino/arduino.jpg',
    downloadUrl: '/PDF/Library/Arduino/arduino.pdf',
  },
  {
    id: 6,
    title: 'មូលដ្ឋានគ្រឹះនៃ Arduino Programming',
    author: 'លោកគ្រូ ថុល ចាន់ថន',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Arduino/arduino1.jpg',
    downloadUrl: '/PDF/Library/Arduino/arduino1.pdf',
  },
  {
    id: 7,
    title: 'React js from 0 To Hero',
    author: 'គ្មានឈ្មោះអ្នកនិពន្ធ',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Library/Reactjs/Reactjs.jpg',
    downloadUrl: '/PDF/Library/Reactjs/Reactjs.pdf',
  },
]

const SPINE_COLORS = ['bg-[#8C3B2E]', 'bg-[#1F3A2E]', 'bg-[#C9A227]', 'bg-[#3E5C4F]', 'bg-[#7A5230]']

function Library() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('ទាំងអស់')

  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      const matchesCategory = activeCategory === 'ទាំងអស់' || book.category === activeCategory
      const matchesQuery =
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <div className="min-h-screen bg-[#F3ECDB] font-khmer">
      <style>{`
        .shelf-lines {
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 55px,
            rgba(43, 38, 32, 0.06) 55px,
            rgba(43, 38, 32, 0.06) 58px
          );
        }
      `}</style>

      {/* ក្បាលទំព័រ + Search */}
      <header className="relative overflow-hidden bg-[#1F3A2E] shelf-lines">
        <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
          <div className="flex items-center gap-2 text-[#C9A227] mb-3">
            <FiBookOpen size={22} />
            <span className="text-sm tracking-wide font-medium">បណ្ណាល័យសាលា</span>
          </div>
          <h1 className="font-khmer text-[#F3ECDB] text-3xl md:text-4xl font-bold mb-8">
            ស្វែងរកសៀវភៅដែលអ្នកចង់អាន
          </h1>

          <div className="relative max-w-xl">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8B7E]"
              size={20}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ស្វែងរកតាមចំណងជើង ឬអ្នកនិពន្ធ..."
              className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-[#F3ECDB] text-[#2B2620] placeholder:text-[#8A8272] outline-none ring-2 ring-transparent focus:ring-[#C9A227] transition-shadow"
            />
          </div>
        </div>
        {/* បន្ទាត់មាសខាងក្រោមតំណាងឲ្យគែមសៀវភៅ */}
        <div className="h-1.5 bg-gradient-to-r from-[#C9A227] via-[#E4C766] to-[#C9A227]" />
      </header>

      {/* ក្រុមសៀវភៅ */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#1F3A2E] text-[#F3ECDB] border-[#1F3A2E]'
                  : 'bg-transparent text-[#3E5C4F] border-[#3E5C4F]/30 hover:border-[#3E5C4F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* បញ្ជីសៀវភៅ */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-khmer font-bold text-xl text-[#3E5C4F] mb-1">រកមិនឃើញសៀវភៅទេ</p>
            <p className="text-[#8A8272] text-sm">សាកល្បងស្វែងរកដោយពាក្យផ្សេង ឬជ្រើសក្រុមផ្សេង</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book, i) => (
              <div
                key={book.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* ខ្នងសៀវភៅតំណាងពណ៌ */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${SPINE_COLORS[i % SPINE_COLORS.length]}`} />

                <div className="pl-1.5">
                  <div className="relative aspect-[4/5.6] overflow-hidden bg-[#E9E2D0]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 text-[10px] font-medium px-2 py-1 rounded-full bg-[#1F3A2E]/85 text-[#F3ECDB]">
                      {book.category}
                    </span>
                  </div>

                  <div className="p-3.5">
                    <h3 className="font-khmer text-[#2B2620] text-base font-bold leading-snug mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-[#8A8272] text-xs mb-3">{book.author}</p>

                    <a
                      href={book.downloadUrl}
                      download
                      className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium py-2 rounded-md bg-[#C9A227] text-[#2B2620] hover:bg-[#B8931F] transition-colors"
                    >
                      <FiDownload size={15} />
                      ទាញយក
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Library