import { createI18n } from 'vue-i18n';

// Import your JSON files
import enLocale from './locales/en.json';
import frLocale from './locales/fr.json';
import arLocale from './locales/ar.json';

const messages = {
  en: enLocale,
  fr: frLocale,
  ar: arLocale
};

const i18n = createI18n({
  locale: 'en', // Set the default locale
  messages
});

export default i18n;
