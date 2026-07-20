import React, { useMemo, useState } from 'react'
import { FiSearch, FiDownload, FiBookOpen, FiShare2 } from 'react-icons/fi'
import PdfPreview from './PdfPreview'

// ទិន្នន័យសៀវភៅគំរូ — អ្នកអាចជំនួសដោយទិន្នន័យពិតពី Google Sheets / API
const CATEGORIES = ['ទាំងអស់', 'ប្រលោមលោក', 'វិទ្យាសាស្ត្រ', 'ប្រវត្តិសាស្ត្រ', 'កុមារ', 'បច្ចេកវិទ្យា']

const BOOKS = [
  {
    id: 1,
    title: '2020-02-06 Manual Scratch in Khmer',
    author: 'មិនឈ្មោះអ្នកនិពន្ធ',
    category: 'កុមារ',
    cover: '/PDF/Library/Scratch/2020-02-06 Manual Scratch in Khmer.jpg',
    downloadUrl: '/PDF/Library/Scratch/2020-02-06 Manual Scratch in Khmer.pdf',
    size: '2.5MB',
    downloads: 14,
  },
  {
    id: 2,
    title: 'សរសេរកូដបញ្ជា Robot Mini BotCam ជាមួយកម្មវិធី mBlock',
    author: 'ក្រុមហ៊ុនអង្គរអ៊ី និងស៊ី (EANC)',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/MinibotCammBlock/mBlock book.jpg',
    downloadUrl: '/PDF/Library/MinibotCammBlock/mBlock book.pdf',
    size: '5.8MB',
    downloads: 32,
  },
  {
    id: 3,
    title: 'សរសេរកូដបញ្ជា Robot Mini BotCam ជាមួយកម្មវិធី Mind+',
    author: 'ក្រុមហ៊ុនអង្គរអ៊ី និងស៊ី (EANC)',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/MiniBotCamMindPlus/Mini BotCam with Mind Plus.jpg',
    downloadUrl: '/PDF/Library/MiniBotCamMindPlus/mBlock Mini BotCam with Mind Plus.pdf',
    size: '6.1MB',
    downloads: 25,
  },
  {
    id: 4,
    title: 'មេរៀន និងលំហាត់កម្មវិធី Adobe Photoshop',
    author: 'លោកគ្រូ នន់ សុវណ្ណរាជ',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Photoshop/photoshop.jpg',
    downloadUrl: '/PDF/Library/Photoshop/photoshop.pdf',
    size: '12.4MB',
    downloads: 48,
  },
  {
    id: 5,
    title: 'Programming Arduino IDE',
    author: 'លោកគ្រូ គាន ប៊ុនធា',
    category: 'វិទ្យាសាស្ត្រ',
    cover: '/PDF/Library/Arduino/arduino.jpg',
    downloadUrl: '/PDF/Library/Arduino/arduino.pdf',
    size: '4.2MB',
    downloads: 19,
  },
  {
    id: 6,
    title: 'មូលដ្ឋានគ្រឹះនៃ Arduino Programming',
    author: 'លោកគ្រូ ថុល ចាន់ថន',
    category: 'វិទ្យាសាស្ត្រ',
    cover: '/PDF/Library/Arduino/arduino1.jpg',
    downloadUrl: '/PDF/Library/Arduino/arduino1.pdf',
    size: '3.8MB',
    downloads: 11,
  },
  {
    id: 7,
    title: 'React js from 0 To Hero',
    author: 'គ្មានឈ្មោះអ្នកនិពន្ធ',
    category: 'បច្ចេកវិទ្យា',
    cover: '/PDF/Library/Reactjs/Reactjs.jpg',
    downloadUrl: '/PDF/Library/Reactjs/Reactjs.pdf',
    size: '8.4MB',
    downloads: 56,
  },
]

function Library() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('ទាំងអស់')
  const [selectedBook, setSelectedBook] = useState(null)

  const filteredBooks = useMemo(() => {
    return BOOKS.filter((book) => {
      const matchesCategory = activeCategory === 'ទាំងអស់' || book.category === activeCategory
      const matchesQuery =
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  const handleShare = () => {
    if (selectedBook) {
      if (navigator.share) {
        navigator.share({
          title: selectedBook.title,
          url: window.location.href,
        }).catch((err) => console.log(err))
      } else {
        navigator.clipboard.writeText(window.location.href)
        alert('តំណភ្ជាប់ត្រូវបានចម្លងទុក!')
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1329] font-khmer text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* ក្បាលទំព័រ + Search */}
      <header className="py-10 max-w-6xl mx-auto px-6">
        <div>
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-3 font-semibold">
            <FiBookOpen size={22} />
            <span className="text-sm tracking-wide">បណ្ណាល័យសាលា</span>
          </div>
          <h1 className="font-khmer text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mb-6">
            ស្វែងរកសៀវភៅ ឬឯកសារដែលអ្នកចង់អាន
          </h1>

          <div className="relative max-w-xl">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
              size={20}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ស្វែងរកតាមចំណងជើង ឬអ្នកនិពន្ធ..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 placeholder:text-slate-400 outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 dark:bg-slate-800/40 dark:border-slate-800/80 dark:text-white dark:placeholder:text-slate-500 transition-all"
            />
          </div>
        </div>
      </header>

      {/* ក្រុមសៀវភៅ / ប្រភេទ */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setSelectedBook(null)
              }}
              className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 dark:bg-sky-500 dark:text-slate-950 dark:border-sky-500 font-bold shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-slate-900/40 dark:text-slate-300 dark:border-slate-800/80 dark:hover:bg-slate-800/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* បញ្ជីសៀវភៅ */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {!selectedBook ? (
          <>
            {activeCategory === 'ទាំងអស់' && !query ? (
              // បង្ហាញតាមក្រុមប្រភេទ
              <div className="space-y-12">
                {CATEGORIES.filter(cat => cat !== 'ទាំងអស់' && BOOKS.some(b => b.category === cat)).map((cat) => {
                  const catBooks = BOOKS.filter(b => b.category === cat)
                  return (
                    <div key={cat} className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/80 pb-3">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                          <span className="w-1.5 h-6 rounded-full bg-indigo-600 dark:bg-sky-500" />
                          {cat}
                        </h2>
                        <button
                          onClick={() => setActiveCategory(cat)}
                          className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                        >
                          មើលទាំងអស់ &rarr;
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {catBooks.slice(0, 4).map((book) => (
                          <div
                            key={book.id}
                            onClick={() => setSelectedBook(book)}
                            className="group bg-white dark:bg-[#121E36] rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                          >
                            {/* រូបភាពគម្រប (Document Preview) */}
                            <div className="relative aspect-[1.3/1] w-full overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60">
                              <img
                                src={book.cover}
                                alt={book.title}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            {/* ព័ត៌មានលម្អិត */}
                            <div className="p-4 flex flex-col flex-grow justify-between">
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2.5">
                                  <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                                    {book.category}
                                  </span>
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    PDF
                                  </span>
                                </div>

                                <h3 className="font-khmer text-slate-800 dark:text-slate-100 text-sm md:text-base font-bold leading-snug line-clamp-2 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors mb-3">
                                  {book.title}
                                </h3>
                              </div>

                              {/* ទំហំ និង ចំនួនទាញយក */}
                              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-3 mt-auto">
                                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                  {book.size || '1.3 MB'}
                                </span>
                                <div className="flex items-center gap-1 text-sky-500 dark:text-sky-400 text-xs font-bold">
                                  <FiDownload className="w-3.5 h-3.5" />
                                  <span>{book.downloads || 0}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              // បង្ហាញជា Grid ធម្មតា
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/80 pb-3">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-indigo-600 dark:bg-sky-500" />
                    {activeCategory} {query && `(ស្វែងរក: "${query}")`}
                  </h2>
                </div>

                {filteredBooks.length === 0 ? (
                  <div className="text-center py-20 bg-white dark:bg-[#121E36] rounded-3xl border border-slate-200/40 dark:border-slate-800/60">
                    <p className="font-khmer font-bold text-xl text-slate-500 dark:text-slate-400 mb-2">រកមិនឃើញសៀវភៅទេ</p>
                    <p className="text-slate-400 text-sm">សាកល្បងស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង ឬជ្រើសរើសប្រភេទផ្សេង</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                      <div
                        key={book.id}
                        onClick={() => setSelectedBook(book)}
                        className="group bg-white dark:bg-[#121E36] rounded-2xl overflow-hidden border border-slate-200/40 dark:border-slate-800/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                      >
                        {/* រូបភាពគម្រប (Document Preview) */}
                        <div className="relative aspect-[1.3/1] w-full overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/60">
                          <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* ព័ត៌មានលម្អិត */}
                        <div className="p-4 flex flex-col flex-grow justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                                {book.category}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                PDF
                              </span>
                            </div>

                            <h3 className="font-khmer text-slate-800 dark:text-slate-100 text-sm md:text-base font-bold leading-snug line-clamp-2 hover:text-indigo-600 dark:hover:text-sky-400 transition-colors mb-3">
                              {book.title}
                            </h3>
                          </div>

                          {/* ទំហំ និង ចំនួនទាញយក */}
                          <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-3 mt-auto">
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                              {book.size || '1.3 MB'}
                            </span>
                            <div className="flex items-center gap-1 text-sky-500 dark:text-sky-400 text-xs font-bold">
                              <FiDownload className="w-3.5 h-3.5" />
                              <span>{book.downloads || 0}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          // បង្ហាញព័ត៌មានលម្អិតរបស់សៀវភៅ
          <div className="space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <button onClick={() => setSelectedBook(null)} className="hover:text-indigo-600 dark:hover:text-sky-400 transition-colors">
                ទំព័រដើម
              </button>
              <span className="text-slate-400 dark:text-slate-600">&gt;</span>
              <button
                onClick={() => {
                  setActiveCategory(selectedBook.category)
                  setSelectedBook(null)
                }}
                className="hover:text-indigo-600 dark:hover:text-sky-400 transition-colors"
              >
                {selectedBook.category}
              </button>
              <span className="text-slate-400 dark:text-slate-600">&gt;</span>
              <span className="text-slate-800 dark:text-slate-200 line-clamp-1">{selectedBook.title}</span>
            </div>

            {/* Layout Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* PDF Preview: 2/3 width on desktop */}
              <div className="lg:col-span-2 space-y-4">
                <PdfPreview fileUrl={selectedBook.downloadUrl} fileName={selectedBook.title + '.pdf'} />
              </div>

              {/* Book Metadata: 1/3 width on desktop */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#121E36] border border-slate-200/40 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm">
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-2 block uppercase tracking-wider">
                    {selectedBook.category}
                  </span>
                  <h2 className="font-khmer text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-2">
                    {selectedBook.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    និពន្ធដោយ: <span className="font-semibold text-slate-700 dark:text-slate-300">{selectedBook.author}</span>
                  </p>

                  {/* Specs Box */}
                  <div className="bg-slate-100 dark:bg-[#0B1329]/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-4 flex flex-col gap-3.5">
                    <div className="flex justify-between text-sm py-1.5 border-b border-slate-200/60 dark:border-slate-800 last:border-0">
                      <span className="text-slate-500 dark:text-slate-400">ទំហំឯកសារ (Size)</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{selectedBook.size || '1.3 MB'}</span>
                    </div>
                    <div className="flex justify-between text-sm py-1.5 border-b border-slate-200/60 dark:border-slate-800 last:border-0">
                      <span className="text-slate-500 dark:text-slate-400">ចំនួនទាញយក (Downloads)</span>
                      <span className="font-bold text-sky-500 dark:text-sky-400 flex items-center gap-1">
                        <FiDownload className="w-3.5 h-3.5" /> {selectedBook.downloads || 0}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm py-1.5 border-b border-slate-200/60 dark:border-slate-800 last:border-0">
                      <span className="text-slate-500 dark:text-slate-400">ទម្រង់ (Format)</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">PDF</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={selectedBook.downloadUrl}
                    download
                    className="mt-6 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 transform active:scale-95 hover:shadow-indigo-500/20"
                  >
                    <FiDownload size={18} />
                    <span>ទាញយកឯកសារ</span>
                  </a>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    className="mt-3 w-full py-3.5 px-6 rounded-xl border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold bg-white dark:bg-[#121E36] hover:bg-slate-50 dark:hover:bg-slate-800/60 flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <FiShare2 size={16} />
                    <span>ចែករំលែក (Share)</span>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="mt-3 w-full py-3 px-6 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    ត្រឡប់ក្រោយ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Library
