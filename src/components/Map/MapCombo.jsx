import React from "react";
import Map from "./Map";
import Reach from "../Reach";
import "./MapCombo.css";
const MapCombo = () => {
  return (
    <div className="mapContainer">
      <div className="mapCombo">
        <Map />
        <Reach />
      </div>
    </div>
  );
};

export default MapCombo;
