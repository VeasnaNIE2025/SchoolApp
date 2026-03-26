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

} from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  /* ── Dark mode: toggle class on <html> ── */
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

  /* ── Shrink navbar on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  /* ── Shared NavLink class builder ── */
  const navCls = ({ isActive }) =>
    `relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200
     ${isActive
      ? "bg-white/15 text-white"
      : "text-white/70 hover:text-white hover:bg-white/10"
    }`;

  const mobileNavCls = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200
     ${isActive
      ? "bg-white/15 text-white"
      : "text-white/60 hover:text-white hover:bg-white/10"
    }`;

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
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>

            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              onClick={closeMenu}
            >
              {/* Logo Image */}
              <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center group-hover:opacity-90 transition">
                <img src={logo} alt="Salacode logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight font-khmer leading-none">
                វិទ្យាល័យចំណេះទូទៅ និងបច្ចេកទេស ព្រះបាទសម្ដេចព្រះបរមនាថ នរោត្តមសីហមុនី
              </span>
            </Link>

            {/* ── Desktop Links ── */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink to="/" onClick={closeMenu} className={navCls} end>
                <AiOutlineHome className="text-base" /><span>ទំព័រដើម</span>
              </NavLink>
              <NavLink to="/news" onClick={closeMenu} className={navCls}>
                <AiOutlineRead className="text-base" /><span>ព័ត៌មាន</span>
              </NavLink>
              <NavLink to="/ict" onClick={closeMenu} className={navCls}>
                <AiOutlineLaptop className="text-base" />
                <span>ព័ត៌មានវិទ្យា</span>
              </NavLink> 
              <NavLink to="/contact" onClick={closeMenu} className={navCls}>
                <AiOutlinePhone className="text-base" /><span>ទំនាក់ទំនង</span>
              </NavLink>
              <NavLink to="/aboutme" onClick={closeMenu} className={navCls}>
                <AiOutlineInfoCircle className="text-base" /><span>អំពីខ្ញុំ</span>
              </NavLink>

            </div>

            {/* ── Right Controls ── */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className="relative w-14 h-7 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center px-1 cursor-pointer"
              >
                <span
                  className={`absolute w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300
                    ${dark ? "translate-x-7" : "translate-x-0"}`}
                >
                  {dark
                    ? <HiOutlineMoon className="text-indigo-700 text-xs" />
                    : <HiOutlineSun className="text-amber-500 text-xs" />
                  }
                </span>
              </button>

              {/* Hamburger (mobile) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/15 transition"
                aria-expanded={isOpen}
              >
                {isOpen
                  ? <AiOutlineClose className="text-xl" />
                  : <AiOutlineMenu className="text-xl" />
                }
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Dropdown ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 pb-4 pt-2 space-y-1 border-t border-white/10">
            <NavLink to="/" onClick={closeMenu} className={mobileNavCls} end>
              <AiOutlineHome className="text-lg" /><span>ទំព័រដើម</span>
            </NavLink>
            <NavLink to="/news" onClick={closeMenu} className={mobileNavCls}>
              <AiOutlineRead className="text-lg" /><span>ព័ត៌មាន</span>
            </NavLink>
            <NavLink to="/aboutme" onClick={closeMenu} className={mobileNavCls}>
              <AiOutlineInfoCircle className="text-lg" /><span>អំពីខ្ញុំ</span>
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={mobileNavCls}>
              <AiOutlinePhone className="text-lg" /><span>ទំនាក់ទំនង</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;
