import { get, set } from '@/shared/utils/local-storage';

const LOGIN_PATH = '/login';

const ACCESS_PATHS = ['/login', '/registration'];

export const authRedirect = (): any => {
    const token = get('access_token');
    
    if (!token) {
        if (!ACCESS_PATHS.includes(window.location.pathname)) {
            set('access_token', '');
            set('refresh_token', '');
            window.location.replace(LOGIN_PATH);
            return {
                success: false,
            };
        }
        return {
            success: false,
        };
    }
    return {
        success: true,
        token,
    };
}