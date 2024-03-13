import React, { useState, useEffect } from 'react';
import './Mappage.css';

function Mappage() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsDisplay, setDirectionsDisplay] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [distance, setDistance] = useState({
    driving: '',
    transit: '',
    walking: '',
  });
  const [duration, setDuration] = useState({
    driving: '',
    transit: '',
    walking: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    geocodeAddress(origin, (originLocation) => {
      geocodeAddress(destination, (destinationLocation) => {
        initMap(originLocation, destinationLocation);
        calculateAndDisplayRoute(originLocation, destinationLocation, 'DRIVING');
        calculateAndDisplayRoute(originLocation, destinationLocation, 'TRANSIT');
        calculateAndDisplayRoute(originLocation, destinationLocation, 'WALKING');
        
        getTouristPlaces(destinationLocation);
      });
    });
  };

  const geocodeAddress = (address, callback) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };
        callback(location);
      } else {
        console.error('Geocode was not successful for the following reason:', status);
        callback(null);
      }
    });
  };

  const initMap = (originLocation, destinationLocation) => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: originLocation || { lat: 0, lng: 0 },
      zoom: 10
    });

    const directionsServiceInstance = new window.google.maps.DirectionsService();
    const directionsDisplayInstance = new window.google.maps.DirectionsRenderer();
    directionsDisplayInstance.setMap(map);

    setDirectionsService(directionsServiceInstance);
    setDirectionsDisplay(directionsDisplayInstance);

    if (originLocation) {
      new window.google.maps.Marker({
        position: originLocation,
        map,
        title: 'Origin'
      });
    }

    if (destinationLocation) {
      new window.google.maps.Marker({
        position: destinationLocation,
        map,
        title: 'Destination'
      });
    }
  };

  const calculateAndDisplayRoute = (originLocation, destinationLocation, mode) => {
    if (!directionsService || !directionsDisplay) return;

    const request = {
      origin: originLocation,
      destination: destinationLocation,
      travelMode: mode
    };

    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);

        const route = response.routes[0];
        if (route && route.legs && route.legs[0]) {
          const leg = route.legs[0];
          const newDistance = { ...distance };
          newDistance[mode.toLowerCase()] = leg.distance.text;
          setDistance(newDistance);
          const newDuration = { ...duration };
          newDuration[mode.toLowerCase()] = leg.duration.text;
          setDuration(newDuration);
        }
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });
  };

  const getTouristPlaces = (location) => {
    const request = {
      location: location,
      radius: '5000', // Set the radius to search within, in meters
      type: ['tourist_attraction'] // Specify the type of places to search for
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        const topSuggestions = results.slice(0, 10).map(place => place.name);
        setSuggestions(topSuggestions);
      } else {
        console.error('Places request failed due to ' + status);
      }
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDouSDXuZs-C61VHt6eJiIgP4ndfv41pDU&callback=initMap&callback=initMap&libraries=places`;
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      window.initMap = initMap;
      setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')));
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="app-container">
      <h2 className="trip-planner-heading">Trip Planner</h2>
      <form onSubmit={handleSubmit} className="trip-form">
        <div className="form-group">
          <label htmlFor="origin" className="form-label">Origin:</label>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            className="form-input"
            placeholder="Enter origin place"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="destination" className="form-label">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="form-input"
            placeholder="Enter destination place"
          />
        </div>
        <div className="Distance">
          <h3>Distance</h3>
          <div>Driving: {distance.driving} - {duration.driving}</div>
          <div>Transit: {distance.transit} - {duration.transit}</div>
          <div>Walking: {distance.walking} - {duration.walking}</div>
        </div>
        <button type="submit" className="submit-button">Plan Trip</button>
      </form>
      <div id="map" className="map"></div>
      <div className="suggestions-box">
        <h3>PLACES TO VISIT</h3>
        <ul>
          {suggestions.map((place, index) => (
            
            <li key={index}>{index}. {place}</li>
            
          ))}
        </ul>
      </div>
      
      
    </div>
  );
}

export default Mappage;