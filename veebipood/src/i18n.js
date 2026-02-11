import i18n, { loadLanguages } from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "menu": {
          "giftcards": "Giftcards",
          "cart": "Cart",
          "settings": "Settings",
          "calculator": "Calculator",
          "arrays": "Arrays",
          "manage": "Manage",
          "add": "Add",
          "api": "API",
          "about": "About",
          "map": "Map",
          "darktheme": "Dark",
          "lighttheme": "Light"
      }
      
    }
  },
  et: {
    translation: {
      "menu": {
          "giftcards": "Kinkekaardid",
          "add": "Lisa",
          "cart": "Ostukorv",
          "settings": "Seaded",
          "calculator": "Kalkulaator",
          "arrays": "Arrays",
          "manage": "Halda",
          "api": "API",
          "about": "Meist",
          "map": "Kaardirakendus",
          "darktheme": "Öö",
          "lighttheme": "Päev"
        }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getInitialLanguage(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  function getInitialLanguage() {
    const languageLS = localStorage.getItem("language")
    if (languageLS === null || Object.keys(resources).includes(languageLS) === false) {
      localStorage.setItem("language", "en");
      return "et";
    }
    return languageLS;
  }

  export default i18n;