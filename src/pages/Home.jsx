import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { home } from "../data";
import Card_Home from "../components/Card_Home";
import homeImg from "../assets/logo.png";
const Home = () => {
  console.log(home);
  return (
    <React.Fragment>
      {/* Not Resuing Hero Section So not making it as component */}
      <section className="hero_section w-screen">
        <div
          className=" h-[48vh] md:h-[50vh] lg:h-[80vh] bg-cover lg:bg-cover lg:bg-no-repeat flex items-center  flex-col rounded-b-[30%] text-white"
          style={{ backgroundImage: "url(img/d8.jpg)" }}
        >
          <div className="w-full h-full flex  items-center flex-col bg-[#4169E1] bg-opacity-75 rounded-b-[30%]">
            <Link to="/">
              <div className="flex items-center flex-col pt-10">
                <img className="w-20 md:w-24" src={homeImg} alt="logo" />
                <span className="text-2xl md:text-3xl font-[AltoneTrial-Reg] font-extrabold">
                  VCARE GROUPS
                </span>
              </div>
            </Link>
            {/* <Nav /> */}
            <div className="flex items-center flex-col">
              <div
                className="font-semibold pt-6 pb-4"
                style={{ textShadow: "rgba(0, 0, 0, 0.514) 0px 3px 6px" }}
              >
                <span className="text-1xl lg:text-4xl text-[#FCC201]">
                  Quality, Innovation & Accessibility
                </span>{" "}
                {/* <span className="text-2xl lg:text-6xl text-[#FCC201]">
                  Pharmacy!
                </span> */}
              </div>
              <div className="text-lg lg:text-2xl w-[80%] md:w-[50%] lg:w-[74%] text-center">
                We are all in for better health & Where everyone walks out with
                a good Smile
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row w-full justify-evenly items-center lg:mt-[-32vh]">
        {home.map((card, idx) => {
          return (
            <Card_Home
              key={idx}
              image={card.image}
              description={card.description}
              link={card.link}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
