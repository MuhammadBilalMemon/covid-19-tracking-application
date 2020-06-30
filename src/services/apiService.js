import http from './httpService'
import { apiUrl } from '../config.json'

export const fetchCounterData = async (country) => {

    let optionalUrl = apiUrl;

    if (country) {
        optionalUrl = `${apiUrl}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await http.get(optionalUrl);
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };

        return modifiedData;
    } catch (ex) {
        console.log(ex)
    }
};

export const fetchDailyData = async () => {
    try {
        const { data } = await http.get(`${apiUrl}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;

    } catch (ex) {
        console.log(ex);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await http.get(`${apiUrl}/countries`)

        return countries.map((country) => country.name)
    }
    catch (ex) {
        console.log(ex);
    }
}