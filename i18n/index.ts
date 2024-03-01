import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enUsTranslation from './locales/en-us';
import ptBrTranslations from './locales/pt-br';

// const options = {
//   order: ['querystring', 'navigator'],
//   lookupQuerystring: 'lng',
// };

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'pt',
    // detection: options,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ...enUsTranslation,
        },
      },
      pt: {
        translation: {
          ...ptBrTranslations,
        },
      },
    },
  });

export default i18n;
