import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bulma/css/bulma.css';



function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>        
    </Fragment>
  );
}

export default App;