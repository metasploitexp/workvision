import { query } from '@/shared/api';
import { validateForm } from '@/shared/utils/validate-form';

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
        async registration({state, getters, commit}: any): Promise<void> {
            try {
                let form = getters.form;
                const registerEndpoint = getters.registerEndpoint;
                
                if (form.password !== form.repeat) {
                    return;
                }
                delete form.repeat;

                const errors: any = validateForm(form);
                commit('setErrors', errors);

                if (!errors.success) {
                    return;
                }

                const response = await query(registerEndpoint.path, form, registerEndpoint.method);
                console.log(response);
                return;
            } catch (error) {
                console.log(error);
                return;
            }
        }
    }
}
