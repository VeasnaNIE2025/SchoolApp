// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import MainLayout1 from "./components/Layout/MainLayout1";

import HomePage from "./page/home/HomePage";
import NewsPage from "./page/news/NewsPage";
import NewsDetail from "./page/news/NewsDetail";
import IctPage from "./page/ICT/IctPage";
import VideosPage from "./page/videos/VideosPage";
import ContactPage from "./page/contact/ContactPage";
import AboutMePage from "./page/aboutme/AboutMePage";
import Library from "./page/library/Library";
import StudentHomeWork from "./page/gethomework/StudentHomeWork";
import ListHomeWork from "./page/gethomework/ListHomeWork";

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
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/ict" element={<IctPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/gethomework/StudentHomeWork" element={<StudentHomeWork />} />
          <Route path="/gethomework/ListHomeWork" element={<ListHomeWork />} />

          {/* ដាក់ * នៅខាងក្រោមបំផុត */}
          <Route path="*" element={<h1>404 - ទំព័រមិនមានទេ</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;