
import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import TileSlide from './TileSlide'

function App() {

  const [tile, setTile] = useState(tiles)

  const renderTilesMobile = () => {
    return (
      <>
        <TileSlide tile={tile}/>
      </>
    )
  }

  return (
    <div className="App">
      <NavBar />
      <section className="section greeting-tiles-mobile is-hidden-tablet pt-5 py-0">
        <div className="container">
        {renderTilesMobile()}
        </div>
      </section>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

const tiles = [
  {
      content: 'Host a virtual birthday bash',
      linkText: 'Get Started',
      tileClass: 'greeting-tile-one'
  },
  {
      content: 'Dedicate a bar or bat mitzvah',
      linkText: 'Get Started',
      tileClass: 'greeting-tile-two'
  },
  {
      content: 'Raise funds with a Quinceañera',
      linkText: 'Get Started',
      tileClass: 'greeting-tile-three'
  },
  {
      content: 'Request donations in lieu of weeding or anniversary gifts',
      linkText: 'Get Started',
      tileClass: 'greeting-tile-four'
  },
  {
      content: 'Mark a health milestone',
      linkText: 'Get Started',
      tileClass: 'greeting-tile-five'
  }
]

export default App;
