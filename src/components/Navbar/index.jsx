import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar () {
  
    return (
      <nav className='navbar'>
        <Link to="/"><button  className='nav-link'>Home</button></Link>
        <Link to="/about" ><button className='nav-link'>L'agence</button></Link>
        <Link to="/works" ><button className='nav-link'>Projets</button></Link>
        
      </nav>
    );  
 
};
 
export default Navbar;
