import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Navstyles.css'
import Home from '../Pages/Homes';
export const Navbar = () => {
   const[menuOpen,setMenuOpen]  = useState(false)
  return (
    <nav class="nav">
        <Link to={"/"} className='title'>
          <img src="bccf3351eadbe37b4602722658821edc-removebg-preview.png" alt="logo" width={100} />
        </Link>
        <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen);
        }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open":""}>
        <li><NavLink to="/">Home</NavLink></li>         
        <li><NavLink to="/Mappage">Get Started</NavLink></li>          
        <li><NavLink to ="/Conntact">Contact</NavLink></li>   
        <li><NavLink to="/Login">Login</NavLink></li>          
        </ul>



    </nav>
  );
};

export default Navbar