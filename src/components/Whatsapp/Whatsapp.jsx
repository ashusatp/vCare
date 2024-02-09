import React from "react";
import "./Whatsapp.css";
import whatsImg from "../../assets/WhatsApp_icon.png";

const WhatsAppRenderer = ({whatsAppNumber}) => {
  const renderToWhatsApp = () => {
    // Replace '1234567890' with the phone number or group ID you want to send the message to
    const recipient = whatsAppNumber;

    // Constructing the WhatsApp message
    const message = encodeURIComponent(
      "Hello!"
    );

    // Constructing the WhatsApp URL
    const whatsappUrl = `https://wa.me/${recipient}?text=${message}`;

    // Opening WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-icon-container" onClick={renderToWhatsApp}>
      {/* WhatsApp icon */}
      <img src={whatsImg} alt="WhatsApp" className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppRenderer;
