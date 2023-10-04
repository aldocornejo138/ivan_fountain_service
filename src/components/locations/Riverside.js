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
    <section className="background-Main">
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
        <p1>
          Ivan Fountain Service has been in business for over 12 years and
          proudly serves the Riverside, CA area. We offer many services beyond
          fountain installation. As a result, we are the number one in customer
          satisfaction for Fountain Maintenance, Repair and Installation
          Services. Fountain Cleaning and Fountain Repair are our specialty.
        </p1>
        <br />
        <br />
        <br />
        <img src={img1} alt="Riverside" />
      </div>

      <ServiceSection
        title="Fountain Installation Riverside"
        description="One of the best ways to improve the esthetic of your property is
              by installing a decorative water fountain. Fountains add beautiful
              character to your courtyard, foyer and many other areas of your
              home. A fountain is more than just a decoration; it is a
              functioning piece of art. Fountains have a reputation for the
              soothing, calming sounds that the running water makes. Water
              fountains enjoy a long history of construction and use in many
              cultures all over the world. When you are ready to add a bit of
              classic beauty to your home with a fountain, Ivan Fountain Service
              is the first and only call you need to make in Riverside, CA."
        image1={delivary}
        image2={Installation}
      />

      <ServiceSection2
        title="Fountain Repair Riverside"
        description="Our indoor and outdoor fountain repairs include: Leaks, Painting,
              Restoration, Foundations, Concrete Slab, Cracks in Ponds/ Tiers,
              Removal of old Fountains, Move Fountains to New Location and more."
        image1={beforeRepair}
        image2={afterRepair}
      />

      <ServiceSection
        title="Fountain Maintenance Riverside"
        description=" While Fountains are beautiful and a pleasure to own, maintenance
              can be somewhat labor intensive depending on the particular design
              of the fountain. This is why Ivan Fountain Service is there for
              you so that you do not have to waste your valuable time taking
              care of your Fountain. Because each fountain is unique, one of our
              Fountain experts must ascertain the specific details of your
              fountain. Call Ivan Fountain services today to talk to a
              representative regarding any of your Fountain needs."
        image1={maintenance}
        image2={maintenance2}
      />

      <ServiceSection2
        title="Fountain Restoration Riverside"
        description=" Already have a fountain on your property that does not work
              anymore or is weather worn and looking shabby? Call Ivan Fountain
              today for a quick estimate on getting that old fountain restored
              to its original beauty and functionality. Our highly experienced
              personnel can refinish your old fountain with a wide variety of
              exquisite finish styles including Rustico, Bronze, Travertine, and
              Petina. Ivan Fountain Service will resurface your fountain and
              reseal any old or leaking seams. Some of the materials used to
              fabricate Water Fountains need to be properly waterproofed. Ivan
              Fountain Service employees are experts in this procedure. We are
              thoroughly versed in the installation, operation, and repair of
              all associated pumps and hoses currently offered by the industry."
        image1={emergency}
        image2={business}
      />
      <Reviews />
      <Contact />
      <Footer />
    </section>
  );
};

export default Riverside;
