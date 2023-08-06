import {CreateParams} from '@/shared/utils/create-params';
import axios from 'axios';

export const query = async (path: string, params: object = {}, method: string = 'GET'): Promise<any> => {
    try {
        let url: string = process.env.VUE_APP_BASE_URL + path;

        if (method === 'GET') {
            url += '?' + CreateParams(params);
            const response = await axios.get(url);
            return response;
        } else if (method === 'POST') {

        }
    } catch (error) {
        console.log(error);
        return error;
    }
}