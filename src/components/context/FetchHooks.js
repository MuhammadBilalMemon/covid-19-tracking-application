import { useState, useEffect } from 'react';
import http from '../../services/httpService'
import { apiUrl, apiGeneralData, apiGlobalHistory } from '../../config.json'

export const FetchAPI = () => {
    const [url, setUrl] = useState("");
    const [globalData, setGlobalData] = useState({})
    const [countryData, setCountryData] = useState({});
    const [globalHistoryData, setGlobalHistoryData] = useState([]);

    useEffect(() => {
        if (url === "") {
            http
                .get(`${apiGeneralData}/all`)
                .then((response) => response.data)
                .then((data) => setGlobalData(data))
                .catch((err) => console.log(err));
        }
        else {
            http
                .get(`${apiGeneralData}/countries/${url}`)
                .then((response) => response.data)
                .then((data) => setGlobalData(data))
                .catch((err) => console.log(err));
        }
    }, [url, setUrl]);

    useEffect(() => {
        if (url === "") {
            http.get(`${apiGlobalHistory}/all?lastdays=160`)
                .then((response) => response.data)
                .then((data) => setGlobalHistoryData(data))
                .catch((err) => console.log(err));

        } else {
            http.get(`${apiGlobalHistory}/${url}?lastdays=160`)
                .then((response) => response.data)
                .then((data) => setGlobalHistoryData(data))
                .catch((err) => console.log(err));
        }
    }, [url, setUrl]);

    useEffect(() => {
        http.get(apiUrl)
            .then((response) => response.data)
            .then((data) => setCountryData(data))
            .catch((err) => console.log(err));
    }, [])

    return { setUrl, globalData, globalHistoryData, countryData };
}

