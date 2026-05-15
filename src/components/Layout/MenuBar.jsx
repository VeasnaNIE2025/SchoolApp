// 
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
  AiOutlineLaptop,
} from "react-icons/ai";
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
  const toggleTheme = () => setDark(!dark);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled
            ? "py-1 shadow-2xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50"
            : "py-2 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"
          }`}
      >
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo - Improved with hover effect */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 overflow-hidden transition-all duration-300 border shadow-md rounded-2xl border-white/30 group-hover:scale-105 group-hover:shadow-lg">
                <img src={logo} alt="សាលារៀន" className="object-contain w-full h-full" />
              </div>

              <div className="font-khmer">
                <span className="text-[17px] md:text-xl font-bold text-white leading-tight tracking-tight block transition-all duration-300 group-hover:tracking-wide">
                  វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី
                </span>
                <span className="text-[13px] text-white/80 hidden sm:block transition-opacity duration-300 group-hover:text-white/100">
                  ចំណេះទូទៅ • បច្ចេកទេស
                </span>
              </div>
            </Link>

            {/* Desktop Menu - Improved active indicator */}
            <div className="hidden md:flex items-center gap-1.5">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `relative flex items-center gap-2 px-5 py-2.5 rounded-3xl text-sm font-semibold transition-all duration-300
                     ${isActive
                        ? "bg-white text-indigo-700 shadow-md scale-105"
                        : "text-white/80 hover:text-white hover:bg-white/10 hover:scale-105"
                      }`
                  }
                >
                  <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                  <span>{label}</span>
                  {/* Active underline indicator for desktop */}
                  {({ isActive }) => isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Controls - Improved buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="relative flex items-center justify-center text-white transition-all duration-300 w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 hover:rotate-12"
                aria-label="ប្តូរពន្លឺ/ងងឹត"
              >
                {dark ? (
                  <HiOutlineMoon className="text-2xl" />
                ) : (
                  <HiOutlineSun className="text-2xl text-amber-300" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center text-white transition-all duration-300 md:hidden w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95"
                aria-label="ម៉ឺនុយ"
              >
                {isOpen ? (
                  <AiOutlineClose className="text-2xl" />
                ) : (
                  <AiOutlineMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ==================== Mobile Menu - Enhanced ==================== */}
        <div
          className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-md transition-all duration-400 z-40
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
          onClick={closeMenu}
        >
          <div
            className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl w-[85%] max-w-[340px] h-full shadow-2xl transform transition-all duration-500 ease-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="សាលារៀន" className="w-10 h-10 shadow-md rounded-xl" />
                    <span className="text-base font-bold text-gray-800 font-khmer dark:text-white">
                      វិទ្យាល័យព្រះបាទ...
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-2xl text-gray-500 transition-all rounded-full dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-90"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-1.5">
                  {navItems.map(({ to, label, icon: Icon }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[17px] font-medium transition-all duration-200
                         ${isActive
                            ? "bg-indigo-600 text-white shadow-md"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1"
                          }`
                      }
                    >
                      <Icon className={`text-2xl ${({ isActive }) => isActive ? "text-white" : "text-indigo-500"}`} />
                      <span>{label}</span>
                      {({ isActive }) => isActive && (
                        <span className="ml-auto text-xs font-bold">✓</span>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Optional: extra info in mobile menu */}
              <div className="p-6 pt-4 text-xs text-center text-gray-500 border-t border-gray-200 dark:border-gray-800">
                <p>© {new Date().getFullYear()} វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer - Prevent content hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
}

export default MenuBar;