import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./index.css"

class Header extends Component {



  render() {



  return (
    <div>



        <div className="atags">
        <div className="about">
          <a>About</a>
        </div>
        <div className="bands">
          <a>Bands</a>
        </div>
        <div className="gear">
          <a>Gear</a>
        </div>
        <div className="contact">
          <a>Contact</a>
        </div>
        </div>


    </div>
  );
}
}
export default Header;
