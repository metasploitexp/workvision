import { query } from '@/shared/api';

export const NAMESPACE: string = 'user';

const IS_NAMESPACED: boolean = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        user: {
            id: null,
            name: '',
            email: '',
            boards: [],
            workspaces: [],
        },
        isLogin: true,
        fetchEndpoint: {
            path: 'users/data',
            method: 'GET',
        }
    },
    getters: {
        user: (state: any) => state.user,
        isLogin: (state: any) => state.isLogin,
        fetchEndpoint: (state: any) => state.fetchEndpoint,
        getId: (state: any) => state.user.id,
        getWorkspaces: (state: any) => state.user.workspaces,
        getBoards: (state: any) => state.user.boards,
        getName: (state: any) => state.user.name,
    },
    mutations: {
        setUser: (state: any, value: any) => state.user = {...state.user, ...value},
        setIsLogin: (state: any, value: any) => state.isLogin = value,
        addWorkspaces: (state: any, value: any) => state.user.workspaces.push(value),
        addBoards: (state: any, value: any) => state.user.boards.push(value),
    },
    actions: {
        async fetchInit({getters, commit}: any) {
            const endpoint = getters.fetchEndpoint;
            const response = await query(endpoint.path);
            
            if (response?.status === 200) {
                commit('setIsLogin', true);
                commit('setUser', response.data)
            } else {
                commit('setIsLogin', false);
            }
        }
    }
}