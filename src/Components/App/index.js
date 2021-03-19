import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './../Home';
import Footer from './../Footer';
import './index.css';
function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Switch>
        <Route path='/'component={Home} exact/>
      </Switch>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
