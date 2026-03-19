// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import HomePage    from "./page/home/HomePage";
import NewsPage    from "./page/news/NewsPage";
import MenuBar     from "./components/MenuBar";
import ImageSlider from "./components/ImageSlider";   // ← កែឈ្មោះឲ្យត្រឹមត្រូវ (ImageSilder → ImageSlider)

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-khmer antialiased">
        
        {/* Navbar ជាប់កំពូល */}
        <MenuBar />

        {/* ខ្លឹមសារសំខាន់ - បន្ថែម padding ដើម្បីកុំឲ្យជាន់ navbar */}
        <main className="pt-16 md:pt-13">
          
          <Routes>
            {/* ទំព័រដើម → មាន slider + content */}
            <Route 
              path="/" 
              element={
                <>
                  <ImageSlider />
                  <HomePage />
                </>
              } 
            />

            {/* ទំព័រផ្សេងទៀត → គ្មាន slider */}
            <Route path="/news" element={<NewsPage />} />

            {/* បន្ថែម route ផ្សេងៗនៅទីនេះនៅពេលក្រោយ */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}

            {/* 404 - ទំព័រមិនមាន */}
            <Route 
              path="*" 
              element={
                <div className="text-center py-20 px-4">
                  <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
                  <p className="text-xl text-gray-700">ទំព័រដែលអ្នកស្វែងរកមិនមានទេ...</p>
                  <p className="mt-4">
                    <a href="/" className="text-blue-600 hover:underline">ត្រឡប់ទៅទំព័រដើម</a>
                  </p>
                </div>
              } 
            />
          </Routes>

        </main>

        {/* Footer សាមញ្ញ (អាចបន្ថែមក្រោយមក) */}
        {/* <footer className="bg-gray-800 text-white py-6 text-center">
          <p>© {new Date().getFullYear()} SchoolApp. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;