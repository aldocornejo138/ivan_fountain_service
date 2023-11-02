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
import imageSlide2 from "./locationData.js";
import { useState, useEffect } from "react";

import { sliderImg1 } from "../../assets/index.js";
import { sliderImg2 } from "../../assets/index.js";
import { sliderImg3 } from "../../assets/index.js";
import { sliderImg4 } from "../../assets/index.js";
import { sliderImg5 } from "../../assets/index.js";
import { sliderImg6 } from "../../assets/index.js";
import { sliderImg7 } from "../../assets/index.js";
import { sliderImg8 } from "../../assets/index.js";
import { sliderImg9 } from "../../assets/index.js";
import { sliderImg10 } from "../../assets/index.js";

import "../gallery/Gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Helmet } from "react-helmet-async";

const phoneNumber = "(951) 837-8384";
const phoneLink = `tel:${phoneNumber}`;

const ServiceSection = ({
  title,
  description,
  image1,
  image2,
  alt1,
  alt2,
  height1,
  width1,
  height2,
  width2,
  Title1,
  Title2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`Services ${inView ? "zoomIn" : "zoomOut"}`}>
      <div className="firstServ">
        <div className="image">
          <img
            alt={alt1}
            src={image1}
            width={width1}
            height={height1}
            title={Title1}
            loading="lazy"
          />
          <img
            alt={alt2}
            src={image2}
            width={width2}
            height={height2}
            title={Title2}
            loading="lazy"
          />
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

const ServiceSection2 = ({
  title,
  description,
  image1,
  image2,
  alt1,
  alt2,
  height1,
  width1,
  height2,
  width2,
  Title1,
  Title2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`Services ${inView ? "zoomIn" : "zoomOut"}`}>
      <div className="firstServ">
        <div className="image">
          <img
            alt={alt1}
            src={image1}
            width={width1}
            height={height1}
            title={Title1}
            loading="lazy"
          />
          <img
            alt={alt2}
            src={image2}
            width={width2}
            height={height2}
            title={Title2}
            loading="lazy"
          />
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

const PalmSprings = (props) => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide2[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    weight: "100%",
    transition: "background-image 3s ease",
    borderRadius: "25px",
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section className="app">
      <Helmet>
        <title>Fountain Service Palm Springs - Ivan Fountain Service</title>
        <meta
          name="description"
          content="Ivan Fountain Service has been in business for over 12 years and proudly serves Palm Springs, CA area."
        />
        <link rel="canonical" href="/fountain-service-Palm Springs" />
      </Helmet>

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
      </div>
      <div className="countinerStyle">
        <div style={bgImageStyle}></div>
        <div className="transparent-background"></div>
      </div>
      <div style={bgImageStyle}></div>
      <div className="navbarItems">
        <div className="navbarLogo">
          <Link to="/">
            <img
              src={IvanLogo}
              alt="IvanLogo"
              title="Ivan Fountain Service Logo"
              width="1208"
              height="1118"
              loading="eager"
            />
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

      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1> Palm Springs</h1>
        <p>Southern California’s Premier Fountain Service</p>
      </div>
      <div
        ref={ref}
        className={`imageContainer ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <br />
        <p>
          Ivan Fountain Service has been in business for over 12 years and
          proudly serves Palm Springs, CA area. We offer many services beyond
          fountain installation. As a result, we are the number one in customer
          satisfaction for Fountain Maintenance, Repair and Installation
          Services. Fountain Cleaning and Fountain Repair are our specialty.
        </p>

        <div
          ref={ref}
          className={`galleryContainer ${inView ? "zoomIn" : "zoomOut"}`}
        >
          <div></div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img
                src={sliderImg1}
                alt="Palm Springs Fountain Service"
                title="Palm Springs Fountain Service"
                width="624"
                height="831"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg2}
                alt="Palm Springs Fountain Maintenance"
                title="Palm Springs Fountain Maintenance"
                width="715"
                height="939"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg3}
                alt="Palm Springs Fountain Installation"
                title="Palm Springs Fountain Installation"
                width="594"
                height="787"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg4}
                alt="Palm Springs Fountain Repair"
                title="Palm Springs Fountain Repair"
                width="786"
                height="987"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg5}
                alt="Palm Springs Fountain Restoration"
                title="Palm Springs Fountain Restoration"
                width="611"
                height="798"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg6}
                alt="Palm Springs Fountain Delivary"
                title="Palm Springs Fountain Delivary"
                width="781"
                height="1033"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg7}
                alt="Palm Springs Fountain Replacement"
                title="Palm Springs Fountain Replacement"
                width="1366"
                height="1764"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg8}
                alt="Palm Springs Fountain Contractor"
                title="Palm Springs Fountain Contractor"
                width="757"
                height="995"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg9}
                alt="Palm Springs CA Fountain Maintenance"
                title="Palm Springs CA Fountain Maintenance"
                width="600"
                height="775"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sliderImg10}
                alt="Palm Springs CA Fountain Installation"
                title="Palm Springs CA Fountain Installation"
                width="755"
                height="995"
                loading="lazy"
              />
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>
          <button className="galleryButton">
            <a
              href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
              className="link-style"
            >
              <h2>Full Gallery</h2>
            </a>
          </button>
        </div>
      </div>

      <ServiceSection
        title="Fountain Installation Palm Springs"
        description="One of the best ways to improve the esthetic of your property is
              by installing a decorative water fountain. Fountains add beautiful
              character to your courtyard, foyer and many other areas of your
              home. A fountain is more than just a decoration; it is a
              functioning piece of art. Fountains have a reputation for the
              soothing, calming sounds that the running water makes. Water
              fountains enjoy a long history of construction and use in many
              cultures all over the world. When you are ready to add a bit of
              classic beauty to your home with a fountain, Ivan Fountain Service
              is the first and only call you need to make in Palm Springs, CA."
        image1={delivary}
        image2={Installation}
        alt1="Palm Springs Fountain Delivery"
        alt2="Palm Springs Fountain Installation"
        width1="1500"
        height1="2000"
        width2="1500"
        height2="2000"
        Title1="Palm Springs Fountain Installation"
        Title2="Palm Springs CA Fountain Delivery"
      />

      <ServiceSection2
        title="Fountain Repair Palm Springs"
        description="Our indoor and outdoor fountain repairs include: Leaks, Painting,
              Restoration, Foundations, Concrete Slab, Cracks in Ponds/ Tiers,
              Removal of old Fountains, Move Fountains to New Location and more."
        image1={beforeRepair}
        image2={afterRepair}
        alt1="Palm Springs Fountain Repair"
        alt2="Palm Springs Ca Fountain Repair"
        width1="1029"
        height1="1831"
        width2="2048"
        height2="2506"
        Title1="Palm Springs Fountain Repair"
        Title2="Palm Springs CA Fountain Repair"
      />

      <ServiceSection
        title="Fountain Maintenance Palm Springs"
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
        alt1="Palm Springs Fountain Maintenance"
        alt2="Palm Springs CA Fountain Maintenance"
        width1="1440"
        height1="1920"
        width2="1500"
        height2="2000"
        Title1="Palm Springs Fountain Maintenance"
        Title2="Palm Springs CA Fountain Maintenance"
      />

      <ServiceSection2
        title="Fountain Restoration Palm Springs"
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
        alt1="Palm Springs Fountain Restoration"
        alt2="Palm Springs Fountain Restoration"
        width1="1150"
        height1="2048"
        width2="1474"
        height2="2394"
        Title1="Palm Springs Fountain Restoration"
        Title2="Palm Springs CA Fountain Restoration"
      />
      <Reviews />
      <Contact />
      <Footer />
    </section>
  );
};

export default PalmSprings;
