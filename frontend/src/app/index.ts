import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './index.vue';
import {i18n} from './i18n';

export const app = createApp(App).use(router).use(store).use(i18n);