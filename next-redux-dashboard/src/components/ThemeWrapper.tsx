'use client';

import { useSettings } from '@/hooks/useSettings';
import { useEffect } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, isMounted } = useSettings();

  useEffect(() => {
    if (!isMounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isMounted]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {children}
    </div>
  );
}
