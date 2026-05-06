'use client';

import Link from 'next/link';
import { useSettings } from '@/hooks/useSettings';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, language, toggleTheme, changeLanguage } = useSettings();

  const t = {
    ko: { home: '홈', about: '어바웃', theme: '테마', lang: '언어' },
    en: { home: 'Home', about: 'About', theme: 'Theme', lang: 'Lang' },
  }[language];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-500">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 items-center"
        >
          <Link href="/" className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
            DASHBOARD
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-500 transition-colors">{t.home}</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-500 transition-colors">{t.about}</Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4 items-center"
        >
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-500/50 transition-all active:scale-95"
            title={t.theme}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <div className="relative group">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value as any)}
              className="appearance-none pl-4 pr-10 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium focus:ring-2 ring-blue-500/50 outline-none transition-all cursor-pointer"
            >
              <option value="ko">KR</option>
              <option value="en">EN</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
              ▼
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
