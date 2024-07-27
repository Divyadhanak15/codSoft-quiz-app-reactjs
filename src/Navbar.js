import React from 'react';
import Navbarcss from './Navbarcss.css';
import { Button, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      
      
          <Button
          className="button"
            activeClass="active"
            to="Quiz"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Click Here 
          </Button>
        
    </nav>
  );
}

export default Navbar;
