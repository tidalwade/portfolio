import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import NavList from './NavList'
const { v4: uuidv4 } = require('uuid');

function NavBar(){

      const [active, setActive] = useState(5)
      const [isOpen, setOpen] = useState(false);

      const navList = [
        {
            content: 'Home',
            linkUrl: 'banner',
        },
        {
            content: 'About',
            linkUrl: 'summary',
        },
        {
            content: 'Projects',
            linkUrl: 'portfolio',
        },
        {
            content: 'Contact',
            linkUrl: 'clients',
        }
      ]

    function handleNavigation(index){
      setActive(index)
      setOpen(false);
    }

    function handleMobileNavToggle() {
      setOpen(!isOpen);
    };

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
  <a className="navbar-brand" href="#">Ryan Wade</a>
  <button onClick={handleMobileNavToggle} className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>
    <ul className={`navbar-collapse offcanvas-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">

    <button onClick={handleMobileNavToggle} className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
    <ul className="navbar-nav ml-auto mr-0 no-callout">
      {navList.map((navLists, index) => {
        return (
            <NavList {...navLists} key={uuidv4()} index={index} active={active} handleNavigation={handleNavigation}/>
        )
      })}
      </ul>
    </ul>
  </div>
</nav>
  )
}
export default NavBar;