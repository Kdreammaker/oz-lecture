import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState, Theme, Language } from '@/types/settings';

const initialState: SettingsState = {
  theme: 'light',
  language: 'ko',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
