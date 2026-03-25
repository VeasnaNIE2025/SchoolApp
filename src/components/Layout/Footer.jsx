// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 font-khmer">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">

        {/* ══ ៣ ជួរ ══ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* ── ជួរ ១: Brand ── */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent leading-snug">
                វិចប.ព្រះបាទនរោត្តមសីហមុនី
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              ផ្តល់ជូននូវចំណេះដឹង និងស្នាដៃសិស្សានុសិស្សជូនសហគមន៍អប់រំកម្ពុជា។
              បច្ចេកវិទ្យាទំនើប • មាតិកាគុណភាព • បទពិសោធន៍ល្អបំផុត។
            </p>

            {/* Contact */}
            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-500">
              <a href="mailto:manveasna1994@gmial.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400">📧</span> imanveasna1994@gmail.com
              </a>
              <a href="tel:+855967932240" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-indigo-400">📞</span> 097 793 2240
              </a>
              <span className="flex items-center gap-2">
                <span className="text-indigo-400">📍</span> ស្រុកកំពង់ត្រឡាច, ខេត្តកំពង់ឆ្នាំង  </span>
            </div>
          </div>

          {/* ── ជួរ ២: អំពីយើង + ច្បាប់ ── */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">អំពីយើង</h3>
              <ul className="space-y-3">
                {[
                  { to: "/about",    label: "អំពីវេទិកា" },
                  { to: "/contact",  label: "ទំនាក់ទំនង" },
                  { to: "/faq",      label: "សំណួរញឹកញាប់" },
                  { to: "/feedback", label: "ផ្តល់យោបល់" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">ច្បាប់</h3>
              <ul className="space-y-3">
                {[
                  { to: "/privacy", label: "គោលការណ៍ឯកជនភាព" },
                  { to: "/terms",   label: "លក្ខខណ្ឌប្រើប្រាស់" },
                  { to: "/cookies", label: "គោលការណ៍ខូគី" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── ជួរ ៣: តាមដានយើង ── */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">តាមដានយើង</h3>
            <p className="text-sm text-gray-500 mb-5">
              ចូលរួមជាមួយយើងសម្រាប់ព័ត៌មាន និងស្នាដៃថ្មីៗ
            </p>
            <div className="flex gap-3">

              {/* Facebook */}
              <a href="https://facebook.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>

              {/* Telegram */}
              <a href="https://t.me/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.168.168 0 00-.07-.2c-.08-.06-.19-.04-.27-.02-.12.02-2.01 1.28-2.84 1.81-.27.18-.51.27-.73.27-.24 0-.7-.14-1.04-.25-.44-.15-.95-.33-1.37-.34-.42-.01-.79.13-1.08.4-.36.35-.53.87-.41 1.39.12.52.48.97.92 1.21.44.24.96.36 1.49.35.45-.01.93-.15 1.44-.42.99-.53 1.94-1.09 2.83-1.69.89-.6 1.7-1.24 2.38-1.96.33-.35.56-.75.64-1.19.08-.44-.04-.85-.35-1.15z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* ══ Copyright ══ */}
        <div className="mt-12 pt-8 border-t border-gray-800/60 text-center">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} វិទ្យាល័យចំណេះទូទៅ និងបច្ចេកទេស ព្រះបាទសម្ដេចព្រះបរមនាថ នរោត្តមសីហមុនី។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;