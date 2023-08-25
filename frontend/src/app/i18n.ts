import { createI18n } from 'vue-i18n';

const en = require('@/shared/locales/en.json');
const ru = require('@/shared/locales/ru.json');

export const i18n = createI18n<false>({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    'en': en.default,
    'ru': ru.default,
  },
})
