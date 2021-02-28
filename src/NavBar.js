import React from "react";
import {Link} from 'react-router-dom';

function NavBar () {
  return (
    <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/projects">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contact">Contact</a>
    </li>
    </ul>
  )
}

export default NavBar;