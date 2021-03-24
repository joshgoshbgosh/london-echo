import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import studio8 from './../../images/studio8.jpg';
import './index.css';


class Home extends Component {



  render() {



  return (

    <div>
      <div className="topdiv">
        <img src={studio8}/>
      </div>

    </div>
  );
}
}
export default Home;
