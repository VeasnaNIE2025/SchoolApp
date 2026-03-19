import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import ImageSlide from "./ImageSlider";
import Footer from "./Footer";
import "../../index.css";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header: Image + MenuBar */}
      <div className="h-[30%] flex flex-col">
        <div className="h-1/2">
          <ImageSlide />
        </div>
        <div className="h-1/2">
          <MenuBar />
        </div>
      </div>

      {/* Main Content: Outlet */}
      <div className="h-[50%]">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="h-[20%]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;