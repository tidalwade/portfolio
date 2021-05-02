import React from 'react';
import Services from './Services';
import Contacts from './Contacts';
import Portfolio from './Portfolio';
import Clients from './Clients';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll';
import personalPic from '../assets/images/personal_pic.png';
import ahalogo from '../assets/images/logo_aha.png';
import alslogo from '../assets/images/logo_ALS.jpeg';
import alzlogo from '../assets/images/logo_ALZ.jpeg';
import bchtlogo from '../assets/images/logo_bcht.png';
import bfaslogo from '../assets/images/logo_bfas.png';
import ccfalogo from '../assets/images/logo_ccfa.png';
import kkilogo from '../assets/images/logo_kki.png';
import mawlogo from '../assets/images/logo_maw.png';
import nypllogo from '../assets/images/logo_nypl.jpg';
import rcflogo from '../assets/images/logo_rcf.png';
import sgklogo from '../assets/images/logo_sgk.png';
import stjlogo from '../assets/images/logo_stj.png';
import pdf from '../assets/pdfs/Ryan_Wade_Web_Developer_Resume.pdf';
// import ahalogo from './logo_aha.png';
// import ahalogo from './logo_aha.png';
import fadin from '../../node_modules/fadin/dist/fadin.cdj.js';
import DownloadLink from "react-download-link";

library.add(fas, fab);
// import logo from './banner_image.png';
const { v4: uuidv4 } = require('uuid');

function Home(){

  document.addEventListener("DOMContentLoaded", () => {
    fadin('.fade')
  });

  const contacts = [
    {
      url: 'mailto:ryantwade@gmail.com',
      iconName: 'envelope',
      iconType: 'fas',
      subtitle: ''
    },
    {
      url: 'https://www.linkedin.com/in/ryantwade',
      iconName:  'linkedin',
      iconType: 'fab',
      subtitle: ''
    },
    {
      url: 'https://github.com/tidalwade',
      iconName: 'github',
      iconType: 'fab',
      subtitle: ''
    },
    {
      url: `${pdf}`,
      // url: 'https://github.com/tidalwade',
      iconName: 'download',
      iconType: 'fas',
      subtitle: `Resume`
    }
  ]
  

  const services = [
    {
      title: 'Web Development',
      subtitle: 'Get Started',
      description: 'Creating elegant and intuitive websites is my goal. Helping YOU get there is my passion. I employ a wealth of experience, curiosity, and data-driven results to guide you along the way.',
      iconName: 'cog'
    },
    {
      title: 'Project Management',
      subtitle: 'PMP Certified',
      description: `My path in the tech arena began as a project manager. I've learned it's always possible to provide an achievable and realistic plan, while still being nimble, for each project milestone.`,
      iconName: 'calendar-check'
  }
  ]

  const projects = [
    {
      url: 'https://secure2.wish.org/site/SPageServer?pagename=donate_today&chid=100-000',
      title: 'Make-A-Wish Foundation',
      subtitle: 'Donation Form',
      description: 'National and affiliate donation form built with custom components allowing each chapter to create their own personal brand and needs',
    },
    {
      url: 'https://act.alz.org/site/SPageServer/?pagename=ride_homepage',
      title: "Alzheimer's Association",
      subtitle: 'Ride to End ALZ',
      description: "ALZ's premiere peer to peer bike event site empowers riders to register, fundraise, share, and donate to support the organization",
    },
    {
      url: 'https://secure.childrenshospital.org/site/SPageNavigator/Beyond_Boston',
      title: "Boston Children's Hospital Trust",
      subtitle: 'Beyond Boston',
      description: "Microsite tailored to inspire and inform potential philanthropist to give in support of research for Boston Children's Hospital Trust",
    }
  ]

  const clients = [
    {
      image: `${ahalogo}`,
    },
    {
      image: `${alslogo}`,
    },
    {
      image: `${alzlogo}`,
    },
    {
      image: `${bchtlogo}`,
    },
    {
      image: `${bfaslogo}`,
    },
    {
      image: `${ccfalogo}`,
    },
    {
      image: `${kkilogo}`,
    },
    {
      image: `${mawlogo}`,
    },
    {
      image: `${nypllogo}`,
    },
    {
      image: `${rcflogo}`,
    },
    {
      image: `${sgklogo}`,
    },
    {
      image: `${stjlogo}`,
    },
  ]

  return(
    <div>
      <section className="pt-5 py-0" id="banner">
        <div className="row">
          <div className="col-12">
          <div className="col-12 banner__block">
            <div className="d-flex align-items-center">
              <div class="banner_card col-lg-5 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div class="col-md-11 col-12">
                  <h2>Hi, I'm Ryan</h2>
                  <p>I'm a web developer and project manager</p>
                  <p>Let's build something together</p>
                </div>
              </div>
              <div class="col-lg-5 col-md-6 col-12 ml-3 personal-pic d-flex justify-content-end">
                <img src={personalPic} />
              </div>
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
          {contacts.map((contact) => {
            return (
              <Contacts {...contact} key={uuidv4()} />
            )
          })}
        </div>
      </section>
      <section id="summary">
        <div className="row col-10">
          <h3>Services</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12 d-flex summary__container">
            {services.map((service) => {
              return (
                <Services {...service} key={uuidv4()} />
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-3" id="portfolio">
        <div className="row col-10 title">
          <h3>Web Development Projects</h3>
        </div>
        <div className="col-lg-10 col-12">
          {projects.map((project) => {
            return (
              <Portfolio {...project} key={uuidv4()} />
            )
          })}
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
          {clients.map((client) => {
            return (
              <Clients {...client} key={uuidv4()} />
            )
          })}
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
    </div>
  )
}

export default Home;