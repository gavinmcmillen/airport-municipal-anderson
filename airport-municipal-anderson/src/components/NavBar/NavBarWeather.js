import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NavBarWeather = () => {
  const [currentTemperature, setCurrentTemperature] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.weather.gov/points/40.23,-85.39`);
        const weatherDataUrl = response.data.properties.forecast;

        const weatherResponse = await axios.get(weatherDataUrl);
        const weatherData = weatherResponse.data;

        const currentTemp = weatherData.properties.periods[0].temperature;

        setCurrentTemperature(currentTemp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {currentTemperature !== null ? (
        <div>
          {/* <h1 style={{color: 'white'}}>Outside</h1>  not really neccessary*/}
          <p style={{color: 'white'}}>{currentTemperature}°F</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default NavBarWeather;
