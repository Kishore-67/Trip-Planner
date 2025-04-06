import React, { useState } from 'react';
import './Card.css';




const Card = ({ id, title, image, favorite, toggleFavorite }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleVisitClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      {/* <img className="card-image" src="wallpaperflare.com_wallpaper.jpg" alt="cards" /> */}
   <div className='popular'>Popular Places</div>
  <div className='cardalign'>
      <div className="card-content1">
       
       <div className='buttonalgn'>
        <button className="visit-button" onClick={handleVisitClick}>
          CLICK HERE
         
          <i className={`fas fa-chevron-right ${showDetails ? 'active' : ''}`}></i>
        </button>
        <div className='carditem1'>
        Los Roques
        </div>
    </div>
       
      </div>
      {showDetails && <div className="card-details"> visitors experience...
     
      <p>📌Fresh water</p>
      <p>📌Good food servies</p>
      <p>📌Best evening spot</p>

      </div>}


      <div className="card-content2">
       
       <div className='buttonalgn'>
        <button className="visit-button" onClick={handleVisitClick}>
        CLICK HERE
         
          <i className={`fas fa-chevron-right ${showDetails ? 'active' : ''}`}></i>
        </button>
        <div className='carditem1'>
        Salane Temple
        </div>
    </div>
       
      </div>
      {showDetails && <div className="card-details"> visitors experience...
     
      <p>📌Good service</p>
      <p>📌Peaceful place</p>
      <p>📌Good Transportation</p>

      </div>}


      <div className="card-content3">
       
       <div className='buttonalgn'>
        <button className="visit-button" onClick={handleVisitClick}>
        CLICK HERE
         
          <i className={`fas fa-chevron-right ${showDetails ? 'active' : ''}`}></i>
        </button>
        <div className='carditem1'>
        Pyramid of Giza 
        </div>
    </div>
       
      </div>
      {showDetails && <div className="card-details"> visitors experience..
      
      <p>📌Historical infrastructure</p>
      <p>📌One of the wonder</p>
      <p>📌Pyramid view points </p>
      <p>📌30 view points </p>
      </div>}
      </div>

    </div>
  );
};

export default Card;