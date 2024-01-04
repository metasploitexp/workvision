import { CreateParams } from '@/shared/utils/create-params';
import { get, set, remove } from '@/shared/utils/local-storage';
import { axiosHeaders }  from '@/shared/utils/axios-headers';
import router from '@/app/router';
import axios from 'axios';

const REDIRECT_PATH: string = '/login';

export const query = async (path: string, params: object = {}, method: string = 'GET'): Promise<any> => {
    try {
        let url: string = process.env.VUE_APP_BASE_URL + path;

        let response: any = null;
        if (method === 'GET') {
            url += '?' + CreateParams(params);
            response = await axios.get(url);
            return response;
        } else if (method === 'POST') {
            response = await axios.post(url, params);
        }
        
        return response;
    } catch (error: any) {
        if (error?.response?.status === 401) {
            const needRedirect = await refreshQuery();
            if (needRedirect) {
                router.replace(REDIRECT_PATH);
                return;
            }
            return await query(path, params, method);
        }
        return error;
    }
}

const refreshQuery = async () => {
    try {
        const refresh = get('refresh_token');
        if (refresh) {
            const url: string = process.env.VUE_APP_BASE_URL + 'auth/refresh';
            axiosHeaders(refresh);
            const response: any = await axios.get(url);
            console.log(response);

            if (response?.status === 200) {
                set('refresh_token', 'Bearer ' + response.data?.refreshToken);
                set('access_token', 'Bearer ' + response.data?.accessToken);
                axiosHeaders('Bearer ' + response.data?.accessToken)
            } else {
                remove('access_token');
                remove('refresh_token');
                return true;
            }

            return false;
        } else {
            return true;
        }
    } catch (error) {
        remove('access_token');
        remove('refresh_token');
        return true;
    }
}