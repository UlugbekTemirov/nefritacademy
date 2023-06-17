import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import locationIcon from "../../../assets/icons/placeholder.png";
import L from "leaflet";
//import map styles
import "leaflet/dist/leaflet.css";

function Map() {
  const position = [51.505, -0.09];
  const customIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  return (
    <MapContainer
      className="h-full z-10"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Amir Temur shox ko'chasi 108-uy</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
