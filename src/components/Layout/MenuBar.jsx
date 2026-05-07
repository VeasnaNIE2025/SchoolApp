import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const navItems = [
  { to: "/", label: "ទំព័រដើម", icon: AiOutlineHome },
  { to: "/news", label: "ព័ត៌មាន", icon: AiOutlineRead },
  { to: "/ict", label: "ព័ត៌មានវិទ្យា", icon: AiOutlineLaptop },
  { to: "/videos", label: "វីដេអូ", icon: BsCameraVideo },
  { to: "/aboutme", label: "អំពីខ្ញុំ", icon: AiOutlineInfoCircle },
  { to: "/contact", label: "ទំនាក់ទំនង", icon: AiOutlinePhone },
];

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled 
          ? "py-2 shadow-xl bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800" 
          : "py-3 bg-gradient-to-r from-indigo-700 to-violet-700 dark:from-gray-900 dark:to-gray-950"
        }`}>
        
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
              <div className="w-10 h-10 overflow-hidden border shadow-md rounded-2xl border-white/30">
                <img src={logo} alt="Logo" className="object-contain w-full h-full" />
              </div>
              
              <div className="font-khmer">
                <span className="text-[17px] md:text-xl font-bold text-white leading-tight tracking-tight block">
                  វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី
                </span>
                <span className="text-[13px] text-white/70 hidden sm:block">
                  ចំណេះទូទៅ • បច្ចេកទេស
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1.5">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-5 py-2.5 rounded-3xl text-sm font-semibold transition-all
                     ${isActive 
                       ? "bg-white text-indigo-700 shadow-lg" 
                       : "text-white/80 hover:text-white hover:bg-white/10"
                     }`
                  }
                >
                  <Icon className="text-xl" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center justify-center text-white transition-all w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95"
              >
                {dark ? <HiOutlineMoon className="text-2xl" /> : <HiOutlineSun className="text-2xl text-amber-300" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center text-white transition-all md:hidden w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95"
              >
                {isOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== Mobile Menu ==================== */}
        <div
          className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={closeMenu}
        >
          <div
            className={`bg-white dark:bg-gray-900 w-[85%] max-w-[320px] h-full shadow-2xl transform transition-transform duration-500 ease-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Logo" className="w-9 h-9" />
                  <span className="text-lg font-bold text-gray-800 font-khmer dark:text-white">
                    វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី
                  </span>
                </div>
                <button onClick={closeMenu} className="text-3xl text-gray-500 dark:text-gray-400">
                  <AiOutlineClose />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-5 py-4 rounded-2xl text-[17px] font-medium transition-all
                       ${isActive 
                         ? "bg-indigo-600 text-white" 
                         : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                       }`
                    }
                  >
                    <Icon className="text-2xl" />
                    <span>{label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

export default MenuBar;