import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import studio8 from './../../images/studio8.jpg';
import echologo2 from './../../images/echologo2.png';
import studio3 from './../../images/studio3.jpg';
import phantogram from './../../images/phantogram.jpg';
import paperroute from './../../images/paperroute.jpg';
import tforf from './../../images/tforf.jpg';
import afi from './../../images/afi.jpg';
import bandhorses from './../../images/bandhorses.jpg';
import asilent from './../../images/asilent.jpg';
import avrillavigne from './../../images/avrillavigne.jpg';
import bush from './../../images/bush.jpg';
import fuel from './../../images/fuel.jpeg';
import threeeleven from './../../images/threeeleven.jpg';
import blondie from './../../images/blondie.jpg';
import gavin from './../../images/gavin.jpg';
import allamerireje from './../../images/allamerireje.jpg';
import blink from './../../images/blink.jpg';
import deftones from './../../images/deftones.jpg';
import guanoapes from './../../images/guanoapes.jpg';
import jackjohnson from './../../images/jackjohnson.jpg';
import london from './../../images/london.jpg';
import madonna from './../../images/madonna.jpg';
import mutemath from './../../images/mutemath.jpg';
import papar from './../../images/papar.jpg';
import utwo from './../../images/utwo.jpg';
import paramore from './../../images/paramore.jpg';
import cplay from './../../images/cplay.jpeg';
import studio7 from './../../images/studio7.jpg';
import gearlogo from './../../images/gearlogo.png';
import contact from './../../images/contact.png';

import './index.css';


class Home extends Component {



  render() {
    document.addEventListener('DOMContentLoaded', () => {
  //  little hack to detect if the user is on ie 11
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
  // get all the links with an ID that starts with 'sectionLink'
  const listOfLinks = document.querySelectorAll("a[href^='#sectionLink")
  // loop over all the links
  listOfLinks.forEach(function (link) {
    // listen for a click
    link.addEventListener('click', () => {
      // toggle highlight on and off when we click a link
      listOfLinks.forEach((link) => {
        if (link.classList.contains('highlighted')) {
          link.classList.remove('highlighted')
        }
      })
      link.classList.add('highlighted')
      // get the element where to scroll
      let ref = link.href.split('#sectionLink')
      ref = '#section' + ref[1]
      // ie 11 does not support smooth scroll, so we will simply scroll
      if (isIE11) {
        window.scrollTo(0, document.querySelector(ref).offsetTop)
      } else {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          // top gets the distance from the top of the page of our target element
          top: document.querySelector(ref).offsetTop,
        })
      }
    })
  })
})


  return (

    <div>
      <div className="topdiv ">
        <img className="logophoto "src={echologo2}/>
      </div>
      <div className="space">
        <i class="fab fa-facebook-f d-block d-sm-none"></i>
        <i class="fab fa-youtube d-block d-sm-none"></i>
        <i class="fab fa-youtube d-block d-sm-none"></i>
        <i class="fab fa-twitter d-block d-sm-none"></i>
      </div>
      <div id="content">
      <div id="section1">
      <div className="aboutdiv ">
        <p className="aboutp d-none d-md-block">
        Located in London, we work with the greatest producers, artist and songwriters in the world.
        We love the collaboration of the world's best music minds such as Finneas O'Connell, Mark Ronson,
        Jack Antonoff, Nick Atkinson, Ed Holloway, Howard Benson and many more.  Our roster of award winners
        are guaranteed to get the number 1 hits flowing out of the studio for any artist working on the next
        big project.
        </p>
        <p className="mobileaboutlabel">
          ABOUT
        </p>
        <p className="mobileaboutp d-block d-sm-none">
        Located in London, we work with the greatest producers, artist and songwriters in the world.
        We love the collaboration of the world's best music minds such as Finneas O'Connell, Mark Ronson,
        Jack Antonoff, Nick Atkinson, Ed Holloway, Howard Benson and many more.  Our roster of award winners
        are guaranteed to get the number 1 hits flowing out of the studio for any artist working on the next
        big project.
        </p>
      </div>
      </div>
      <div className="space">
      </div>
      <div id="section2">
      <div className="banddiv">
      <div className="mobilephantogram d-block d-sm-none">
        <img src={phantogram}/>
        <p>PHANTOGRAM</p>
      </div>
      <div className="mobilepaperroute d-block d-sm-none">
        <img src={paperroute}/>
        <p>PAPER ROUTE</p>
      </div>
      <div className="mobiletears d-block d-sm-none">
        <img src={tforf}/>
        <p>TEARS FOR FEARS</p>
      </div>
      <div className="mobileasilent d-block d-sm-none">
        <img src={asilent}/>
        <p>A SILENT FILM</p>
      </div>
      <div className="mobileafi d-block d-sm-none">
        <img src={afi}/>
        <p>AFI</p>
      </div>
      <div className="mobilebandhorses d-block d-sm-none">
        <img src={bandhorses}/>
        <p>BAND OF HORSES</p>
      </div>
      <div className="mobileavril d-block d-sm-none">
        <img src={avrillavigne}/>
        <p>AVRIL LAVIGNE</p>
      </div>
      <div className="mobilefuel d-block d-sm-none">
        <img src={fuel}/>
        <p>FUEL</p>
      </div>
      <div className="mobilebush d-block d-sm-none">
        <img src={bush}/>
        <p>BUSH</p>
      </div>
      <div className="mobilethreeeleven d-block d-sm-none">
        <img src={threeeleven}/>
        <p>311</p>
      </div>
      <div className="mobileblondie d-block d-sm-none">
        <img src={blondie}/>
        <p>BLONDIE</p>
      </div>
      <div className="mobilegavin d-block d-sm-none">
        <img src={gavin}/>
        <p>GAVIN DEGRAW</p>
      </div>
      <div className="mobileallamerirege d-block d-sm-none">
        <img src={allamerireje}/>
        <p>ALL AMERICAN REJECTS</p>
      </div>
      <div className="mobilecplay d-block d-sm-none">
        <img src={cplay}/>
        <p>COLDPLAY</p>
      </div>
      <div className="mobileblink d-block d-sm-none">
        <img src={blink}/>
        <p>BLINK 182</p>
      </div>
      <div className="mobiledeftones d-block d-sm-none">
        <img src={deftones}/>
        <p>DEFTONES</p>
      </div>
      <div className="mobileguanoapes d-block d-sm-none">
        <img src={guanoapes}/>
        <p>GUANO APES</p>
      </div>
      <div className="mobilejackjohnson d-block d-sm-none">
        <img src={jackjohnson}/>
        <p>JACK JOHNSON</p>
      </div>
      <div className="mobilelondon d-block d-sm-none">
        <img src={london}/>
        <p>LONDON GRAMMER</p>
      </div>
      <div className="mobilemadonna d-block d-sm-none">
        <img src={madonna}/>
        <p>MADONNA</p>
      </div>
      <div className="mobilemute d-block d-sm-none">
        <img src={mutemath}/>
        <p>MUTEMATH</p>
      </div>
      <div className="mobilepapar d-block d-sm-none">
        <img src={papar}/>
        <p>PAPA ROACH</p>
      </div>
      <div className="mobileparamore d-block d-sm-none">
        <img src={paramore}/>
        <p>PARAMORE</p>
      </div>
      <div className="mobileutwo d-block d-sm-none">
        <img src={utwo}/>
        <p>U2</p>
      </div>
        <div className="firstrow ">

          <div className="phantogram d-none d-md-block">
            <img src={phantogram}/>
            <p>PHANTOGRAM</p>
          </div>
          <div className="paperroute d-none d-md-block">
          <img src={paperroute}/>
          <p>PAPER ROUTE</p>
          </div>

          <div className="tears d-none d-md-block">
          <img src={tforf}/>
          <p>TEARS FOR FEARS</p>
          </div>

        </div>
        <div className="secondrow">
        <div className="asilent d-none d-md-block">
        <img src={asilent}/>
        <p>A SILENT FILM</p>
        </div>
        <div className="afi d-none d-md-block">
        <img src={afi}/>
        <p>AFI</p>
        </div>
        <div className="bandhorses d-none d-md-block">
        <img src={bandhorses}/>
        <p>BAND OF HORSES</p>
        </div>
        </div>
        <div className="thirdrow">
        <div className="avril d-none d-md-block">
        <img src={avrillavigne}/>
        <p>AVRIL LAVIGNE</p>
        </div>
        <div className="fuel d-none d-md-block">
        <img src={fuel}/>
        <p>FUEL</p>
        </div>
        <div className="bush d-none d-md-block">
        <img src={bush}/>
        <p>BUSH</p>
        </div>
        </div>
        <div className="fourthrow">
        <div className="threeeleven d-none d-md-block">
        <img src={threeeleven}/>
        <p>311</p>
        </div>
        <div className="blondie d-none d-md-block">
        <img src={blondie}/>
        <p>BLONDIE</p>
        </div>
        <div className="gavin d-none d-md-block">
        <img src={gavin}/>
        <p>GAVIN DEGRAW</p>
        </div>
        </div>
        <div className="fifthrow">
        <div className="allamerireje d-none d-md-block">
        <img src={allamerireje}/>
        <p>ALL AMERICAN REJECTS</p>
        </div>
        <div className="cplay d-none d-md-block">
        <img src={cplay}/>
        <p>COLDPLAY</p>
        </div>
        <div className="blink d-none d-md-block">
        <img src={blink}/>
        <p>BLINK 182</p>
        </div>
        </div>
        <div className="sixrow">
        <div className="deftones d-none d-md-block">
        <img src={deftones}/>
        <p>DEFTONES</p>
        </div>
        <div className="guanoapes d-none d-md-block">
        <img src={guanoapes}/>
        <p>GUANO APES</p>
        </div>
        <div className="jackjohnson d-none d-md-block">
        <img src={jackjohnson}/>
        <p>JACK JOHNSON</p>
        </div>
        </div>
        <div className="sevenrow">
        <div className="london d-none d-md-block">
        <img src={london}/>
        <p>LONDON GRAMMER</p>
        </div>
        <div className="madonna d-none d-md-block">
        <img src={madonna}/>
        <p>MADONNA</p>
        </div>
        <div className="mute d-none d-md-block">
        <img src={mutemath}/>
        <p>MUTEMATH</p>
        </div>
        </div>
        <div className="eightrow">
        <div className="papar d-none d-md-block">
        <img src={papar}/>
        <p>PAPA ROACH</p>
        </div>
        <div className="paramore d-none d-md-block">
        <img src={paramore}/>
        <p>PARAMORE</p>
        </div>
        <div className="utwo d-none d-md-block">
        <img src={utwo}/>
        <p>U2</p>
        </div>
        </div>
        </div>
        <div className="space">
        </div>
        <div id="section3">
        <div className="gearheader ">

        <div className="gearpicdiv">
        <img className="gearpic d-none d-md-block"src={gearlogo}/>
        </div>
        <div className="mobilegearlistdiv d-block d-sm-none">
          <ul>
            <li>Neuman U 87 Ai</li>
            <li>Shure SM81-LC Cardioid Condenser</li>
            <li>AKG C414 XL2</li>
            <li>Audix DP7 Drum Mics</li>
            <li>DW Timeless Timber Romanian River Oak Kit</li>
            <li>Sonor JF-SSE-11-Newport Beech Matte Walnut Veneer Kit</li>
            <li>Tyler HM-18 Amp</li>
            <li>Tyler JT-14 Amp</li>
            <li>Matchless Spitfire Amp</li>
            <li>59 Fender Twin</li>
            <li>JCM 800</li>
            <li>Elliott 357, Tone Master & Halocaster</li>
            <li>Les Paul Classic Custom</li>
            <li>1967 Gibson SG Special</li>
            <li>Fender Precision Bass</li>
            <li>Gibson J45</li>
            <li>Grand Piano</li>
            <li>API: 1608 Console</li>
          </ul>
        </div>
        <div className="gearlistdiv d-none d-md-block">
          <ul>
            <li>Neuman U 87 Ai</li>
            <li>Shure SM81-LC Cardioid Condenser</li>
            <li>AKG C414 XL2</li>
            <li>Audix DP7 Drum Mics</li>
            <li>DW Timeless Timber Romanian River Oak Kit</li>
            <li>Sonor JF-SSE-11-Newport Beech Matte Walnut Veneer Kit</li>
            <li>Tyler HM-18 Amp</li>
            <li>Tyler JT-14 Amp</li>
            <li>Matchless Spitfire Amp</li>
            <li>59 Fender Twin</li>
            <li>JCM 800</li>
            <li>Elliott 357, Tone Master & Halocaster</li>
            <li>Les Paul Classic Custom</li>
            <li>1967 Gibson SG Special</li>
            <li>Fender Precision Bass</li>
            <li>Gibson J45</li>
            <li>Grand Piano</li>
            <li>API: 1608 Console</li>
          </ul>
        </div>
        </div>
        </div>
        <div className="space">
        </div>
        <div id="section4">
        <div className="contactdiv ">
        <div className="mobile-contactform d-block d-sm-none">
        <form action="https://getform.io/f/2123216a-c1b9-447f-aada-8a37bb615d5b" method="POST">
          <div className="mobile-infodiv d-block d-sm-none">
            <input className="mobile-input-box"type="text" placeholder="name..."name="name"/>
            <input className="mobile-input-box"type="email" placeholder="email..." name="email"/>
            <input className="mobile-input-box"type="tel" placeholder="number..."name="number"/>
            <input className="mobile-message-box"type="text" placeholder="message..."name="message"/>
          </div>
            <button className="the-button" type="submit">Send</button>


        </form>
        </div>
        <div className="contactform d-none d-md-block">
          <form action="https://getform.io/f/2123216a-c1b9-447f-aada-8a37bb615d5b" method="POST">
            <div className="infodiv">
              <input className="input-box"type="text" placeholder="name..."name="name"/>
              <input className="input-box"type="email" placeholder="email..." name="email"/>
              <input className="input-box"type="tel" placeholder="number..."name="number"/>
              <input className="message-box"type="text" placeholder="message..."name="message"/>
            </div>
              <button className="the-button" type="submit">Send</button>


          </form>

          </div>
            <p className="session d-none d-md-block">SESSION BOOKING</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
}
export default Home;
