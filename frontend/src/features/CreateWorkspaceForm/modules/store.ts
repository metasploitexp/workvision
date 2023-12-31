import { query } from '@/shared/api';

export const NAMESPACE: string = 'create-workspace';

const IS_NAMESPACED: boolean = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        form: {
            name: '',
            owner_id: null,
        },
        endpoints: {
            path: 'workspace',
            method: "POST",
        }
    },
    getters: {
        form: (state: any) => state.form,
        endpoints: (state: any) => state.endpoints,
    },
    mutations: {
        setFormParam: (state: any, obj: any) => state.form[obj.property] = obj.value,
    },
    actions: {
        async create({rootGetters, getters, commit}: any) {
            try {
                const userId = rootGetters['user/getId'];
                commit('setFormParam', {property: 'owner_id', value: userId});
                const form = getters.form;
                const endpoints = getters.endpoints;

                const response = await query(endpoints.path, form, endpoints.method);
                
                if (response.status === 201) {
                    commit('user/addWorkspaces', response.data, {root: true});
                    return true;
                }
                return false;
            } catch (error) {
                console.log(error)
            }
        }
    }
}