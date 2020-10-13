import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from "./fr"


i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fr,
    },
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;