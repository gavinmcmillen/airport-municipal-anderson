import {useEffect} from 'react';
import axios from 'axios';


const ZipCodeWeather = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {    
            const response = await axios.get(`https://api.weather.gov/points/40.23,-85.39`);
            const weatherDataUrl = response.data.properties.forecast;
    
            const weatherResponse = await axios.get(weatherDataUrl);
            const weatherData = weatherResponse.data;
    
            console.log(weatherData);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      return (
        <div>
          {/* Display weather information here */}
        </div>
      );
    };

export default ZipCodeWeather; 

//zip code 47308
//geo cords Lat: 40.23° N Lon: 85.39° W 