import React, { useContext } from 'react';
import WeatherContext from './WeatherContext';

const TemperatureDisplay = () => {
    const weatherData = useContext(WeatherContext);

    if (!weatherData || !weatherData.properties || !weatherData.properties.periods) {
        return <p>Failed to fetch data</p>;
    }

    const isToday = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        return date.setHours(0,0,0,0) === today.setHours(0,0,0,0);
    };

    // locates the current temps and forecasts
    const todayDaytime = weatherData.properties.periods.find(period => isToday(period.startTime) && period.isDaytime);
    const todayNighttime = weatherData.properties.periods.find(period => isToday(period.startTime) && !period.isDaytime);

    // gets rid of excess details and leaves the date name 
    const otherPeriods = weatherData.properties.periods.filter(period => !isToday(period.startTime));
    
    const temperatures = otherPeriods
        .filter(period => period.isDaytime) 
        .map(period => {
            const nightPeriod = weatherData.properties.periods.find(
                night => night.name === period.name + " Night"
            );

            return {
                dayName: period.name,
                dayTemp: period.temperature,
                nightTemp: nightPeriod ? nightPeriod.temperature : '?'
            };
        });

    return (
        <div>
            <h2>Temperature Forecast</h2>
            {todayDaytime && (
                <div>
                    <p>Today: {todayDaytime.temperature} / {todayNighttime ? todayNighttime.temperature : '?'} F</p>
                </div>
            )}
            {temperatures.map((temp, index) => (
                <div key={index}>
                    <p>{temp.dayName}: {temp.dayTemp} / {temp.nightTemp} F</p>
                </div>
            ))}
        </div>
    );
};

export default TemperatureDisplay;
