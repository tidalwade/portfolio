import React, { useState, useRef } from 'react';
// import {Link} from 'react-router-dom';
import { Link } from 'react-scroll';
import NavList from './NavList'
const { v4: uuidv4 } = require('uuid');

function NavBar(){

      const [active, setActive] = useState(5)
      const [isOpen, setOpen] = useState(false);

      const navList = [
        {
            content: 'Contact',
            linkUrl: 'contact',
        },
        {
            content: 'Services',
            linkUrl: 'summary',
        },
        {
            content: 'Projects',
            linkUrl: 'portfolio',
        },
        {
            content: 'Clients',
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
  <nav className="navbar navbar-expand-lg">
    <div className="container">
    <Link className={`nav-link`} activeClass="active" to={'banner'} spy={false} offset={-50} smooth={true} duration={1200}>
    <div>Ryan Wade</div>
    </Link>
  <button onClick={handleMobileNavToggle} className="navbar-toggler navbar-light" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>
    <ul className={`navbar-collapse offcanvas-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">

    <button onClick={handleMobileNavToggle} className="navbar-toggler navbar-dark" type="button">&times;</button>
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