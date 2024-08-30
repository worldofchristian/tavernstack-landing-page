import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultIcon = icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconAnchor: [12, 41],
  iconSize: [25, 41]
});

const UserMap = () => {
  const centerCoordinates = [49.278966639471584, -123.1217565156789];

  return (
    <div className="relative z-0">
        <MapContainer 
        center={centerCoordinates} 
        zoom={18} 
        className='rounded-2xl w-full'
        style={{ height: "200px", width: "280px" }}
        dragging={false}
        scrollWheelZoom={false}
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            className='text-xs'
        />
        <Marker position={centerCoordinates} icon={defaultIcon}></Marker>
        </MapContainer>
    </div>
  );
};

export default UserMap;