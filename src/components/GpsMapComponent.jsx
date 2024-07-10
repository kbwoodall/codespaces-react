// src/components/GpsMapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 39.8283, // Default to center of the USA
  lng: -98.5795,
};

const GpsMapComponent = () => {
  const [areaCode, setAreaCode] = useState('');
  const [location, setLocation] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);

  const handleInputChange = (e) => {
    setAreaCode(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: areaCode,
            key: 'YOUR_GOOGLE_MAPS_API_KEY',
          },
        }
      );

      const { results } = response.data;
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setLocation({ lat, lng });
      } else {
        alert('No results found for this area code.');
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
      alert('Error fetching location data.');
    }
  };

  const handleMapClick = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setClickedLocation({ lat, lng });
  };

  return (
    <div>
      <input
        type="text"
        value={areaCode}
        onChange={handleInputChange}
        placeholder="Enter area code"
      />
      <button onClick={handleSearch}>Search</button>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location || center}
          zoom={location ? 12 : 4}
          onClick={handleMapClick}
        >
          {location && <Marker position={location} />}
          {clickedLocation && <Marker position={clickedLocation} />}
        </GoogleMap>
      </LoadScript>
      {clickedLocation && (
        <div>
          <p>Clicked Location Coordinates:</p>
          <p>Latitude: {clickedLocation.lat}</p>
          <p>Longitude: {clickedLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default GpsMapComponent;
