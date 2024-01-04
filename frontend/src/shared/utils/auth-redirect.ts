import { get, set } from '@/shared/utils/local-storage';
import router from '@/app/router';

const LOGIN_PATH = '/login';

const ACCESS_PATHS = ['/login', '/registration'];

export const authRedirect = (): any => {
    const token = get('access_token') || null;
    
    if (!token) {
        if (!ACCESS_PATHS.includes(window.location.pathname)) {
            router.replace(LOGIN_PATH);
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