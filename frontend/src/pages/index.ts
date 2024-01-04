import App from './index.vue';

import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import { SettingsPage } from './SettingsPage';
import Auth from '@/shared/middleware/auth';
import Guest from '@/shared/middleware/guest';

export const routes = [
    {path: '/login', name: 'login', component: LoginPage, meta: { middleware: [Guest]}},
    {path: '/registration', name: 'register', component: RegisterPage, meta: { middleware: [Guest]}},
    {path: '/', name: 'home', component: () => import('./HomePage'), meta: { middleware: [Auth]}},
    {path: '/logout', name: 'logout', component: LogoutPage, meta: { middleware: [Auth]}},
    {path: '/settings', name: 'settings', component: SettingsPage, meta: { middleware: [Auth]}},
    {path: '/workspaces', name: 'workspaces', component: () => import('./WorkspacePage'), meta: { middleware: [Auth]}},
    {path: '/boards', name: 'boards', component: () => import('./BoardsPage'), meta: { middleware: [Auth]}},
];

export {App}