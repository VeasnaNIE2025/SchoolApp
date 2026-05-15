import React, { useState } from "react";
import { Link } from "react-router-dom";
// បើអ្នកមិនទាន់មាន react-icons ទេ សូមដំឡើង៖ npm install react-icons
import { 
  FiMail, FiPhone, FiMapPin, FiSend, 
  FiFacebook, FiTwitter, FiInstagram, 
  FiArrowUp, FiHeart 
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-gray-700 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 dark:text-gray-400 font-khmer dark:border-gray-800">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute p-3 text-white transition-all duration-300 bg-indigo-600 rounded-full shadow-lg right-6 -top-5 hover:bg-indigo-700 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="ត្រឡប់ទៅលើ"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>

      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          
          {/* Column 1 - Logo & Description */}
          <div className="space-y-6 md:col-span-5">
            <Link to="/" className="inline-block group">
              <h2 className="text-2xl font-bold text-transparent transition-all duration-300 lg:text-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text group-hover:from-indigo-500 group-hover:via-violet-500">
                វិចប.ព្រះបាទនរោត្តមសីហមុនី
              </h2>
            </Link>
            
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-md">
              ផ្តល់ជូននូវចំណេះដឹង និងស្នាដៃសិស្សានុសិស្សជូនសហគមន៍អប់រំកម្ពុជា។ 
              បច្ចេកវិទ្យាទំនើប • មាតិកាគុណភាពខ្ពស់ • បទពិសោធន៍ល្អបំផុត។
            </p>

            {/* Contact Info with better icons */}
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:manveasna1994@gmail.com" 
                className="flex items-center gap-3 transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1"
              >
                <FiMail className="w-4 h-4 text-indigo-500" />
                <span>manveasna1994@gmail.com</span>
              </a>
              <a 
                href="tel:+855967932240" 
                className="flex items-center gap-3 transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1"
              >
                <FiPhone className="w-4 h-4 text-indigo-500" />
                <span>097 793 2240</span>
              </a>
              <div className="flex items-center gap-3">
                <FiMapPin className="w-4 h-4 text-indigo-500" />
                <span>ស្រុកកំពង់ត្រឡាច, ខេត្តកំពង់ឆ្នាំង</span>
              </div>
            </div>
          </div>

          {/* Column 2 & 3 - Links with better styling */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-indigo-500 after:rounded-full">
                អំពីយើង
              </h3>
              <ul className="space-y-3.5 text-[15px]">
                {[
                  { to: "/about", label: "អំពីវេទិកា" },
                  { to: "/contact", label: "ទំនាក់ទំនង" },
                  { to: "/faq", label: "សំណួរញឹកញាប់" },
                  { to: "/feedback", label: "ផ្តល់យោបល់" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link 
                      to={to} 
                      className="inline-block transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-indigo-500 after:rounded-full">
                ច្បាប់
              </h3>
              <ul className="space-y-3.5 text-[15px]">
                {[
                  { to: "/privacy", label: "គោលការណ៍ឯកជនភាព" },
                  { to: "/terms", label: "លក្ខខណ្ឌប្រើប្រាស់" },
                  { to: "/cookies", label: "គោលការណ៍ខូគី" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link 
                      to={to} 
                      className="inline-block transition-all duration-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 - Social + Newsletter with improved design */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-lg font-semibold text-gray-900 dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-indigo-500 after:rounded-full">
              តាមដានយើង
            </h3>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              ទទួលព័ត៌មានថ្មីៗ និងសកម្មភាពពីយើង
            </p>

            {/* Social Icons with react-icons */}
            <div className="flex gap-4 mb-10">
              {[
                { icon: FiFacebook, color: "hover:bg-[#1877f2]", name: "Facebook", link: "#" },
                { icon: FiTwitter, color: "hover:bg-[#1da1f2]", name: "Twitter", link: "#" },
                { icon: FiInstagram, color: "hover:bg-gradient-to-tr from-[#feda77] to-[#d62976]", name: "Instagram", link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className={`w-11 h-11 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg ${social.color}`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter with better interaction */}
            <div>
              <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                ជាវសារព័ត៌មាន
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="អ៊ីម៉ែលរបស់អ្នក"
                  required
                  className="w-full px-4 py-3 pr-32 text-sm transition-all duration-200 bg-white border border-gray-300 rounded-2xl dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute flex items-center gap-2 px-5 py-2 font-medium text-white transition-all bg-indigo-600 right-1 top-1 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <FiSend className="w-4 h-4" />
                  <span>ជាវ</span>
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-xs text-green-600 dark:text-green-400 animate-pulse">
                  សូមអរគុណ! អ្នកបានជាវដោយជោគជ័យ។
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar with better design */}
        <div className="pt-10 mt-16 text-xs text-center text-gray-500 border-t border-gray-200 dark:border-gray-800">
          <p className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <span>&copy; {currentYear} វិទ្យាល័យព្រះបាទនរោត្តមសីហមុនី</span>
            <span className="hidden sm:inline">•</span>
            <span>រក្សាសិទ្ធិគ្រប់យ៉ាង</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              បង្កើតដោយ <FiHeart className="inline w-3 h-3 text-red-500 animate-pulse" /> ក្រុមការងារបច្ចេកវិទ្យា
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;