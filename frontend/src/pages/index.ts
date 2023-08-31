import App from './index.vue';

export const routes = [
    {path: '/', name: 'home', component: () => import('./HomePage')},
    {path: '/login', name: 'login', component: () => import('./LoginPage')},
    {path: '/register', name: 'register', component: () => import('./RegisterPage')},
    {path: '/workspaces', name: 'workspaces', component: () => import('./WorkspacePage')},
    {path: '/boards', name: 'boards', component: () => import('./BoardsPage')},
];

export {App}