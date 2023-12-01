
import axios from 'axios';

import React, {useState, useEffect} from 'react';

const Weather = axios.create({
    baseURL: 'https://forecast.weather.gov/MapClick.php?lat=40.1022&lon=-85.6783' 
    
});

export default Weather;