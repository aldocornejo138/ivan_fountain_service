import React from "react";
import Head from "../head/Head.js";
import "./Locations.css";
import { IvanLogo } from "../../assets/index.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Riverside = () => {
  return (
    <section className="backgroundMain">
      <Head />
      <div className="navbarItems">
        <div className="navbarLogo">
          <img src={IvanLogo} alt="IvanLogo" />
        </div>
        <div className="transparent-background"></div>

        <div className="navLinks">
          <div className="icon-with-text">
            <Link to="/" className="navMenu">
              <i className="fas fa-house"></i>
              <h1>Home</h1>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Riverside;
