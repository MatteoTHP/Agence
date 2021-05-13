import React from 'react';
import ReactDOM from 'react-dom';
import 'style.css';


import ThemeContextProvider from 'Context/ThemeContext'
import BtnToggle from 'components/BtnToggle/BtnToggle'

import About from 'pages/About';
import Home from 'pages/Home';
import Works from 'pages/Works';
import Navbar from './components/Navbar';
import Foot from './components/Foot'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


const App = () =>  {
  
  return (
  <div className="body"> 
    <title>Agence</title>
    <ThemeContextProvider>
      <BtnToggle /> 
      
      <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          
        </Switch>
        <Foot />
      </main>
      
    </Router>
    
    </ThemeContextProvider>


  </div>

  
);
};

ReactDOM.render(<App />, document.getElementById('root'));
