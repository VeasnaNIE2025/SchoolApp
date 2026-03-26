// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import HomePage from "./page/home/HomePage";
import NewsPage from "./page/news/NewsPage";
import MainLayout from "./components/Layout/MainLayout";
import IctPage from "./page/ICT/IctPage";
import MainLayout1 from "./components/Layout/MainLayout1";
import ContactPage from "./page/contact/ContactPage";
import AboutMePage from "./page/aboutme/AboutMePage";
function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route element={<MainLayout/>}> 
              <Route path="/" element={<HomePage/>} />
              <Route path="/contact" element={<ContactPage/>} />
            </Route>
            <Route element={<MainLayout1/>}>
              <Route path="/news" element={<NewsPage />} />
              <Route path="/ict" element={<IctPage/>} />
              <Route path="/aboutme" element={<AboutMePage/>} />
              <Route path="*" element={<h1>Error Route</h1>}/>
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
