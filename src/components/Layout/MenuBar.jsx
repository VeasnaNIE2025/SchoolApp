import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLaptop,
  AiOutlineBook,
} from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const navItems = [
  { to: "/", label: "ទំព័រដើម", icon: AiOutlineHome },
  { to: "/news", label: "ព័ត៌មាន", icon: AiOutlineRead },
  { to: "/ict", label: "ព័ត៌មានវិទ្យា", icon: AiOutlineLaptop },
  { to: "/library", label: "បណ្ណាល័យ", icon: AiOutlineBook },
  { to: "/videos", label: "វីដេអូ", icon: BsCameraVideo },
  { to: "/aboutme", label: "អំពីខ្ញុំ", icon: AiOutlineInfoCircle },
  { to: "/contact", label: "ទំនាក់ទំនង", icon: AiOutlinePhone },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  // Dark Mode Toggle
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

  // Scroll Listener with Performance Throttling
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu Open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-khmer ${
          scrolled
            ? "py-2.5 shadow-lg bg-white/90 dark:bg-[#0B1329]/90 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/80"
            : "py-4 bg-[#1E1B4B]/95 dark:bg-[#0B1329]/95 backdrop-blur-lg border-b border-indigo-950/20 dark:border-slate-800"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* BRAND LOGO & NAME */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3.5 group shrink-0"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-11 h-11 overflow-hidden border-2 shadow-sm rounded-xl border-white/20 bg-white p-0.5"
              >
                <img src={logo} alt="សាលារៀន" className="object-contain w-full h-full" />
              </motion.div>
              <div className="flex flex-col justify-center">
                <span className={`text-[15px] sm:text-[17px] xl:text-xl font-black leading-tight tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}>
                  វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី
                </span>
                <span className={`text-[12px] font-medium hidden sm:block mt-0.5 transition-colors duration-300 ${
                  scrolled ? "text-indigo-600 dark:text-indigo-400" : "text-indigo-200/90"
                }`}>
                  ចំណេះទូទៅ • បច្ចេកទេស
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="items-center hidden gap-1.5 xl:flex">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to}>
                  {({ isActive }) => (
                    <div className={`relative px-4 py-2.5 transition-all duration-300 rounded-xl flex items-center gap-2 group/item cursor-pointer ${
                      isActive 
                        ? scrolled ? "text-indigo-600 dark:text-sky-400 font-bold" : "text-white font-bold"
                        : scrolled ? "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" : "text-indigo-100/80 hover:text-white"
                    }`}>
                      <Icon className={`text-xl transition-transform duration-300 group-hover/item:scale-110`} />
                      <span className="text-[14.5px] font-semibold tracking-wide">
                        {label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className={`absolute inset-0 rounded-xl -z-10 ${
                            scrolled ? "bg-indigo-50 dark:bg-sky-500/10" : "bg-white/10"
                          }`}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDark(!dark)}
                className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 border ${
                  scrolled 
                    ? "bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-700 dark:bg-slate-800/40 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-slate-200" 
                    : "bg-white/10 hover:bg-white/20 border-white/10 text-white"
                }`}
                aria-label="Theme Switcher"
              >
                {dark ? <HiOutlineMoon className="text-xl text-violet-400" /> : <HiOutlineSun className="text-xl text-amber-400" />}
              </motion.button>

              {/* Hamburger Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 xl:hidden border ${
                  scrolled 
                    ? "bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800 dark:border-slate-800 dark:text-white" 
                    : "bg-white/10 hover:bg-white/20 border-white/10 text-white"
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? <AiOutlineClose className="text-xl" /> : <AiOutlineMenu className="text-xl" />}
              </motion.button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden font-khmer"
            onClick={() => setIsOpen(false)}
          >
            {/* Sidebar Slide */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="w-[290px] max-w-[85vw] h-full bg-white dark:bg-[#0B1329] border-r border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <img src={logo} alt="logo" className="w-9 h-9 p-0.5 bg-white shadow-sm border rounded-lg" />
                  <span className="text-sm font-bold text-slate-800 dark:text-white truncate max-w-[160px]">
                    វិទ្យាល័យ​ព្រះបាទ...
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 px-3 py-4 overflow-y-auto space-y-1.5">
                {navItems.map(({ to, label, icon: Icon }) => (
                  <NavLink key={to} to={to} onClick={() => setIsOpen(false)}>
                    {({ isActive }) => (
                      <div
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "bg-indigo-600 dark:bg-sky-500 text-white dark:text-slate-950 shadow-md shadow-indigo-600/10 font-bold"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                        }`}
                      >
                        <Icon className={`text-xl ${isActive ? "text-white dark:text-slate-950" : "text-indigo-500 dark:text-indigo-400"}`} />
                        <span className="text-[14.5px] font-semibold">{label}</span>
                        {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950" />}
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 text-[11px] text-center text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B1329]/30">
                <p className="font-medium">© {new Date().getFullYear()} វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី</p>
                <p className="mt-0.5 text-slate-400/80">ផ្នែកចំណេះទូទៅ និងបច្ចេកទេស</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacing compensation */}
      <div className="h-16 xl:h-[4.75rem]" />
    </>
  );
};

export default MenuBar;