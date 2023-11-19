import { query } from '@/shared/api';
import { validateForm } from '@/shared/utils/validate-form';

export const NAMESPACE: string = 'login';

const IS_NAMESPACED: boolean = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        form: {
            email: '',
            password: '',
        },
        loginEndpoint: {
            path: 'auth/authorization',
            method: 'POST',
        },
        errors: {
            success: true,
            fields: [],
        }
    },
    getters: {
        form: (state: any) => state.form,
        loginEndpoint: (state: any) => state.loginEndpoint,
        errors: (state: any) => state.errors,
    },
    mutations: {
        setForm: (state: any, form: object) => state.form = form,
        setFormParam: (state: any, obj: any) => state.form[obj.property] = obj.value,
        setErrors: (state: any, errors: object) => state.errors = errors,
    },
    actions: {
        async authorization({state, getters, commit}: any): Promise<void> {
            try {
                const form = getters.form;
                const loginEndpoint: any = getters.loginEndpoint;
                const errors: any = validateForm(form, 'login');

                commit('setErrors', errors);
                if (!errors.success) {
                    return;
                }
                const response = await query(loginEndpoint.path, form, loginEndpoint.method);
                console.log(response);
                return;

            } catch (error) {
                console.log(error);
                return;
            }
        }
    }
}