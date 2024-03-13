import React, { Component } from 'react';
import './Navstyles.css'
class Navbar extends Component {
    render() {
        return (
            <section className="h-wrapper">
                <div className=" flexcenter paddings innerwidth h-container">
                    <img src="https://static.vecteezy.com/system/resources/previews/029/152/214/original/beach-coconut-tree-ai-generate-png.png" alt="logo" width={100}/>
                    <div className="h-menu">
                        <a href="">Home</a>
                        <a href="">Get Started</a>
                        <a href="">Popular</a>
                        <a href="">Contact</a>
                        
                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Navbar;
