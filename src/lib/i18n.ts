import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
};

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    // debug: true,
    lng: "de",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;