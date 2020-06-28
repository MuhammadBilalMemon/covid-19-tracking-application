import http from './httpService'
import { apiUrl } from '../config.json'

export const fetchCounterData = async () => {
    try {
        const response = await http.get(apiUrl);

        return response;
    } catch (ex) {
        console.log(ex)
    }
};