// src/components/MenuBar.jsx
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

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  // Toggle dark mode
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

  // Scroll listener for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 shadow-xl bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-800/30"
            : "py-3 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950"
        }`}
      >
        <div className="px-5 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with hover animation */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-10 h-10 overflow-hidden border shadow-md rounded-xl border-white/30"
              >
                <img src={logo} alt="សាលារៀន" className="object-contain w-full h-full" />
              </motion.div>
              <div className="font-khmer">
                <span className="text-[17px] md:text-xl font-bold text-white leading-tight tracking-tight block transition-all duration-300 group-hover:tracking-wide">
                  វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី
                </span>
                <span className="text-[13px] text-white/80 hidden sm:block transition-opacity duration-300 group-hover:text-white/100">
                  ចំណេះទូទៅ • បច្ចេកទេស
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="items-center hidden gap-1 md:flex">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} onClick={closeMenu}>
                  {({ isActive }) => (
                    <div className="relative px-4 py-2 transition-all duration-200 rounded-full hover:bg-white/10">
                      <div className="flex items-center gap-2">
                        <Icon className={`text-xl transition-transform duration-200 ${isActive ? "scale-110" : ""}`} />
                        <span className={`text-sm font-medium ${isActive ? "text-white" : "text-white/80"}`}>
                          {label}
                        </span>
                      </div>
                      {isActive && (
                        <motion.span
                          layoutId="activeDesktopTab"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                aria-label="ប្តូរពន្លឺ/ងងឹត"
              >
                {dark ? (
                  <HiOutlineMoon className="text-xl text-white" />
                ) : (
                  <HiOutlineSun className="text-xl text-amber-300" />
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full md:hidden bg-white/10 backdrop-blur-sm hover:bg-white/20"
                aria-label="ម៉ឺនុយ"
              >
                {isOpen ? (
                  <AiOutlineClose className="text-xl text-white" />
                ) : (
                  <AiOutlineMenu className="text-xl text-white" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-[85%] max-w-sm h-full bg-white dark:bg-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Header with logo and close button */}
                <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="logo" className="w-10 h-10 shadow-md rounded-xl" />
                    <span className="text-base font-bold text-gray-800 font-khmer dark:text-white">
                      វិទ្យាល័យ​ព្រះបាទ...
                    </span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-500 transition-all rounded-full dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-3 py-4 overflow-y-auto">
                  {navItems.map(({ to, label, icon: Icon }) => (
                    <NavLink key={to} to={to} onClick={closeMenu}>
                      {({ isActive }) => (
                        <div
                          className={`flex items-center gap-4 px-4 py-3 rounded-xl mb-1 transition-all duration-200 ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-md"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <Icon className={`text-xl ${isActive ? "text-white" : "text-indigo-500"}`} />
                          <span className="font-medium">{label}</span>
                          {isActive && (
                            <span className="ml-auto text-sm font-bold">✓</span>
                          )}
                        </div>
                      )}
                    </NavLink>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-5 text-xs text-center text-gray-500 border-t border-gray-200 dark:border-gray-800">
                  <p>© {new Date().getFullYear()} វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី</p>
                  <p className="mt-1">ចំណេះទូទៅ និងបច្ចេកទេស</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content hiding under fixed navbar */}
      <div className="h-16 md:h-[4.5rem]" />
    </>
  );
};

export default MenuBar;