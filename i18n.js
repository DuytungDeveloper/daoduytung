import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: false,
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {

            vi: {
                translation: {
                    description: {
                        part1: 'Nhìn cc',
                        part2: 'Lerne React'
                    }
                }
            },
            en: {
                translation: {
                    description: {
                        part1: 'Look CC',
                        part2: 'Learn React'
                    }
                }
            },

        }
    });

export default i18n;