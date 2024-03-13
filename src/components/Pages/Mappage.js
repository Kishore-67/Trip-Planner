import React from 'react'
import  { useState, useEffect } from 'react';
import './Mappage.css'

    function Mappage() {
        // State variables to store the origin and destination places
        const [origin, setOrigin] = useState('');
        const [destination, setDestination] = useState('');
        const [directionsService, setDirectionsService] = useState(null);
        const [directionsDisplay, setDirectionsDisplay] = useState(null);
      
        // Function to handle form submission
        const handleSubmit = (event) => {
          event.preventDefault();
          // Geocode the origin and destination places
          geocodeAddress(origin, (originLocation) => {
            geocodeAddress(destination, (destinationLocation) => {
              // Initialize Google Maps and add markers
              initMap(originLocation, destinationLocation);
              // Calculate and display the route
              calculateAndDisplayRoute(originLocation, destinationLocation);
            });
          });
        };
      
        // Function to geocode the address
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
      
        // Function to initialize Google Maps and add markers
        const initMap = (originLocation, destinationLocation) => {
          // Create a new map centered on the first geocoded location
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: originLocation || { lat: 0, lng: 0 },
            zoom: 10
          });
      
          // Initialize Directions Service and Display
          const directionsServiceInstance = new window.google.maps.DirectionsService();
          const directionsDisplayInstance = new window.google.maps.DirectionsRenderer();
          directionsDisplayInstance.setMap(map);
      
          setDirectionsService(directionsServiceInstance);
          setDirectionsDisplay(directionsDisplayInstance);
      
          // Add origin marker if available
          if (originLocation) {
            new window.google.maps.Marker({
              position: originLocation,
              map,
              title: 'Origin'
            });
          }
      
          // Add destination marker if available
          if (destinationLocation) {
            new window.google.maps.Marker({
              position: destinationLocation,
              map,
              title: 'Destination'
            });
          }
        };
      
        // Function to calculate and display route
        const calculateAndDisplayRoute = (originLocation, destinationLocation) => {
          if (!directionsService || !directionsDisplay) return;
      
          const request = {
            origin: originLocation,
            destination: destinationLocation,
            travelMode: 'DRIVING'
          };
      
          directionsService.route(request, (response, status) => {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              console.error('Directions request failed due to ' + status);
            }
          });
        };
      
        useEffect(() => {
          // Load Google Maps API and initialize the map
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDouSDXuZs-C61VHt6eJiIgP4ndfv41pDU&callback=initMap`;
          script.async = true;
          document.head.appendChild(script);
          script.onload = () => {
            window.initMap = initMap;
          };
      
          return () => {
            // Cleanup function to remove the script from the document head
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
              <button type="submit" className="submit-button">Plan Trip</button>
            </form>
            <div id="map" className="map"></div>
          </div>
        );
      }
        export default Mappage;
