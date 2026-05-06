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

  // Dark Mode
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

  // Scroll Effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 shadow-2xl bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800"
            : "py-3 bg-gradient-to-r from-indigo-700 via-violet-600 to-purple-700 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
        }`}
      >
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 overflow-hidden transition-transform border shadow-inner rounded-xl border-white/30 group-hover:scale-105">
                <img
                  src={logo}
                  alt="School Logo"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="hidden md:block">
                <span className="text-lg font-bold leading-tight tracking-tight text-white font-khmer">
                  វិចប.ព្រះបាទនរោត្តមសីហមុនី
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="items-center hidden gap-1 md:flex">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 relative group
                     ${isActive
                      ? "bg-white text-indigo-700 shadow-md"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  <Icon className="text-lg" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center justify-center transition-all w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95"
                aria-label="Toggle theme"
              >
                {dark ? (
                  <HiOutlineMoon className="text-xl text-white" />
                ) : (
                  <HiOutlineSun className="text-xl text-amber-300" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center transition-all md:hidden w-11 h-11 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <AiOutlineClose className="text-2xl text-white" />
                ) : (
                  <AiOutlineMenu className="text-2xl text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Down with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-5 py-6 border-t border-gray-200 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl dark:border-gray-800">
            <div className="flex flex-col gap-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium transition-all
                     ${isActive
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
}

export default MenuBar;