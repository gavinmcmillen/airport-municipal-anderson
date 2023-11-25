import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import HeroCarousel from './components/Carousel/HeroCarousel';
import ImageImports from './components/Carousel/ImageImports';

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>      
      <HeroCarousel images={ImageImports} />
    </Fragment>
  );
}

export default App;