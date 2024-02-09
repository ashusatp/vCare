import React, { useState } from "react";
import SliderCard from "../SliderCard/SliderCard";
import "./Slider.css";
const Slider = ({labsAbout}) => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(labsAbout[0]);

  const handleNext = () => {
    let len = labsAbout.length;
    let num = index;
    if (index < len - 1) {
      setIndex(num + 1);
    } else {
      setIndex(0);
    }
    setData(labsAbout[index]);
  };

  const handlePrev = () => {
    let len = labsAbout.length;
    let num = index;
    if (index >= 1) {
      setIndex(num - 1);
    } else {
      setIndex(len - 1);
    }
    setData(labsAbout[index]);
  };

  return (
    <div className="sliderWrapper">
      <div className="sliderSection">
        <SliderCard title={data.title} desc={data.description} />
        <div className="sliderBtns">
          <button className="sliderCardButton" onClick={handlePrev}>
            Prev
          </button>
          <button className="sliderCardButton" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
