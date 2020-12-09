import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './translations/en/translation.json'
import translationAR from './translations/ar/translation.json'
import moment from 'moment'
import 'moment/locale/ar-tn'

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ko', 'chi'];

const options = {
  // order and from where user language should be detected
  order: [ 'navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
}
const resources = {
	en: {
    translation: translationEN,
    
	},
	ar: {
		translation: translationAR,
	},
}
i18n.on('languageChanged', function(lng) {
  //alert(lng)
  lng==='ar' ? moment.locale('ar-tn') : moment.locale('en');
});

i18n
.use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

.use(LanguageDetector) // detect user language

.use(initReactI18next)

.init({
	resources,
  lng: 'en',
  detection:options,
	keySeparator: false,
	interpolation: {
		escapeValue: false, // react already safes from xss
  },
  react:{
    wait:true
  }
})

export default i18n;
