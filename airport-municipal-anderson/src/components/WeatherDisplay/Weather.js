//this pulls the entire NWS API 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherContext from './WeatherContext';


const Weather = ({ children }) => {      
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

    if (loading) return <p>Loading...</p>;

    return (
        <WeatherContext.Provider value={weatherData}>
            {children}
        </WeatherContext.Provider>
    );
};

export default Weather;
