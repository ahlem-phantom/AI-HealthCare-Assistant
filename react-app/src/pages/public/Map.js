import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

const Map = ({ location, zoomLevel }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div className="p-10 text-center text-red-500 font-bold">Error loading maps</div>;
  if (!isLoaded) return <div className="p-10 text-center text-slate-400 animate-pulse font-medium">Loading Map...</div>;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center font-display">Come Visit Us At Our Campus</h2>

        <div className="h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 ring-8 ring-slate-50">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={zoomLevel}
            options={{
              disableDefaultUI: false,
              zoomControl: true,
              styles: [
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }]
                }
              ]
            }}
          >
            <Marker 
              position={location} 
              title={location.address}
              animation={window.google?.maps.Animation.DROP}
            />
          </GoogleMap>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Map);
