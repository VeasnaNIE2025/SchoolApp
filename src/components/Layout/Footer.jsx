// components/Footer.tsx (ឬ .jsx)
import React from 'react';
import { Link } from 'react-router-dom'; // បើប្រើ React Router, បើ Next.js ប្តូរเป็น next/link

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        {/* ផ្នែកខាងលើ - Logo + Links */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Brand / Logo */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="text-2xl font-bold text-white">
              Your<span className="text-indigo-500">Brand</span>
            </Link>
            <p className="mt-3 text-sm leading-6">
              បង្កើតអ្វីដែលអស្ចារ្យជាមួយយើង។ បច្ចេកវិទ្យាទំនើប • រចនាស្អាត • បទពិសោធន៍ល្អបំផុត។
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3 lg:col-span-8">
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">ផលិតផល</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><Link to="/features" className="text-sm hover:text-white transition">មុខងារ</Link></li>
                <li><Link to="/pricing" className="text-sm hover:text-white transition">តម្លៃ</Link></li>
                <li><Link to="/docs" className="text-sm hover:text-white transition">ឯកសារ</Link></li>
                <li><Link to="/changelog" className="text-sm hover:text-white transition">កំណែប្រែ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">ក្រុមហ៊ុន</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><Link to="/about" className="text-sm hover:text-white transition">អំពីយើង</Link></li>
                <li><Link to="/blog" className="text-sm hover:text-white transition">ប្លុក</Link></li>
                <li><Link to="/careers" className="text-sm hover:text-white transition">ការងារ</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-white transition">ទំនាក់ទំនង</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">ច្បាប់</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li><Link to="/privacy" className="text-sm hover:text-white transition">គោលការណ៍ឯកជនភាព</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-white transition">លក្ខខណ្ឌប្រើប្រាស់</Link></li>
                <li><Link to="/cookies" className="text-sm hover:text-white transition">ខូគី</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* បន្ទាត់បែងចែក + Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm">
              &copy; {currentYear} YourBrand។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://x.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-white transition">
                𝕏
              </a>
              <a href="https://github.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
                GitHub
              </a>
              <a href="https://linkedin.com/company/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="https://facebook.com/yourbrand" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
                FB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;