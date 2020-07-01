import React, { createContext } from 'react';
import { FetchAPI } from './FetchHooks';

export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const { setUrl, globalData, globalHistoryData, countryData } = FetchAPI();

    return (
        <DataContext.Provider value={{ setUrl, globalData, globalHistoryData, countryData }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataProvider;