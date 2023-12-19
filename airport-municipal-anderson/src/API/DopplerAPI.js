//this pulls the entire NWS API 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DopplerContext from './DopplerContext';


const DopplerAPI = ({ children }) => {      
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        axios.get('https://api.weather.gov/points/40.1053,-85.6803')
            .then(response => {
                const forecastUrl = response.data.properties.forecast;
                return axios.get(forecastUrl);
            })
            .then(forecastResponse => {
                setWeatherData(forecastResponse.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failure to fetch weather forecast", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading Data...</div>;

    return (
        <DopplerContext.Provider value={weatherData}>
            {children}
        </DopplerContext.Provider>
    );
};

export default DopplerAPI;
