import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./AddressMap.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize: [24.5, 41],
  iconAnchor: [24.5, 41],
  popupAnchor: [-12.25, -20.5],
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const AddressMap = ({ lat, lng }) => {
  return (
    <Map
      className="map"
      center={[
        lat.includes("hotlink-ok") ? 18.66 : lat,
        lng.includes("hotlink-ok") ? -72.55 : lng,
      ]}
      zoom={4}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[
          lat.includes("hotlink-ok") ? 18.66 : lat,
          lng.includes("hotlink-ok") ? -72.55 : lng,
        ]}
      >
        <Popup>We got you!!</Popup>
      </Marker>
    </Map>
  );
};

export default AddressMap;
