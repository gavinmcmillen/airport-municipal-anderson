
import axios from 'axios';

import React, {useState, useEffect} from 'react';

const Weather = () => {      
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        axios.get('https://api.weather.gov/points/40.1053,-85.6803')
        .then(response => {
            const forecastUrl =response.data.properties.forecast;
            return axios.get(forecastUrl);
        })
        .then ((forecastRepsonse) => {
            setWeatherData(forecastRepsonse.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log("failure to fetch weather forecast", err)
            setLoading(false)
        })
    }, []);

    if (loading) return <p>Loading...</p>;

    return <div>
        {weatherData && <pre>{JSON.stringify(weatherData, null, 2)}</pre>}
    </div>
};

export default Weather;

//baseURL: 'https://api.weather.gov/points/40.1053,-85.6803' will need later 