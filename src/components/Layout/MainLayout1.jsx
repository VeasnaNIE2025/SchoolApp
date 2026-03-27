import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
const MainLayout1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header: MenuBar */}
      <div className="h-[30%] flex flex-col">
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

export default MainLayout1;