import { query } from '@/shared/api';

export const NAMESPACE: string = 'workspace';

const IS_NAMESPACED: boolean = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        workspaces: [],
        endpoint: {
            path: 'workspace',
            method: 'GET',
        }
    },
    getters: {
        workspaces: (state: any) => state.workspaces,
        endpoint: (state: any) => state.endpoint,
    },
    mutations: {
        setWorkspaces: (state: any, value: any) => state.workspaces = value,
    },
    actions: {
        async fetchWorkspaces({getters, commit}: any) {
            try {
                const endpoint = getters.endpoint;
                const response = await query(endpoint.path);
                
                if (response?.status === 200) {
                    commit('setWorkspaces', response.data);
                }
            } catch (error) {
                console.log(error)
                return error;
            }
        }
    }
}