import React from 'react';
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import './map.css';
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" color='#009efb'/>
      <p className="pin-text">{text}</p>
    </div>
  )
    
const Map = ({ location, zoomLevel }) => {
    return (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
    );
}
  
    
    export default Map;