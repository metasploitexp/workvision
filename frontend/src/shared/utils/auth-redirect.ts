import { get, set } from '@/shared/utils/local-storage';

const LOGIN_PATH = '/login';

const ACCESS_PATHS = ['/login', '/registration'];

export const authRedirect = (): void => {
    const token = get('access_token');
    
    if (!token && !ACCESS_PATHS.includes(window.location.pathname)) {
        set('access_token', '');
        set('refresh_token', '');
        window.location.replace(LOGIN_PATH);
    }
}