
import logo from './airport.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateUser from './CreateUser';
import FlightSubmit from "./FlightSubmit";

function App() {
  return (
    <Router>
      <div>
        <h2>Boas Vindas ao Flying Club!</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> FlightSubmit </Link></li>
          <li><Link to={'/registro'} className="nav-link">CreateUser</Link></li>
        </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={FlightSubmit} />
            <Route path='/registro' component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



