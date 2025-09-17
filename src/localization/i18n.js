import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './en.json';
import es from './es.json';
import tr from './tr.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  tr: { translation: tr },
};

const DEFAULT_LANGUAGE = 'en';

// Initialize synchronously with default
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

// Later, load saved language
AsyncStorage.getItem('appLanguage').then((lang) => {
  if (lang) {
    i18n.changeLanguage(lang);
  }
});

export default i18n;
