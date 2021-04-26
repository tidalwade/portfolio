import React from 'react';
import TileSlide from './TileSlide'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll';
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
import pdf from './Ryan_Wade_Web_Developer_Resume.pdf';
// import ahalogo from './logo_aha.png';
// import ahalogo from './logo_aha.png';
import fadin from '../node_modules/fadin/dist/fadin.cdj.js';
import DownloadLink from "react-download-link";

library.add(fas, fab);
// import logo from './banner_image.png';
const { v4: uuidv4 } = require('uuid');

function Home(){

  document.addEventListener("DOMContentLoaded", () => {
    fadin('.fade')
  });

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
            <div class="banner_card col-lg-4 col-md-5 col-12 offset-md-1 d-flex justify-content-center align-items-center">
              <div class="col-md-11 col-12">
                <h2>Hi, I'm Ryan</h2>
                <p>I'm a web developer and project manager</p>
                <p>Let's build something together</p>
              </div>
            </div>
            <div class="col-md-7 col-12 ml-3 personal-pic d-flex justify-content-center">
              <img src={personalPic} />
            </div>
          </div>
          </div>
        </div>
      </section>
      <section id="contact">
      <div className="row col-10">
          <h3>Contact</h3>
        </div>
        <div className="col-md-8 col-12 d-flex contact__icons">
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
          {/* <DownloadLink
            label="Save"
            filename="Ryan_Wade_Web_Developer_Resume.pdf"
            exportFile={() => "./Ryan_Wade_Web_Developer_Resume.pdf"}
          /> */}
            <a href={pdf} download>
              <FontAwesomeIcon icon="download" />
            </a>
            <div>Resume</div>
          </div>
        </div>
      </section>
      <section id="summary">
        <div className="row col-10">
          <h3>Services</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-12 d-flex summary__container">
            <div className="my-2 col-md-6 col-12 fade" data-delay=".25s">
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
                    <h2>Front End</h2>
                    <p>Creating elegant and intuitive websites is my goal. Helping YOU get there is my passion. I employ a wealth of experience, curiosity, and data-driven results to guide you along the way.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2 col-md-6 col-12 fade" data-delay=".25s">
              <div className="mx-2">
                <div className="col-6 summary__border center-radius">
                  <div className="text-center summary__icon"><FontAwesomeIcon icon="calendar-check" /></div>
                </div>
                <div class="d-flex summary__flex">
                  <div className="col-3 summary__border left-radius"></div>
                  <div className="col-6"></div>
                  <div className="col-3 summary__border right-radius"></div>
                </div>
                <div className="col-12 summary__block">
                  <div className="summary__title">
                    <h1>Project Management</h1>
                    <h2>PMP Certified</h2>
                    <p>My path in the tech arena began as a project manager. I've learned it's always possible to provide an achievable and realistic plan, while still being nimble, for each project milestone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3" id="portfolio">
        <div className="row col-10 title">
          <h3>Web Development Projects</h3>
        </div>
        <div className="col-md-10 col-12">
        <div className="row portfolio_container">
          <div className="my-2 col-sm-7 col-xs-12 fade" data-delay=".25s">
            <div className="my-2 p-0 col-12 portfolio_block_container">
              <div className="portfolio__block">
              <a href="https://secure2.wish.org/site/SPageServer?pagename=donate_today&chid=100-000" target="_blank">
                <div className="mission px-3 d-flex flex-column justify-content-center">
                  <a className="btn btn-primary" href="https://secure2.wish.org/site/SPageServer?pagename=donate_today&chid=100-000">Visit Site</a>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12 fade" data-delay=".25s">
            <div className="my-2 col-12 portfolio__block_description d-flex flex-column justify-content-center">
              <h2 className="text-center">Make-A-Wish Foundation</h2>
              <div className="portfolio__block_more_description one d-flex flex-column justify-content-center">
                <h4 className="text-center">Donation Form</h4>
                <p>National and affiliate donation form built with custom components allowing each chapter to create their own personal brand and needs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio_container">
          <div className="my-2 col-sm-7 col-xs-12 fade" data-delay=".25s">
            <div className="my-2 p-0 col-12 portfolio_block_container" >
              <div className="portfolio__block">
              <a href="https://act.alz.org/site/SPageServer/?pagename=ride_homepage" target="_blank">
                <div className="mission px-3 d-flex flex-column justify-content-center">
                <a className="btn btn-primary" href="https://act.alz.org/site/SPageServer/?pagename=ride_homepage">Visit Site</a>
                </div>
              </a>
              </div>
            </div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12 fade" data-delay=".25s">
            <div className="my-2 col-12 portfolio__block_description d-flex flex-column justify-content-center">
              <h2 className="text-center">Alzheimer's Association</h2>
              <div className="portfolio__block_more_description two d-flex flex-column justify-content-center">
                <h4 className="text-center">Ride to End ALZ</h4>
                <p>ALZ's premiere peer to peer bike event site empowers riders to register, fundraise, share, and donate to support the organization</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio_container">
          <div className="my-2 col-sm-7 col-xs-12 fade" data-delay=".25s">
            <div className="my-2 p-0 col-12 portfolio_block_container">
            <div className="portfolio__block">
            <a href="https://secure.childrenshospital.org/site/SPageNavigator/Beyond_Boston" target="_blank">
                <div className="mission px-3 d-flex flex-column justify-content-center">
                  <a className="btn btn-primary" href="https://secure.childrenshospital.org/site/SPageNavigator/Beyond_Boston">Visit Site</a>
                </div>
              </a>
              </div>
            </div>
          </div>
          <div className="my-2 col-sm-5 col-xs-12 fade" data-delay=".25s">
            <div className="my-2 col-12 portfolio__block_description d-flex flex-column justify-content-center">
              <h2 className="text-center">Beyond Children's Hospital Trust</h2>
              <div className="portfolio__block_more_description three d-flex flex-column justify-content-center">
                <h4 className="text-center">Beyond Boston</h4>
                <p>Microsite tailored to inspire and inform potential philanthropist to give in support of research for Boston Children's Hospital Trust</p>
              </div>
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
          <h3>Clients</h3>
        </div>
        <div className="row col-md-10 col-12 clients__container first_row">
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={ahalogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={alslogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={alzlogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={bchtlogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={bfaslogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={ccfalogo} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="row col-md-10 col-12 clients__container second_row">
          <div className="my-2 col-md-2 col-6">
            <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={kkilogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={mawlogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={nypllogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={rcflogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={sgklogo} alt="Logo" />
            </div>
          </div>
          <div className="my-2 col-md-2 col-6">
          <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
            <img src={stjlogo} alt="Logo" />
            </div>
          </div>
        </div>
        <div className="top d-flex justify-content-center align-items-center flex-column my-2">
        <Link to="banner" spy={false} offset={-50} smooth={true} duration={2000} >
        <FontAwesomeIcon icon="arrow-circle-up" />
        <div>BACK TO TOP</div>
        </Link>
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