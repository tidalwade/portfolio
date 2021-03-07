import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import NavList from './NavList'

function NavBar(){

      const [active, setActive] = useState(5)

      const navList = [
        {
            content: 'Home',
            linkUrl: '/',
        },
        {
            content: 'About',
            linkUrl: '/about'
        },
        {
            content: 'Projects',
            linkUrl: '/projects',
        },
        {
            content: 'Contact',
            linkUrl: '/content',
        }
      ]

    function handleOnClick(index){
      setActive(index)
      console.log(index)
    }

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {navList.map((navLists, index) => {
        return (
            <NavList {...navLists} index={index} active={active} handleOnClick={handleOnClick}/>
        )
      })}
    </ul>
  </div>
</nav>
  )
}
export default NavBar;