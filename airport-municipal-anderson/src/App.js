import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import 'bulma/css/bulma.css';
import Weather from './components/WeatherDisplay/Weather';
import TemperatureDisplay from './components/WeatherDisplay/TemperatureDisplay';


function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header> 
      <Weather>
        <TemperatureDisplay />    
      </Weather>     
    </Fragment>
  );
}

export default App;