import React, { useState } from "react";
import phone from "../assets/phone.png";
import add from "../assets/add.png";
import email from "../assets/email.png";
const Reach = ({ phoneNum, address, emailId, whatsAppNumber }) => {
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!name || !contactEmail || !message) {
      alert("All fields are mendatory");
      return;
    }
    // Replace '1234567890' with the phone number or group ID you want to send the message to
    const recipient = whatsAppNumber;

    // Constructing the WhatsApp message
    const msg = encodeURIComponent(
      `Name: ${name}\nEmail: ${contactEmail}\nMessage: ${message}`
    );

    // Constructing the WhatsApp URL
    const whatsappUrl = `https://wa.me/${recipient}?text=${msg}`;

    // Opening WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };
  return (
    <React.Fragment>
      <section className="contact-us text-gray-600 body-font">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-8 md:py-6 mx-auto section"
          id="contact-form"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="375"
            data-aos-easing="ease-in-out"
            data-aos-anchor=".contact-us"
            className="md:w-1/3 w-full mr-28 flex flex-col justify-evenly"
          >
            <div className="flex h-24">
              <img className=" object-contain" src={add} alt="" srcset="" />
              <div className="flex flex-col mx-6">
                <span className="text-4xl font-bold text-[#4FA097]">
                  ADDRESS
                </span>
                <span className="text-lg text-gray-500">{address}</span>
              </div>
            </div>
            <div className="flex h-24 mt-6">
              <img className="object-contain" src={phone} alt="" srcset="" />
              <div className="flex flex-col mx-6">
                <span className="text-4xl font-bold text-[#4FA097]">PHONE</span>
                <span className="text-lg text-gray-500">{phoneNum}</span>
              </div>
            </div>
            <div className="flex h-24 mt-4 mb-6">
              <img className=" object-contain" src={email} alt="" srcSet="" />
              <div className="flex flex-col mx-6">
                <span className="text-4xl font-bold text-[#4FA097]">EMAIL</span>
                <span className="text-lg text-gray-500">{emailId}</span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="375"
            data-aos-easing="ease-in-out"
            data-aos-anchor=".contact-us"
            className="md:w-2/3 w-full mt-10 md:mt-0 p-10 bg-[#4FA097]"
          >
            <form action="#" method="post" id="submit-contact-form">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 py-4 text-lg text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required=""
                    value={name}
                    className="w-full bg-white border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                    style={{ color: "black" }}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 py-4 text-lg text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required=""
                    className="w-full bg-white border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                    value={contactEmail}
                    style={{ color: "black" }}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 py-4 text-lg text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required=""
                    className="w-full bg-white border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                    style={{ color: "black" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex text-white bg-[#FCC201] border-0 py-4 px-6 focus:outline-none hover:bg-[#fcc101d5] text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                  onClick={sendMessage}
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Reach;
