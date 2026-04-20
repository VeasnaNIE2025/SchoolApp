// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

import HomePage from "./page/home/HomePage";
import NewsPage from "./page/news/NewsPage";
import IctPage from "./page/ICT/IctPage";
import VideosPage from "./page/videos/VideosPage";     // ← កែឈ្មោះ
import ContactPage from "./page/contact/ContactPage";
import AboutMePage from "./page/aboutme/AboutMePage";

import MainLayout from "./components/Layout/MainLayout";
import MainLayout1 from "./components/Layout/MainLayout1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout 1: Home & Contact */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Layout 2: ទំព័រផ្សេងៗ */}
        <Route element={<MainLayout1 />}>
          <Route path="/news" element={<NewsPage />} />
          <Route path="/ict" element={<IctPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />

          {/* Catch all 404 សម្រាប់ទំព័រដែលមិនមាន */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;