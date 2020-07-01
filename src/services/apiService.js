import http from './httpService'
import { apiUrl } from '../config.json'

export const fetchCounterData = async (country) => {
    let optionalUrl = apiUrl;

    if (country) {
        optionalUrl = `${apiUrl}/countries/${country}`
    }
    try {
        const { data } = await http.get(optionalUrl);
        return data;
    } catch (ex) {
        console.log(ex)
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await http.get(`${apiUrl}/daily`);

        return data;

    } catch (ex) {
        console.log(ex);
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await http.get(`${apiUrl}/countries`)
        // : { countries } 
        // console.log("IN FETCH COUNTRIES FUNCTION OF API", countries);
        // countries.map((country) => country.name)
        return data;
    }
    catch (ex) {
        console.log(ex);
    }
}