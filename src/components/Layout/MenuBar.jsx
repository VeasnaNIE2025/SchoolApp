// components/MenuBar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";           // ← ប្រើ NavLink ដើម្បី highlight ទំព័របច្ចុប្បន្ន
import { 
  AiOutlineHome, 
  AiOutlineRead, 
  AiOutlineInfoCircle, 
  AiOutlinePhone, 
  AiOutlineMenu, 
  AiOutlineClose 
} from "react-icons/ai";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold font-khmer">
              SchoolApp
            </Link>
          </div>

          {/* Desktop Menu - បង្ហាញតែលើ md ឡើងទៅ */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `flex items-center space-x-1 hover:text-yellow-300 transition-colors ${isActive ? "text-yellow-300" : ""}`
              }
            >
              <AiOutlineHome className="text-lg" />
              <span>ទំព័រដើម</span>
            </NavLink>

            <NavLink 
              to="/news" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `flex items-center space-x-1 hover:text-yellow-300 transition-colors ${isActive ? "text-yellow-300" : ""}`
              }
            >
              <AiOutlineRead className="text-lg" />
              <span>ព័ត៌មាន</span>
            </NavLink>

            <NavLink 
              to="/about" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `flex items-center space-x-1 hover:text-yellow-300 transition-colors ${isActive ? "text-yellow-300" : ""}`
              }
            >
              <AiOutlineInfoCircle className="text-lg" />
              <span>អំពីខ្ញុំ</span>
            </NavLink>

            <NavLink 
              to="/contact" 
              onClick={closeMenu}
              className={({ isActive }) => 
                `flex items-center space-x-1 hover:text-yellow-300 transition-colors ${isActive ? "text-yellow-300" : ""}`
              }
            >
              <AiOutlinePhone className="text-lg" />
              <span>ទំនាក់ទំនង</span>
            </NavLink>
          </div>

          {/* Hamburger Button - បង្ហាញតែលើ mobile (តូចជាង md) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isOpen ? (
                <AiOutlineClose className="block h-7 w-7" />
              ) : (
                <AiOutlineMenu className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 ${isActive ? "bg-blue-900 text-yellow-300" : ""}`
            }
          >
            <AiOutlineHome />
            <span>ទំព័រដើម</span>
          </NavLink>

          <NavLink
            to="/news"
            onClick={closeMenu}
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 ${isActive ? "bg-blue-900 text-yellow-300" : ""}`
            }
          >
            <AiOutlineRead />
            <span>ព័ត៌មាន</span>
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 ${isActive ? "bg-blue-900 text-yellow-300" : ""}`
            }
          >
            <AiOutlineInfoCircle />
            <span>អំពីខ្ញុំ</span>
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 ${isActive ? "bg-blue-900 text-yellow-300" : ""}`
            }
          >
            <AiOutlinePhone />
            <span>ទំនាក់ទំនង</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;