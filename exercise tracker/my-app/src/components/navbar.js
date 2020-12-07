import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="navbar">
        <Link to="/" className="logo">ExcerTracker</Link>
        <ul className="nav">
          <li className="">
          <Link to="/" className="a">Exercises</Link>
          </li>
          <li className="">
          <Link to="/create" className="a">Create Exercise Log</Link>
          </li>
          <li className="">
          <Link to="/user" className="a">Create User</Link>
          </li>
        </ul>
        </div>
        </div>
       
    );
  }
}