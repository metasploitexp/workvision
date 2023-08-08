import {CreateParams} from '@/shared/utils/create-params';
import axios from 'axios';

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
    } catch (error) {
        console.log(error);
        return error;
    }
}