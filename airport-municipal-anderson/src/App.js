import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import Carousel from './components/Carousel/Carousel';
import ImageImports from './components/Carousel/image-import';
import 'bulma/css/bulma.css';
import ImageCarousel from './components/Carousel/ImageCarousel';

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>      
      <ImageCarousel images={ImageImports} interval={3000} />
    </Fragment>
  );
}

export default App;