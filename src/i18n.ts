import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import sv from "./locales/sv.json";
import en from "./locales/en.json";

i18next.use(initReactI18next).init({
  lng: navigator.language.startsWith("en") ? "en" : "sv",
  fallbackLng: "sv",
  resources: {
    sv: { translation: sv },
    en: { translation: en },
  },
  interpolation: { escapeValue: false },
});

export default i18next;
