import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./index.css"

class Header extends Component {



  render() {



  return (
    <div>



        <div id="navigation"className="atags">
        <div className="about">
          <span className="sec1"><a href="#sectionLink1">About</a></span>
        </div>
        <div className="bands">
          <span><a href="#sectionLink2">Bands</a></span>
        </div>
        <div className="gear">
          <span><a href="#sectionLink3">Gear</a></span>
        </div>
        <div className="contact">
          <span><a href="#sectionLink4">Contact</a></span>
        </div>
        </div>



    </div>
  );
}
}
export default Header;
