import React from 'react';
import { Link } from 'react-router-dom';
import RouteLink from './Router';
import '../App.css';

function Nav() {
  return (
    <div className="main">
      <div className="nav">
        <h1>Weather App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
      </div>
      <RouteLink />
    </div>
  );
}
export default Nav;
