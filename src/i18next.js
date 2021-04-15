import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Resources for translation supported languges it and en
const resources = {
  en: {
    translation: {
      title: 'Front End Developer',
      subtitle: 'Below are the projects I have worked on over the years divided by company. The most important are SMILE - Digital Platform and Consumer Finance, they were also the longest projects where I gained a lot of experience with the Angular framework.',
    },
  },
  it: {
    translation: {
      title: 'Sviluppatore Front End',
      subtitle: 'Di seguito i progetti a cui ho lavorato negli anni raggrupati per azienda. I più importanti sono SMILE - Piattaforma Digitale e Consumer Finance, i quali sono stati anche i progetti più lunghi dove ho acquisito molta esperienza con il framework Angular.',
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
