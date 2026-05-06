'use client';

import { useSettings } from '@/hooks/useSettings';
import { motion } from 'framer-motion';

export default function About() {
  const { language } = useSettings();

  const t = {
    ko: {
      title: '프로젝트 정보',
      subtitle: '기술적 배경 및 구현 목적',
      content: '이 대시보드는 Next.js App Router 환경에서 Redux를 효율적으로 통합하는 방법을 보여줍니다. 특히 서버와 클라이언트 간의 상태 불일치를 해결하고, 사용자 경험을 위해 설정을 영구적으로 보존하는 데 집중했습니다.',
      tech: '사용된 주요 기술',
    },
    en: {
      title: 'About Project',
      subtitle: 'Technical Background & Purpose',
      content: 'This dashboard demonstrates efficient Redux integration within the Next.js App Router environment. We focused on resolving state mismatches between server and client while persisting settings for better UX.',
      tech: 'Core Technologies',
    },
  }[language];

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">{t.title}</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-bold">{t.subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl mb-16"
      >
        <div className="absolute top-0 left-10 -translate-y-1/2 w-20 h-2 bg-blue-600 rounded-full" />
        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
          {t.content}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Next.js 16', 'Redux Toolkit', 'Tailwind v4', 'Framer Motion'].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + (i * 0.1) }}
            className="py-4 px-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center font-bold shadow-sm"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
