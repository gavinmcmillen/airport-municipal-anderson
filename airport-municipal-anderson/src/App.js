import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (<Fragment>
    <header>
      <NavBar/>
    </header>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Anderson Municipal Airport 
        </p>
        
      </header>
    </div>
    </Fragment>
  );
}

export default App;
