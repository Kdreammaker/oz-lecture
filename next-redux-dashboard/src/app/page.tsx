'use client';

import { useSettings } from '@/hooks/useSettings';
import { motion } from 'framer-motion';

export default function Home() {
  const { language } = useSettings();

  const t = {
    ko: {
      heroTitle: '스마트한 설정 관리',
      heroSubtitle: 'Redux Toolkit과 Next.js의 완벽한 조화',
      card1Title: '다크 모드',
      card1Desc: '눈이 편안한 다크 모드를 전역 상태로 관리합니다.',
      card2Title: '다국어 지원',
      card2Desc: '사용자의 언어 설정을 기억하고 즉시 반영합니다.',
      card3Title: '상태 유지',
      card3Desc: '새로고침을 해도 설정이 초기화되지 않습니다.',
    },
    en: {
      heroTitle: 'Smart Settings Management',
      heroSubtitle: 'Perfect harmony of Redux Toolkit and Next.js',
      card1Title: 'Dark Mode',
      card1Desc: 'Global state management for a comfortable dark mode.',
      card2Title: 'Multi-language',
      card2Desc: 'Remember and reflect user language settings instantly.',
      card3Title: 'Persistence',
      card3Desc: 'Settings are not reset even after page refresh.',
    },
  }[language];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-12 md:py-24 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          {t.heroTitle.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
          {t.heroSubtitle}
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { title: t.card1Title, desc: t.card1Desc, icon: '🌓', color: 'blue' },
          { title: t.card2Title, desc: t.card2Desc, icon: '🌐', color: 'purple' },
          { title: t.card3Title, desc: t.card3Desc, icon: '💾', color: 'indigo' },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-200/20 dark:shadow-none transition-all"
          >
            <div className="text-4xl mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
