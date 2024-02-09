import React from "react";

const Map = ({iframeSrc}) => {
  return (
    <div
      style={{
        maxWidth: "90%",
        width: "80%",
        margin: "0 auto",
        marginBottom: "40px",
      }}
    >
      {/* Container with a width of 80% and maximum width of 90%, centered */}
      <div
        style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
      >
        {/* 16:9 aspect ratio (height/width * 100) */}
        <iframe
          src={iframeSrc}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
