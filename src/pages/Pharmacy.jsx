import React from "react";
import NavBar from "../components/Nav_bar";
import ServiceHeading from "../components/Service_heading";
import Gallary from "../components/Gallary/Gallery";
import pharmaImgs from "../assets/PharImg";
import pharmaLogo from "../assets/PharImg/pharmaLogo.jpg";
import About from "../components/Reach";
import Map from "../components/Map/Map";
import Footer from "../components/Footer";
import WhatsAppRenderer from "../components/Whatsapp/Whatsapp";
import './css/pharma.css'
const Pharma = () => {
  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <NavBar title={"VCARE PHARMA"} logo={pharmaLogo} />
      <ServiceHeading
        title={"VCARE PHARMA"}
        description={
          "We are all in for better health & Where everyone walks out with a good Smile "
        }
      />
      <Gallary images={pharmaImgs} />
      <ServiceHeading title={"ABOUT VCARE PHARMA"} />
      <div className="about">
        <span className="text-gray-400 description">
          V Care Pharma is a leading and largest pharmaceutical store. We
          provide quality prescribed products only.
        </span>
        <span className="text-gray-400 description">
          We have qualified, Registered well trained pharmacists to help all of
          you. We are using the Advance system to identify the expiry of
          medicines before sale and the availability of stock of medicines in
          our stores.
        </span>
        <span className="text-gray-400 description">
          Our Stores have the drugs as per FDA (Food and Drug Administration)
          norms. We provide a large variety of medicines, Surgical items, and
          Natural Health Care products in our Stores all over the world.
        </span>
      </div>
      <ServiceHeading title={"CONTACT US"} />
      <About
        address={"No 1, hinahana building velladichovilai"}
        phoneNum={"+91 9159333386, 04652463446"}
        emailId={"sdasdasdsa"}
        whatsAppNumber={"+917289008054"}
      />
      <Map
        iframeSrc={
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.4819571828866!2d77.44424837500883!3d8.15409949187642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDknMTQuOCJOIDc3wrAyNic0OC42IkU!5e0!3m2!1sen!2sin!4v1707468697595!5m2!1sen!2sin"
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

export default Pharma;
