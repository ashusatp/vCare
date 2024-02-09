import React from "react";
import NavBar from "../components/Nav_bar";
import ServiceHeading from "../components/Service_heading";
import Gallary from "../components/Gallary";
import HUImgs from "../assets/H&U";
import HULogo from "../assets/H&U/logo2.jpg";
import About from "../components/Reach";
import Map from "../components/Map/Map";
import Footer from "../components/Footer";
import WhatsAppRenderer from "../components/Whatsapp/Whatsapp";
import { HUAbout } from "../data";
import "./css/pharma.css";
import Slider from "../components/Slider/Slider";
const HU = () => {
  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <NavBar title={"Vcare Haj and  Umrah "} logo={HULogo} />
      <ServiceHeading
        title={"Vcare Haj and  Umrah "}
        description={"Welcome to Vcare Haj and  Umrah "}
      />
      <Gallary images={HUImgs} />
      <ServiceHeading title={"ABOUT Vcare Haj and  Umrah"} />
      <Slider labsAbout={HUAbout} />
      <ServiceHeading title={"CONTACT US"} />
      <About
        address={"No 1, hinahana building velladichovilai"}
        phoneNum={"+91 9159333386, 04652463446"}
        emailId={"sdasdasdsa"}
      />
      <Map
        iframeSrc={
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.4819571828866!2d77.44424837500883!3d8.15409949187642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDknMTQuOCJOIDc3wrAyNic0OC42IkU!5e0!3m2!1sen!2sin!4v1707471136344!5m2!1sen!2sin"
        }
      />
      <WhatsAppRenderer whatsAppNumber={"+919159333386"} />
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

export default HU;
