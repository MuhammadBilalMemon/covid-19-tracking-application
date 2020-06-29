import http from './httpService'
import { apiUrl } from '../config.json'

export const fetchCounterData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await http.get(apiUrl);

        const modifiedData = { confirmed, recovered, deaths, lastUpdate };

        return modifiedData;


    } catch (ex) {
        console.log(ex)
    }
};