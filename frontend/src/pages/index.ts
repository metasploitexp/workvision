import App from './index.vue';

import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';

export const routes = [
    {path: '/', name: 'home', component: () => import('./HomePage')},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/registration', name: 'register', component: RegisterPage},
    {path: '/workspaces', name: 'workspaces', component: () => import('./WorkspacePage')},
    {path: '/boards', name: 'boards', component: () => import('./BoardsPage')},
];

export {App}