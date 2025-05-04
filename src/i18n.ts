import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import { locales } from './constants/locales';

void i18n.use(initReactI18next).init({
  resources: {
    [locales.english]: {
      translation: en,
    },
  },
  lng: locales.swedish,
  fallbackLng: locales.english,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
