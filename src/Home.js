import React from 'react';
import TileSlide from './TileSlide'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);
// import logo from './banner_image.png';
const { v4: uuidv4 } = require('uuid');

function Home(){

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

  const renderTilesMobile = () => {
    return (
        <div>
            {tiles.map((tile) => {
                return (
                    <TileSlide {...tile} key={uuidv4()} />
                )
            })}
        </div>
    )
  }
  return(
    <div>
      <section className="pt-5 py-0" id="banner">
        <div className="row">
          <div className="col-12">
          <div className="col-12 banner__block d-flex align-items-center">
            <div class="banner_card col-6 ml-3">
              <h2>Hi, I'm Ryan</h2>
              <p>I'm a web developer and project manager</p>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section className="p-3" id="summary">
        <div> 
          <h1 className="section-title">Services</h1>
        </div>
        <div className="row">
          <div className="my-2 col-md-6 col-sm-12">
          <div className="col-6 summary__border center-radius">
            <div className="text-center summary__icon"><FontAwesomeIcon icon="cog" /></div>
          </div>
          <div class="d-flex summary__flex">
            <div className="col-3 summary__border left-radius"></div>
            <div className="col-6"></div>
            <div className="col-3 summary__border right-radius"></div>
          </div>
            <div className="col-12 summary__block">
              <div className="summary__title">Web Development</div>
            </div>
          </div>
          <div className="my-2 col-md-6 col-sm-12">
          <div className="col-6 summary__border center-radius">
            <div className="summary__title">Web Development</div>
          </div>
          <div class="summary__flex d-flex">
            <div className="col-3 summary__border left-radius"></div>
            <div className="col-6"></div>
            <div className="col-3 summary__border right-radius"></div>
          </div>
            <div className="col-12 summary__block">
              <div className="text-center summary__icon"><FontAwesomeIcon icon="cog" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-3" id="space">
        <div></div>
      </section>
      <section className="py-3 container" id="portfolio">
        <div className="row">
          <div className="my-2 col-sm-7 col-xs-12">
            <div className="my-2 col-12 portfolio__block"></div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12">
            <div className="my-2 col-12 portfolio__block"></div>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-sm-7 col-xs-12">
            <div className="my-2 col-12 portfolio__block"></div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12">
            <div className="my-2 col-12 portfolio__block"></div>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-sm-7 col-xs-12">
            <div className="my-2 col-12 portfolio__block"></div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12">
            <div className="my-2 col-12 portfolio__block"></div>
          </div>
        </div>
      </section>
      <section className="py-3 container" id="clients">
        <div className="row">
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block"></div>
          </div>
        </div>
      </section>
      <section className="py-3 container">
        <div className="row">
        {renderTilesMobile()}
        </div>
      </section>
    </div>
  )
}

export default Home;