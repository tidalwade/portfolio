
import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar'
import './css/app.css'
const { v4: uuidv4 } = require('uuid');


function App() {

  return (
    <div className="App">
      <div className="main_container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
