import { query } from '@/shared/api';
import { validateForm } from '@/shared/utils/validate-form';
import { set } from '@/shared/utils/local-storage'

export const NAMESPACE: string = 'register';

const IS_NAMESPACED: boolean = true;

export const module = {
    namespaced: IS_NAMESPACED,
    state: {
        form: {
            email: '',
            name: '',
            password: '',
            repeat: '',
        },
        registerEndpoint: {
            path: 'auth/registration',
            method: 'POST',
        },
        errors: {
            success: true,
            fields: [],
        }
    },
    getters: {
        form: (state: any) => state.form,
        registerEndpoint: (state: any) => state.registerEndpoint,
        errors: (state: any) => state.errors,
    },
    mutations: {
        setForm: (state: any, value: object) => state.form = value,
        setFormParam: (state: any, obj: any) => state.form[obj.property] = obj.value,
        setErrors: (state: any, value: object) => state.errors = value,
    },
    actions: {
        async registration({state, getters, commit, dispatch}: any): Promise<void> {
            try {
                let form = getters.form;
                
                if (form.password !== form.repeat) {
                    return;
                }
                const registerEndpoint = getters.registerEndpoint;
        
                const newForm = {
                    email: form.email,
                    name: form.name,
                    password: form.password,
                }

                const errors: any = validateForm(newForm);
                commit('setErrors', errors);

                if (!errors.success) {
                    return;
                }

                const response = await query(registerEndpoint.path, newForm, registerEndpoint.method);

                if (response.data.success) {
                    dispatch('saveAccess', response.data);
                    window.location.href = '/';
                }
                console.log(response);
                return;
            } catch (error) {
                console.log(error);
                return;
            }
        },
        saveAccess({}, data: any): void {
            try {
                set('access_token', data.accessToken);
                set('refresh_token', data.refreshToken);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
