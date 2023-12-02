import axios from 'axios';

export const axiosHeaders = (value: string, header: string = 'Authorization'): void => {
    axios.defaults.headers.common[header] = value;
}