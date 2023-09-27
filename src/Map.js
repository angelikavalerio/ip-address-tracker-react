import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import "leaflet/dist/leaflet.css"
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const customIcon = new Icon({
  iconUrl: require('./images/location.png'),
  iconSize: [22, 30]
})

export default function Map({ coordinates }) {

  return (
    <MapContainer center={[34.04915, -118.09462]} zoom={20}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coordinates} icon={customIcon}>
        <Popup>
          This is the location.
        </Popup>
      </Marker>
      <RecenterAutomatically coordinates={coordinates} />
    </MapContainer>
  );
}

const RecenterAutomatically = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coordinates);
  }, [coordinates, map]);
  return null;
}