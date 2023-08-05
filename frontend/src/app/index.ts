import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './index.vue';

export const app = createApp(App).use(router).use(store);