import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import fondo from './img/fondo.PNG'

import './App.css';




class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Form">
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
              </div>

              <Route exact path="/" component={SignInForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
          <div className="App__Aside">

          <img src={fondo} alt=""></img>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
