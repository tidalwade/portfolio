import React from 'react'
import { Link } from 'react-scroll';
const { v4: uuidv4 } = require('uuid');


export default function NavList(props) {
  const {
      index,
      content,
      linkUrl,
      active,
      handleNavigation
    } = props

  return (
    <>
      <li className="nav-item" 
        className={active === index ? "active" : "unactive"}>
        <Link className={`nav-link`} activeClass="active" to={linkUrl} spy={false} smooth={true} duration={1000} 
          onClick={() => handleNavigation(index)}>
          {content}
        </Link>
      </li>
    </>
  )
}