import React from "react";
import NavBar from "../components/Nav_bar";
import ServiceHeading from "../components/Service_heading";
import Gallary from "../components/Gallary/Gallery";
import labImgs from "../assets/LabImg";
import labLogo from "../assets/LabImg/labLogo.jpg";
import Slider from "../components/Slider/Slider";
import About from "../components/Reach";
import Map from "../components/Map/Map";
import Footer from "../components/Footer";
import WhatsAppRenderer from "../components/Whatsapp/Whatsapp";
import { labsAbout } from "../data";
const Labs = () => {
  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <NavBar title={"VCARE LABS"} logo={labLogo} />
      <ServiceHeading
        title={"VCARE MEDICAL LABS"}
        description={
          "Welcome to Vcare Medical Lab, where cutting-edge technology and compassionate care come together. As a leading provider of diagnostic services, we are dedicated to offering accurate and reliable results to support your healthcare needs"
        }
      />
      <Gallary images={labImgs} />
      <ServiceHeading title={"ABOUT VCARE MEDICAL LABS"} />
      <Slider labsAbout={labsAbout} />
      <ServiceHeading title={"CONTACT US"} />
      <About address={"ABC"} phone={"333333333333"} emailId={"sdasdasdsa"} />
      <Map
        iframeSrc={
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1369.716536004454!2d77.4449749344631!3d8.156378508038312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDknMjQuNSJOIDc3wrAyNic0NC41IkU!5e0!3m2!1sen!2sin!4v1707410379146!5m2!1sen!2sin"
        }
      />
      <WhatsAppRenderer whatsAppNumber={"123456"} />
      <Footer
        title={"VCARE MEDICAL LABS"}
        contact1={"+91 6385893387"}
        contact2={"04652463447"}
        email={"email@gmail.com"}
        address1={"address1"}
        address2={"address2"}
      />
    </div>
  );
};

export default Labs;
