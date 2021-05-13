import React, {useContext} from 'react';
import Theworks from 'components/Theworks'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Nav2 from 'components/Nav2';

import {ThemeContext} from '../../Context/ThemeContext';
import './content.css'


const Works = () => {
  
    const {theme} = useContext(ThemeContext);

      return (
        <div className={theme ? 'minHeight content light' : 'minHeight content dark'}>
          <Router>
            <Nav2 />
            <main>
              <Switch>
                <Route path="/works/:workSlug">
                  <Theworks />
                </Route>
              </Switch>
            </main>
          </Router> 
        </div>

    )}
        
export default Works;



 