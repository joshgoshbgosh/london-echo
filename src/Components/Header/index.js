import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import londonecho from './../../images/londonecho.png';
import "./index.css"

class Header extends Component {



  render() {



  return (
    <div>
      <div className="navdiv">
        <div>
          <img className="navphoto"src={londonecho}/>
        </div>
        <div className="atags">
        <div>
          <a>About</a>
        </div>
        <div>
          <a>Bands</a>
        </div>
        <div>
          <a>Gear</a>
        </div>
        <div>
          <a>Contact</a>
        </div>
        </div>
      </div>
    </div>
  );
}
}
export default Header;
