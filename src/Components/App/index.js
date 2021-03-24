import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './../Home';
import Header from './../Header';
import Footer from './../Footer';
import './index.css';
function App() {
  return (
    <React.Fragment>
    <Header/>
    <div className="App">
      <Switch>
        <Route path='/'component={Home} />
      </Switch>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
