import React from "react";
import Globe from "react-globe";
import "./GeocodeGlobe.scss";
import * as THREE from "three"; // import Three.js
import { Globe as GlobeJS } from "three-globe"; // import Three Globe
import { geoOrthographic } from "d3-geo"; // import D3 Geo

const locations = [
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: 40.7128, lng: -74.006, label: "New York" },
  { lat: 35.6895, lng: 139.6917, label: "Tokyo" },
];

const GeocodeGlobe = () => {
  return (
    <Globe
      height="400px"
      globeOptions={{
        texture: "https://unpkg.com/three-globe/example/img/earth-night.jpg",
        glowCoefficient: 0.1,
        glowColor: "#fff",
        glowPower: 3,
        enableGlobeGlow: true,
        cloudsOpacity: 0.4,
        // ...other globe options
      }}
      markers={locations.map((location) => ({
        ...location,
        color: "red",
      }))}
    />
  );
};

export default GeocodeGlobe;
