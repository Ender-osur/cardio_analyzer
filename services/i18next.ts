import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "../locales/en.json";
import es from "../locales/es.json";

const resources = {
  "es-ES": { translation: es },
  "en-US": { translation: en },
};

const initI18n = async () => {
  const getLanguage = () => {
    const locale = Localization.locale.split("-")[0];
    if (locale === "es") return "es-ES";
    if (locale === "en") return "en-US";
    return "es-ES";
  };

  i18next.use(initReactI18next).init({
    resources,  
    lng: getLanguage(),  
    fallbackLng: "es-ES",
    interpolation: {
      escapeValue: false,
    },
  });
  
};

initI18n();

export default i18next;
