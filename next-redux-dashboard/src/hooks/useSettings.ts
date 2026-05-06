'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { toggleTheme, setLanguage, setTheme } from '@/store/settingsSlice';
import { Theme, Language } from '@/types/settings';

export const useSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme, language } = useSelector((state: RootState) => state.settings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration safe values
  const currentTheme: Theme = mounted ? theme : 'light';
  const currentLanguage: Language = mounted ? language : 'ko';

  return {
    theme: currentTheme,
    language: currentLanguage,
    isMounted: mounted,
    toggleTheme: () => dispatch(toggleTheme()),
    changeTheme: (newTheme: Theme) => dispatch(setTheme(newTheme)),
    changeLanguage: (newLang: Language) => dispatch(setLanguage(newLang)),
  };
};
