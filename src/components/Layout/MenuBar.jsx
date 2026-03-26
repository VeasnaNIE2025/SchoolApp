// components/MenuBar.jsx
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
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ==================== DARK MODE LOGIC ====================
  useEffect(() => {
    // Load from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  // =======================================================

  /* ── Scroll shrink ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close menu on resize ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navCls = ({ isActive }) =>
    `relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
     ${isActive
      ? "bg-white/20 text-white"
      : "text-white/75 hover:text-white hover:bg-white/10"
    }`;

  const mobileNavCls = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200
     ${isActive
      ? "bg-white/20 text-white"
      : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  const navLinks = [
    { to: "/",        icon: <AiOutlineHome />,        label: "ទំព័រដើម", end: true },
    { to: "/news",    icon: <AiOutlineRead />,         label: "ព័ត៌មាន" },
    { to: "/ict",     icon: <AiOutlineLaptop />,       label: "ព័ត៌មានវិទ្យា" },
    { to: "/contact", icon: <AiOutlinePhone />,        label: "ទំនាក់ទំនង" },
    { to: "/about",   icon: <AiOutlineInfoCircle />,   label: "អំពីខ្ញុំ" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
          ${scrolled ? "py-0 shadow-2xl" : "py-1"}
          bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600
          dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
          border-b border-white/10
        `}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group min-w-0 flex-shrink"
              onClick={closeMenu}
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center group-hover:opacity-90 transition">
                <img src={logo} alt="logo" className="w-full h-full object-contain" />
              </div>

              <span className="text-white font-extrabold tracking-tight font-khmer leading-snug
                hidden sm:block text-xs md:text-xs lg:text-sm
                max-w-[160px] md:max-w-[260px] lg:max-w-none line-clamp-2">
                វិទ្យាល័យចំណេះទូទៅ និងបច្ចេកទេស <br className="hidden lg:block"/>
                ព្រះបាទសម្ដេចព្រះបរមនាថ នរោត្តមសីហមុនី
              </span>

              <span className="text-white font-extrabold text-sm tracking-tight font-khmer sm:hidden">
                វ.ច.ប.
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 flex-shrink-0">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  className={navCls}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Right Side - Dark Toggle + Mobile Menu */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Dark Mode Toggle - Improved */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="relative w-14 h-7 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center px-1 cursor-pointer"
              >
                <span
                  className={`absolute w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300
                    ${isDark ? "translate-x-7" : "translate-x-0"}`}
                >
                  {isDark ? (
                    <HiOutlineMoon className="text-indigo-700 text-xs" />
                  ) : (
                    <HiOutlineSun className="text-amber-500 text-xs" />
                  )}
                </span>
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/15 transition"
                aria-expanded={isOpen}
              >
                {isOpen ? <AiOutlineClose className="text-xl" /> : <AiOutlineMenu className="text-xl" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 pb-5 pt-2 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className={mobileNavCls}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;