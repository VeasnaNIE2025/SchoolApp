import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-700 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 dark:text-gray-400 font-khmer dark:border-gray-800">
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          
          {/* Column 1 - Logo & Description */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6 group">
              <h2 className="text-2xl font-bold text-transparent transition-all duration-300 lg:text-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text group-hover:from-indigo-500 group-hover:via-violet-500">
                វិចប.ព្រះបាទនរោត្តមសីហមុនី
              </h2>
            </Link>
            
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-500 max-w-md">
              ផ្តល់ជូននូវចំណេះដឹង និងស្នាដៃសិស្សានុសិស្សជូនសហគមន៍អប់រំកម្ពុជា។ 
              បច្ចេកវិទ្យាទំនើប • មាតិកាគុណភាពខ្ពស់ • បទពិសោធន៍ល្អបំផុត។
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-sm">
              <a href="mailto:manveasna1994@gmail.com" className="flex items-center gap-3 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                <span className="text-xl">✉️</span>
                manveasna1994@gmail.com
              </a>
              <a href="tel:+855967932240" className="flex items-center gap-3 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                <span className="text-xl">☎️</span>
                097 793 2240
              </a>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                ស្រុកកំពង់ត្រឡាច, ខេត្តកំពង់ឆ្នាំង
              </div>
            </div>
          </div>

          {/* Column 2 & 3 - Links */}
          <div className="grid grid-cols-2 gap-10 md:col-span-4">
            <div>
              <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">អំពីយើង</h3>
              <ul className="space-y-3.5 text-[15px]">
                {[
                  { to: "/about", label: "អំពីវេទិកា" },
                  { to: "/contact", label: "ទំនាក់ទំនង" },
                  { to: "/faq", label: "សំណួរញឹកញាប់" },
                  { to: "/feedback", label: "ផ្តល់យោបល់" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">ច្បាប់</h3>
              <ul className="space-y-3.5 text-[15px]">
                {[
                  { to: "/privacy", label: "គោលការណ៍ឯកជនភាព" },
                  { to: "/terms", label: "លក្ខខណ្ឌប្រើប្រាស់" },
                  { to: "/cookies", label: "គោលការណ៍ខូគី" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 - Social + Newsletter */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white">តាមដានយើង</h3>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-500">
              ទទួលព័ត៌មានថ្មីៗ និងសកម្មភាពពីយើង
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-10">
              {[
                { icon: "𝗙", color: "hover:bg-blue-600", name: "Facebook" },
                { icon: "𝗧", color: "hover:bg-sky-500", name: "Twitter" },
                { icon: "📷", color: "hover:bg-pink-600", name: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-11 h-11 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:text-white ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Simple Newsletter */}
            <div>
              <p className="mb-2 text-sm font-medium">ជាវសារព័ត៌មាន</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="អ៊ីម៉ែលរបស់អ្នក"
                  className="flex-1 px-4 py-3 text-sm bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 rounded-l-2xl focus:outline-none focus:border-indigo-500"
                />
                <button className="px-6 font-medium text-white transition bg-indigo-600 hover:bg-indigo-700 rounded-r-2xl">
                  ជាវ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-16 text-xs text-center text-gray-500 border-t border-gray-200 dark:border-gray-800 dark:text-gray-600">
          <p>&copy; {currentYear} វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី • រក្សាសិទ្ធិគ្រប់យ៉ាង</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;