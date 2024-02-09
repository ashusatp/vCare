import React from "react";
import "../Description/Description.css";
import "./SliderCard.css";
const SliderCard = ({ title, desc }) => {
  return (
    <div className="sliderCardWrapper">
      <div className="sliderCard">
        <h1>{title}</h1>
        <span className="text-gray-400 description">{desc}</span>
      </div>
    </div>
  );
};

export default SliderCard;
