import i18n from 'i18next';
import { I18nManager } from 'react-native';
import { initReactI18next } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { getLocales } from 'react-native-localize';
import { getValueFromAsyncStorage } from '../utils/asyncStorage';
import en from './en.json';
import nl from './nl.json';

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: async (callback) => {
        const userLanguage = await getValueFromAsyncStorage('selected_language');
        const deviceLanguage = getLocales()[0].languageCode;
        const languageToSet = userLanguage || deviceLanguage;
        const isLangRTL = languageToSet === 'ar';
        if (I18nManager.isRTL !== isLangRTL) {
            I18nManager.allowRTL(isLangRTL);
            I18nManager.forceRTL(isLangRTL);
            RNRestart.Restart();
        }
        callback(languageToSet);
    },
    cacheUserLanguage: () => { },
};

i18n
    // pass the i18n instance to react-i18next: makes i18n available in react components
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: process.env.NODE_ENV === 'production' ? false : true,
        compatibilityJSON: 'v3',
        interpolation: { escapeValue: false }, // not needed for react as it escapes by default
        react: { useSuspense: false },
        fallbackLng: 'en',
        resources: {
            en: { translation: en },
            nl: { translation: nl }
        }
    });

export default i18n;