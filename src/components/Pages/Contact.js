import React from 'react';
import './Contact.css';
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
export const Contact = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="member1">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Kishore" width="120px" />
        <h2>Kishore</h2>
        <p>Role: Web Developer</p>
        <p></p>
      </div>
      <div className="member2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Kishore" width="120px" />
        <h2>Kasiram</h2>
        <p>Role: UI/UX Designer</p>
        <p></p>
      </div>
      <div className="member3">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Kishore" width="120px" />
        <h2>Muhammed Safik</h2>
        <p>Role: Back-end developer</p>
        <p></p>

        <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com"><i className="social"><FaInstagram /></i></a>
        <a href="https://www.linkedin.com"><i className="social"><FaSquareXTwitter /></i></a>
        <a href="https://www.facebook.com"><i className="social"><FaFacebookSquare /></i></a>
      </div>
      <p> 2024 @Trip planner. All rights reserved.</p>
    </footer>
      </div>
    </div>
  );
};

export default Contact;