import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import studio8 from './../../images/studio8.jpg';
import echologo from './../../images/echologo.png';
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

import './index.css';


class Home extends Component {



  render() {



  return (

    <div>
      <div className="topdiv">
        <img className="logophoto"src={echologo}/>
      </div>
      <div className="space">
      </div>
      <div className="aboutdiv">
        <p className="aboutp">
        Located in London, we work with the greatest producers, artist and songwriters in the world.
        We love the collaboration of the world's best music minds such as Finneas O'Connell, Mark Ronson,
        Jack Antonoff, Nick Atkinson, Ed Holloway, Howard Benson and many more.  Our roster of award winners
        are guaranteed to get the number 1 hits flowing out of the studio for any artist working on the next
        big project.
        </p>
      </div>
      <div className="space">
      </div>
      <div className="banddiv">
        <div className="firstrow">
          <div className="phantogram">
            <img src={phantogram}/>
            <p>PHANTOGRAM</p>
          </div>
          <div className="paperroute">
          <img src={paperroute}/>
          <p>PAPER ROUTE</p>
          </div>
          <div className="tears">
          <img src={tforf}/>
          <p>TEARS FOR FEARS</p>
          </div>

        </div>
        <div className="secondrow">
        <div className="asilent">
        <img src={asilent}/>
        <p>A SILENT FILM</p>
        </div>
        <div className="afi">
        <img src={afi}/>
        <p>AFI</p>
        </div>
        <div className="bandhorses">
        <img src={bandhorses}/>
        <p>BAND OF HORSES</p>
        </div>
        </div>
        <div className="thirdrow">
        <div className="avril">
        <img src={avrillavigne}/>
        <p>AVRIL LAVIGNE</p>
        </div>
        <div className="fuel">
        <img src={fuel}/>
        <p>FUEL</p>
        </div>
        <div className="bush">
        <img src={bush}/>
        <p>BUSH</p>
        </div>
        </div>
        <div className="fourthrow">
        <div className="threeeleven">
        <img src={threeeleven}/>
        <p>311</p>
        </div>
        <div className="blondie">
        <img src={blondie}/>
        <p>BLONDIE</p>
        </div>
        <div className="gavin">
        <img src={gavin}/>
        <p>GAVIN DEGRAW</p>
        </div>
        </div>
        <div className="fifthrow">
        <div className="allamerireje">
        <img src={allamerireje}/>
        <p>ALL AMERICAN REJECTS</p>
        </div>
        <div className="cplay">
        <img src={cplay}/>
        <p>COLDPLAY</p>
        </div>
        <div className="blink">
        <img src={blink}/>
        <p>BLINK 182</p>
        </div>
        </div>
        <div className="sixrow">
        <div className="deftones">
        <img src={deftones}/>
        <p>DEFTONES</p>
        </div>
        <div className="guanoapes">
        <img src={guanoapes}/>
        <p>GUANO APES</p>
        </div>
        <div className="jackjohnson">
        <img src={jackjohnson}/>
        <p>JACK JOHNSON</p>
        </div>
        </div>
        <div className="sevenrow">
        <div className="london">
        <img src={london}/>
        <p>LONDON GRAMMER</p>
        </div>
        <div className="madonna">
        <img src={madonna}/>
        <p>MADONNA</p>
        </div>
        <div className="mute">
        <img src={mutemath}/>
        <p>MUTEMATH</p>
        </div>
        </div>
        <div className="eightrow">
        <div className="papar">
        <img src={papar}/>
        <p>PAPA ROACH</p>
        </div>
        <div className="paramore">
        <img src={paramore}/>
        <p>PARAMORE</p>
        </div>
        <div className="utwo">
        <img src={utwo}/>
        <p>U2</p>
        </div>
        </div>
      </div>
    </div>
  );
}
}
export default Home;
