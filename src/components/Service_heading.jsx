import React from "react";
import Proptypes from "prop-types";
import "./Description/Description.css";
const Service_heading = ({ title, description }) => {
  return (
    <React.Fragment>
      <section
        style={{
          width: "100%",
          display: "flex",
         
          justifyContent: "center",
        }}
      >
        <span
          data-aos="fade-in"
          data-aos-duration="375"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center text-center w-[40vw]"
        >
          <span className="text-2xl md:text-3xl font-[AltoneTrial-Reg] font-extrabold text-[#208796] mt-10 mb-5 text-nowrap ">
            {title}
          </span>
          <span className="text-gray-400 description">{description}</span>
        </span>
      </section>
    </React.Fragment>
  );
};

export default Service_heading;

// Service_heading.propTypes = {
//   title: Proptypes.string,
//   description: Proptypes.string
// }
