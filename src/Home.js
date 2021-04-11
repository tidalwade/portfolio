import React from 'react';
import TileSlide from './TileSlide'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import personalPic from './personal_pic.png';
import ahalogo from './logo_aha.png';
import alslogo from './logo_ALS.jpeg';
import alzlogo from './logo_ALZ.jpeg';
import bchtlogo from './logo_bcht.png';
import bfaslogo from './logo_bfas.png';
import ccfalogo from './logo_ccfa.png';
import kkilogo from './logo_kki.png';
import mawlogo from './logo_maw.png';
import nypllogo from './logo_nypl.jpg';
import rcflogo from './logo_rcf.png';
import sgklogo from './logo_sgk.png';
import stjlogo from './logo_stj.png';
// import ahalogo from './logo_aha.png';
// import ahalogo from './logo_aha.png';

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
            <div class="banner_card col-4 offset-1 d-flex justify-content-center align-items-center">
              <div class="col-11">
                <h2>Hi, I'm Ryan</h2>
                <p>I'm a web developer and project manager</p>
                <p>Let's build something together</p>
              </div>
            </div>
            <div class="col-7 ml-3 personal-pic d-flex justify-content-center">
              <img src={personalPic} />
            </div>
          </div>
          </div>
        </div>
      </section>
      <section id="contact">
      <div className="row col-10">
          <h1>Contact</h1>
        </div>
        <div className="col-8 d-flex contact__icons">
          <div>
            <a href="mailto:ryantwade@gmail.com">
              <FontAwesomeIcon icon="envelope" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ryantwade">
              <FontAwesomeIcon icon={['fab','linkedin']} />
            </a>
          </div>
          <div>
            <a href="https://github.com/tidalwade">
              <FontAwesomeIcon icon={['fab','github']} />
            </a>
          </div>
          <div>
            <a href="#">
              <FontAwesomeIcon icon="download" />
            </a>
            <div>Resume</div>
          </div>
        </div>
      </section>
      <section id="summary">
        <div className="row col-10">
          <h1>Services</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 d-flex">
            <div className="my-2 col-md-6 col-sm-12">
              <div className="mx-2">
                <div className="col-6 summary__border center-radius">
                  <div className="text-center summary__icon"><FontAwesomeIcon icon="cog" /></div>
                </div>
                <div class="d-flex summary__flex">
                  <div className="col-3 summary__border left-radius"></div>
                  <div className="col-6"></div>
                  <div className="col-3 summary__border right-radius"></div>
                </div>
                <div className="col-12 summary__block">
                  <div className="summary__title">
                    <h1>Web Development</h1>
                    <h2>Web focused</h2>
                    <p>A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 col-md-6 col-sm-12">
              <div className="mx-2">
                <div className="col-6 summary__border center-radius">
                  <div className="text-center summary__icon"><FontAwesomeIcon icon="cog" /></div>
                </div>
                <div class="d-flex summary__flex">
                  <div className="col-3 summary__border left-radius"></div>
                  <div className="col-6"></div>
                  <div className="col-3 summary__border right-radius"></div>
                </div>
                <div className="col-12 summary__block">
                  <div className="summary__title">
                    <h1>Web Development</h1>
                    <h2>Web focused</h2>
                    <p>A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="p-3" id="space">
        <div></div>
      </section> */}
      <section className="py-3" id="portfolio">
        <div className="row col-10 title">
          <h1>Projects</h1>
        </div>
        <div className="col-10">
        <div className="row">
          <div className="my-2 col-sm-7 col-xs-12">
            <div className="my-2 p-0 col-12">
              <div className="portfolio__block">
              <a href="https://secure2.wish.org/site/SPageServer?pagename=donate_today&chid=100-000" target="_blank">
                <div className="mission px-3 d-flex flex-column justify-content-center">
                  <p>The mission of the Make-A-Wish Foundation is to create life-changing wishes for children with critical illnesses. The children we serve are fighting for their lives, and their families are doing everything that they can to help them in their battles.</p>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12">
            <div className="my-2 col-12 portfolio__block d-flex flex-column justify-content-center">
              <h1 className="text-center">Make-A-Wish Foundation</h1>
              <h2 className="text-center">Donation form</h2>
              <p>National and affiliate donation form with custom conditional content for each MAW chapter</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-sm-7 col-xs-12">
            <div className="my-2 p-0 col-12">
              <div className="portfolio__block">
              <a href="https://act.alz.org/site/SPageServer/?pagename=ride_homepage" target="_blank">
                <div className="mission px-3 d-flex flex-column justify-content-center">
                  <p>Mission: To eliminate Alzheimer's disease through the advancement of research; to provide and enhance care and support for all affected; and to reduce the risk of dementia through the promotion of brain health.</p>
                </div>
              </a>
              </div>
            </div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12">
            <div className="my-2 col-12 portfolio__block d-flex flex-column justify-content-center">
              <h1 className="text-center">Alzheimer's Association</h1>
              <h2 className="text-center">Ride to End ALZ</h2>
              <p>Event hub for registration, participant engagement, and donations</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-sm-7 col-xs-12">
            <div className="my-2 p-0 col-12">
            <div className="portfolio__block">
            <a href="https://secure.childrenshospital.org/site/SPageNavigator/Beyond_Boston" target="_blank">
                <div className="mission px-3 d-flex flex-column justify-content-center">
                  <p>For over 150 years, Boston Children's Hospital has maintained the same vision: to advance pediatric care worldwide. Our four-part mission is to:</p>
                  <ul>
                    <li>provide the highest quality of health care</li>
                    <li>lead the way in research and discovery</li>
                    <li>educate the next generation of leaders in health care</li>
                    <li>enhance the health and well-being of the children and families in our local community</li>
                  </ul>
                </div>
              </a>
              </div>
            </div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12">
            <div className="my-2 col-12 portfolio__block d-flex flex-column justify-content-center">
              <h1 className="text-center">Beyond Children's Hospital Trust</h1>
              <h2 className="text-center">Beyond Boston</h2>
              <p>Highlighting BCHT and asking for more money</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="space" className="py-3">
        <div className="row col-12">
        </div>
      </section>
      <section className="py-5 container" id="clients">
        <div className="row col-10 title">
          <h1>Clients</h1>
        </div>
        <div className="row col-10 clients__container">
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={ahalogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={alslogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={alzlogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={bchtlogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={bfaslogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={ccfalogo} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="row col-10 clients__container">
          <div className="my-2 col-md-2 col-4">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={kkilogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={mawlogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={nypllogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={rcflogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={sgklogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-4">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={stjlogo} alt="Logo" />
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="d-flex justify-content-center">
        © 2021 Ryan Wade. All rights reserved.
        </div>
      </section>
      {/* <section className="py-3 container">
        <div className="row">
        {renderTilesMobile()}
        </div>
      </section> */}
    </div>
  )
}

export default Home;