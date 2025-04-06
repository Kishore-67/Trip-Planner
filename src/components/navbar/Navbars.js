// src/components/Navbar.js
import React from 'react';
import './Navstyles.css'
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">TripPlanner</h2>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Mappage">Explore</NavLink></li>  
        <li><NavLink to="/Login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
