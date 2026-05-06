export type Theme = 'light' | 'dark';
export type Language = 'ko' | 'en';

export interface SettingsState {
  theme: Theme;
  language: Language;
}
