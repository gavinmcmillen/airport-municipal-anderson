import React, { useContext } from 'react';
import WeatherContext from '../WeatherDisplay/WeatherContext';

const NavBarWeather = () => {
    const weatherData = useContext(WeatherContext);

    if (!weatherData || !weatherData.currentTempData) {
        return <p style={{ color: 'white' }}>No Data</p>;
    }

    const currentTemperature = weatherData.currentTempData; 

    return (
        <div style={{ color: 'white' }}>
            <p>Current Temp: {currentTemperature ? `${currentTemperature} F` : 'N/A'}</p>
        </div>
    );
};

export default NavBarWeather;