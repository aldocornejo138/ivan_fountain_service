import React from "react";
import "./Locations.css";
import { IvanLogo } from "../../assets/index.js";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../footer/Footer.js";

let img1 =
  "https://ivanfountainservice.com/wp-content/uploads/2016/10/fountain-service-riverside.jpg";

const phoneNumber = "(951) 837-8384";
const phoneLink = `tel:${phoneNumber}`;

const Riverside = () => {
  return (
    <section className="background-Main">
      <div className="head">
        <h1 className="headLogo">IVAN'S FOUNTAIN SERVICES</h1>
        <a className="headNumber" href={phoneLink}>
          {phoneNumber}
        </a>
        <div className="navbarItems">
          <div className="navbarLogo">
            <img src={IvanLogo} alt="IvanLogo" />
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

      <div className="content-container">
        <div className="image-container">
          <h2>Riverside Fountain Services </h2>
          <br />
          <br />
          <img src={img1} alt="Riverside" />
        </div>

        <div className="text-container">
          <div className="paragraph">
            <p1>
              Ivan Fountain Service has been in business for over 12 years and
              proudly serves the Riverside, CA area. We offer many services
              beyond fountain installation. As a result, we are the number one
              in customer satisfaction for Fountain Maintenance, Repair and
              Installation Services. Fountain Cleaning and Fountain Repair are
              our specialty.
            </p1>
            <br />
            <br />
            <h3>Fountain Installation Riverside</h3>
            <br />
            <p>
              One of the best ways to improve the esthetic of your property is
              by installing a decorative water fountain. Fountains add beautiful
              character to your courtyard, foyer and many other areas of your
              home. A fountain is more than just a decoration; it is a
              functioning piece of art. Fountains have a reputation for the
              soothing, calming sounds that the running water makes. Water
              fountains enjoy a long history of construction and use in many
              cultures all over the world. When you are ready to add a bit of
              classic beauty to your home with a fountain, Ivan Fountain Service
              is the first and only call you need to make in Riverside, CA.
            </p>
          </div>

          <div className="paragraph">
            <h3>Fountain Repair Riverside</h3>
            <br />
            <p>
              Our indoor and outdoor fountain repairs include: Leaks, Painting,
              Restoration, Foundations, Concrete Slab, Cracks in Ponds/ Tiers,
              Removal of old Fountains, Move Fountains to New Location and more.
            </p>
          </div>

          <div className="paragraph">
            <h3>Fountain Maintenance Riverside</h3>
            <br />
            <p>
              While Fountains are beautiful and a pleasure to own, maintenance
              can be somewhat labor intensive depending on the particular design
              of the fountain. This is why Ivan Fountain Service is there for
              you so that you do not have to waste your valuable time taking
              care of your Fountain. Because each fountain is unique, one of our
              Fountain experts must ascertain the specific details of your
              fountain. Call Ivan Fountain services today to talk to a
              representative regarding any of your Fountain needs.
            </p>
          </div>

          <div className="paragraph">
            <h3>Fountain Restoration Riverside</h3>
            <br />
            <p>
              Already have a fountain on your property that does not work
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
              all associated pumps and hoses currently offered by the industry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Riverside;
