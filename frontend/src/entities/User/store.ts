export const NAMESPACE: string = 'User';

const IS_NAMESPACED: boolean = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        user: {
            id: null,
            name: '',
            lastname: '',
            email: '',
            boards: [],
            workspaces: [],
        },
        isLogin: false,
    },
    getters: {
        user: (state: any) => state.user,
        isLogin: (state: any) => state.isLogin,
    },
    mutations: {
        setUser: (state: any, value: any) => state.user = value,
        setIsLogin: (state: any, value: any) => state.isLogin = value,
    }
}