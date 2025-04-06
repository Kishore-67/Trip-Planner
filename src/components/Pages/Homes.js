// src/Home.js
import React from 'react';
import './Homes.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Plan Your Next Adventure</h1>
        <p>Choose your destination, set your dates, and get ready to explore!</p>

        <div className="form-container">
          <input type="text" placeholder="Enter Destination" />
          <input type="date" />
          <input type="number" placeholder="No. of People" />
          <button>Start Planning</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
