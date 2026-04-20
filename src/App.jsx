// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import MainLayout1 from "./components/Layout/MainLayout1";

import HomePage from "./page/home/HomePage";
import NewsPage from "./page/news/NewsPage";
import IctPage from "./page/ICT/IctPage";
import VideosPage from "./page/videos/VideosPage";
import ContactPage from "./page/contact/ContactPage";
import AboutMePage from "./page/aboutme/AboutMePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout 1 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Layout 2 */}
        <Route element={<MainLayout1 />}>
          <Route path="/news" element={<NewsPage />} />
          <Route path="/ict" element={<IctPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          
          {/* ដាក់ * នៅខាងក្រោមបំផុត */}
          <Route path="*" element={<h1>404 - ទំព័រមិនមានទេ</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;