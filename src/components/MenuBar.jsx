// // components/MenuBar.jsx
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   AiOutlineHome,
//   AiOutlineRead,
//   AiOutlineInfoCircle,
//   AiOutlinePhone,
//   AiOutlineMenu,
//   AiOutlineClose,
// } from "react-icons/ai";

// const desktopLink = ({ isActive }) =>
//   `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm lg:text-base
//    font-medium font-khmer whitespace-nowrap transition-colors
//    hover:text-yellow-300 hover:bg-blue-700
//    ${isActive ? "text-yellow-300 bg-blue-700" : ""}`;

// const mobileLink = ({ isActive }) =>
//   `flex items-center gap-2 px-3 py-2.5 rounded-md text-base
//    font-medium font-khmer transition-colors
//    hover:bg-blue-800
//    ${isActive ? "bg-blue-900 text-yellow-300" : ""}`;

// const NAV_ITEMS = [
//   { to: "/",        label: "ទំព័រដើម",    Icon: AiOutlineHome        },
//   { to: "/news",    label: "ព័ត៌មាន",     Icon: AiOutlineRead        },
//   { to: "/about",   label: "អំពីខ្ញុំ",   Icon: AiOutlineInfoCircle  },
//   { to: "/contact", label: "ទំនាក់ទំនង", Icon: AiOutlinePhone       },
// ];

// function MenuBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const close = () => setIsOpen(false);

//   return (
//     // ← គ្មាន <style> tag ទៀតហើយ
//     <nav className="fixed top-0 left-0 z-50 w-full text-white bg-blue-600 shadow-md">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center min-h-[4rem] py-2">

//           <Link to="/" className="text-xl font-bold md:text-2xl font-khmer shrink-0">
//             SchoolApp
//           </Link>

//           <div className="items-center hidden gap-1 md:flex lg:gap-2">
//             {NAV_ITEMS.map(({ to, label, Icon }) => (
//               <NavLink key={to} to={to} onClick={close} className={desktopLink}>
//                 <Icon className="text-lg shrink-0" />
//                 <span>{label}</span>
//               </NavLink>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsOpen((o) => !o)}
//             className="p-2 rounded-md md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
//             aria-expanded={isOpen}
//             aria-label="Toggle menu"
//           >
//             {isOpen
//               ? <AiOutlineClose className="w-6 h-6" />
//               : <AiOutlineMenu  className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       <div className={`md:hidden overflow-hidden transition-all duration-300
//                       ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
//         <div className="px-3 pt-1 pb-3 space-y-1 bg-blue-700">
//           {NAV_ITEMS.map(({ to, label, Icon }) => (
//             <NavLink key={to} to={to} onClick={close} className={mobileLink}>
//               <Icon className="text-lg shrink-0" />
//               <span>{label}</span>
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default MenuBar;