import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import studio8 from './../../images/studio8.jpg';
import echologo from './../../images/echologo.png';
import studio3 from './../../images/studio3.jpg';
import phantogram from './../../images/phantogram.jpg';
import paperroute from './../../images/paperroute.jpg';
import tforf from './../../images/tforf.jpg';
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
        We love the colaboration of the worlds best music minds such as Finneas O'Connell, Mark Ronson,
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
      </div>
    </div>
  );
}
}
export default Home;
