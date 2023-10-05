import React from "react";
import "./Locations.css";
import { IvanLogo } from "../../assets/index.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../footer/Footer.js";
import { useInView } from "react-intersection-observer";
import { Installation } from "../../assets/index.js";
import { beforeRepair } from "../../assets/index.js";
import { afterRepair } from "../../assets/index.js";
import { maintenance } from "../../assets/index.js";
import { maintenance2 } from "../../assets/index.js";
import { business } from "../../assets/index.js";
import { emergency } from "../../assets/index.js";
import { delivary } from "../../assets/index.js";
import Reviews from "../reviews/Reviews.js";
import Contact from "../contact/Contact.js";

let img1 =
  "https://ivanfountainservice.com/wp-content/uploads/2016/10/fountain-service-riverside.jpg";

const phoneNumber = "(951) 837-8384";
const phoneLink = `tel:${phoneNumber}`;

const ServiceSection = ({ title, description, image1, image2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`Services ${inView ? "zoomIn" : "zoomOut"}`}>
      <div className="first-serv">
        <div className="image">
          <img alt="img" src={image1} />
          <img alt="img" src={image2} />
        </div>
        <div className="servText">
          <h2>{title}</h2>
          <p>{description}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

const ServiceSection2 = ({ title, description, image1, image2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`Services ${inView ? "zoomIn" : "zoomOut"}`}>
      <div className="first-serv">
        <div className="image">
          <img alt="img" src={image1} />
          <img alt="img" src={image2} />
        </div>
        <div className="servText">
          <h2>{title}</h2>
          <p>{description}</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

const Riverside = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section className="app">
      <div className="head">
        <Link
          to="/"
          className="headLogo"
          style={{ textDecoration: "none", fontSize: "10px" }}
        >
          <h1>IVAN'S FOUNTAIN SERVICES</h1>
        </Link>
        <a className="headNumber" href={phoneLink}>
          {phoneNumber}
        </a>
        <div className="navbarItems">
          <div className="navbarLogo">
            <Link to="/">
              <img src={IvanLogo} alt="IvanLogo" />
            </Link>
          </div>
          <div className="navLinks">
            <div className="icon-with-text">
              <Link to="/" className="navMenu">
                <i className="fas fa-house"></i>
                <h1>Home</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1> Riverside</h1>
        <p>Southern California’s Premier Fountain Service</p>
      </div>

      <div
        ref={ref}
        className={`imageContainer ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <br />
        <p>
          Ivan Fountain Service has been in business for over 12 years and
          proudly serves the Riverside, CA area. We offer many services beyond
          fountain installation. As a result, we are the number one in customer
          satisfaction for Fountain Maintenance, Repair and Installation
          Services. Fountain Cleaning and Fountain Repair are our specialty.
        </p>
        <br />
        <br />
        <br />
        <img src={img1} alt="Riverside" />
      </div>

      <Reviews />
      <Contact />
      <Footer />
    </section>
  );
};

export default Riverside;
