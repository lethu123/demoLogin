// src/i18n.js
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

const defaultLanguage = JSON.parse(localStorage.getItem('token'));
let language = 'en';
if (defaultLanguage) {
    switch (defaultLanguage['country_code']) {
        case 'VN': {
            language = 'vi';
            break;
        }
        default:
            language = 'en';
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: language,
        fallbackLng: "en",
        // debug: true,
        backend: {
            /* translation file path */
            loadPath: '/locales/{{lng}}/translation.json'
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;