import React, { Component } from 'react';
import './Navstyles.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class ="nav">
                <Link to={"/"} className='title'>TRIP PLANNER</Link>
                    <img src="https://static.vecteezy.com/system/resources/previews/029/152/214/original/beach-coconut-tree-ai-generate-png.png" alt="logo" width={100}/>
                    
                      <ul>
                        <li><Link to={"/Home"}>Home</Link></li>
                        <li><Link to={"/Mappage"}>Get Started</Link></li>
                        <li><Link to={"/Contact"}>Contact</Link></li>
                        <li><Link to={"/Login"}>Login</Link></li>
                        </ul>               
            </nav>
        );
    }
}

export default Navbar;
