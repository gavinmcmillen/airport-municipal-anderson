import React, { useContext } from 'react';
import WeatherContext from './WeatherContext';

const TemperatureDisplay = () => {
    const weatherData = useContext(WeatherContext);

    if (!weatherData || !weatherData.properties || !weatherData.properties.periods) {
        return <p>No temperature data available.</p>;
    }

    const temperatures = weatherData.properties.periods.map((period, index) => {
        return (
            <div key={index}>
                <h3>{period.name}</h3>
                <p>Temperature: {period.temperature} {period.temperatureUnit}</p>             
            </div>
        );
    });

    return (
        <div>
            <h2>Temperature Forecast</h2>
            {temperatures}
        </div>
    );
};

export default TemperatureDisplay;
