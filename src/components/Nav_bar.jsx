import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Nav_bar = ({ title, logo }) => {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    myUser,
    setIsAuthenticated,
    setMyUser,
    auth,
    signOut,
  } = useUserContext();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        setMyUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <React.Fragment>
      <section className="flex justify-center flex-col items-center w-full text-white">
        <div className="w-full h-full flex flex-row justify-between pr-10 pl-10 pt-5 pb-5 items-center bg-[#4169E1] bg-opacity-65">
          <div className="flex items-center logo-container">
            <img className="w-25 md:w-24" src={logo} alt="logo" />
          </div>
          <div className="flex items-center " style={{gap:"20px"}}>
            {/* Home button */}
            <Link to="/" className="nav-button2 home-button md:text-xl md:p-2">
              Home
            </Link>
            <button className="nav-button logout md:text-xl md:p-2" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Nav_bar;
