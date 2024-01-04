import { get } from '@/shared/utils/local-storage';

export default function Auth({store, next}: any) {
    const isLogin = store.getters['user/isLogin'] && get('access_token');
    if (!isLogin) {
        return next({ name: 'login' });
    }
   
    return next();
}