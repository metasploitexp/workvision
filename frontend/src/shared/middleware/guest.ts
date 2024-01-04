import { get } from '@/shared/utils/local-storage';

export default function Guest({store, next}: any) {
    const isLogin = store.getters['user/isLogin'] && get('access_token');
    if (isLogin) {
        return next({ name: 'home' });
    }
   
    return next();
}