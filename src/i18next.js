import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Resources for translation supported languges it and en
const resources = {
  en: {
    translation: {
      title: 'Front End Developer',
      subtitle: 'If there is a limit, I want to reach it and then overcome it',
    },
  },
  it: {
    translation: {
      title: 'Sviluppatore Front End',
      subtitle: 'Se esiste un limite, voglio raggiungerlo per poi superarlo',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: resources,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
