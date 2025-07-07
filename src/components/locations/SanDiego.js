import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import components
import Footer from "../footer/Footer.js";
import Reviews from "../reviews/Reviews.js";
import Contact from "../contact/Contact.js";

// Import assets
import {
  IvanLogo,
  Installation,
  beforeRepair,
  afterRepair,
  maintenance,
  maintenance2,
  business,
  emergency,
  delivary,
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
  sliderImg8,
  sliderImg9,
  sliderImg10,
} from "../../assets/index.js";
import imageSlide2 from "./locationData.js";

// Import CSS
import "./Locations.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "@fortawesome/fontawesome-free/css/all.css";

const phoneNumber = "(951) 837-8384";
const phoneLink = `tel:${phoneNumber}`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Define all images with dimensions
const sliderImages = [
  {
    src: sliderImg1,
    width: 624,
    height: 831,
    alt: "San Diego Fountain Service",
  },
  {
    src: sliderImg2,
    width: 715,
    height: 939,
    alt: "San Diego Fountain Maintenance",
  },
  {
    src: sliderImg3,
    width: 594,
    height: 787,
    alt: "San Diego Fountain Installation",
  },
  {
    src: sliderImg4,
    width: 786,
    height: 987,
    alt: "San Diego Fountain Repair",
  },
  {
    src: sliderImg5,
    width: 611,
    height: 798,
    alt: "San Diego Fountain Restoration",
  },
  {
    src: sliderImg6,
    width: 781,
    height: 1033,
    alt: "San Diego Fountain Delivery",
  },
  {
    src: sliderImg7,
    width: 1366,
    height: 1764,
    alt: "San Diego Fountain Replacement",
  },
  {
    src: sliderImg8,
    width: 757,
    height: 995,
    alt: "San Diego Fountain Contractor",
  },
  {
    src: sliderImg9,
    width: 600,
    height: 775,
    alt: "San Diego CA Fountain Maintenance",
  },
  {
    src: sliderImg10,
    width: 755,
    height: 995,
    alt: "San Diego CA Fountain Installation",
  },
];

const serviceImages = {
  delivary: { src: delivary, width: 1500, height: 2000 },
  installation: { src: Installation, width: 1500, height: 2000 },
  beforeRepair: { src: beforeRepair, width: 1029, height: 1831 },
  afterRepair: { src: afterRepair, width: 2048, height: 2506 },
  maintenance: { src: maintenance, width: 1440, height: 1920 },
  maintenance2: { src: maintenance2, width: 1500, height: 2000 },
  emergency: { src: emergency, width: 1150, height: 2048 },
  business: { src: business, width: 1474, height: 2394 },
};

const ServiceSection = ({
  title,
  description,
  image1,
  image2,
  alt1,
  alt2,
  width1,
  height1,
  width2,
  height2,
  isFlipped = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="Services"
    >
      <div className={`firstServ ${isFlipped ? "flipped" : ""}`}>
        <div className="image">
          <motion.img
            variants={scaleIn}
            alt={alt1}
            src={image1}
            title={alt1}
            width={width1}
            height={height1}
            loading="lazy"
          />
          <motion.img
            variants={scaleIn}
            alt={alt2}
            src={image2}
            title={alt2}
            width={width2}
            height={height2}
            loading="lazy"
          />
        </div>
        <motion.div variants={fadeIn} className="servText">
          <h2>{title}</h2>
          <p>{description}</p>
          <br />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SanDiego = () => {
  const [currentState, setCurrentState] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prev) => (prev === 3 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide2[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    borderRadius: "25px",
  };

  return (
    <section className="app">
      <Helmet>
        <title>Fountain Service San Diego - Ivan Fountain Service</title>
        <meta
          name="description"
          content="Ivan Fountain Service has been in business for over 12 years and proudly serves San Diego, CA area."
        />
        <meta
          name="keywords"
          content="Fountain Contractor San Diego, Fountain Contractor San Diego CA, Fountain Contractors San Diego, Fountain Contractors San Diego CA, Fountain Delivery San Diego, Fountain Delivery San Diego CA, Fountain Install San Diego, Fountain Install San Diego CA, Fountain Installation San Diego, Fountain Installation San Diego CA, Fountain Maintenance San Diego, Fountain Maintenance San Diego CA, Fountain Service San Diego, Fountain Service San Diego CA, Fountain Services San Diego, Fountain Services San Diego CA, Home and Garden Maintenance San Diego, Home and Garden Maintenance San Diego CA, Waterfalls San Diego, Waterfalls San Diego CA"
        />
        <link rel="canonical" href="/fountain-service-San Diego" />
      </Helmet>
      <div className="head">
        <Link to="/" className="headLogo">
          <h2>IVAN'S FOUNTAIN SERVICES</h2>
        </Link>
        <a className="headNumber" href={phoneLink}>
          {phoneNumber}
        </a>
      </div>
      <div className="countinerStyle">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentState}
            style={bgImageStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="transparent-background"></div>
      </div>
      <div className="navbarItems">
        <div className="navbarLogo">
          <Link to="/">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
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
              <h2>Home</h2>
            </Link>
          </div>
        </div>
      </div>
      <button className="location-hero-button" onClick={scrollToContact}>
        Send a Message
      </button>
      ;
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="title"
      >
        <h1>Fountain Services in San Diego</h1>
        <p>Southern California's Premier Fountain Service</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="imageContainer"
      >
        <p>
          Ivan Fountain Service has been in business for over 12 years and
          proudly serves San Diego, CA area. We offer many services beyond
          fountain installation. As a result, we are the number one in customer
          satisfaction for Fountain Maintenance, Repair and Installation
          Services. Fountain Cleaning and Fountain Repair are our specialty.
        </p>

        <div className="galleryContainer">
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
            {sliderImages.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={img.src}
                  alt={img.alt}
                  title={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="galleryButton"
          >
            <a
              href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
              className="link-style"
            >
              <h2>Full Gallery</h2>
            </a>
          </motion.button>
        </div>
      </motion.div>
      <ServiceSection
        title="Fountain Installation San Diego"
        description="One of the best ways to improve the esthetic of your property is
              by installing a decorative water fountain. Fountains add beautiful
              character to your courtyard, foyer and many other areas of your
              home. A fountain is more than just a decoration; it is a
              functioning piece of art. Fountains have a reputation for the
              soothing, calming sounds that the running water makes. Water
              fountains enjoy a long history of construction and use in many
              cultures all over the world. When you are ready to add a bit of
              classic beauty to your home with a fountain, Ivan Fountain Service
              is the first and only call you need to make in San Diego, CA."
        image1={serviceImages.delivary.src}
        image2={serviceImages.installation.src}
        alt1="San Diego Fountain Delivery"
        alt2="San Diego Fountain Installation"
        width1={serviceImages.delivary.width}
        height1={serviceImages.delivary.height}
        width2={serviceImages.installation.width}
        height2={serviceImages.installation.height}
        isFlipped={false}
      />
      <ServiceSection
        title="Fountain Repair San Diego"
        description="Our indoor and outdoor fountain repairs include: Leaks, Painting,
              Restoration, Foundations, Concrete Slab, Cracks in Ponds/ Tiers,
              Removal of old Fountains, Move Fountains to New Location and more."
        image1={serviceImages.beforeRepair.src}
        image2={serviceImages.afterRepair.src}
        alt1="San Diego Fountain Repair"
        alt2="San Diego CA Fountain Repair"
        width1={serviceImages.beforeRepair.width}
        height1={serviceImages.beforeRepair.height}
        width2={serviceImages.afterRepair.width}
        height2={serviceImages.afterRepair.height}
        isFlipped={true}
      />
      <ServiceSection
        title="Fountain Maintenance San Diego"
        description="While Fountains are beautiful and a pleasure to own, maintenance
              can be somewhat labor intensive depending on the particular design
              of the fountain. This is why Ivan Fountain Service is there for
              you so that you do not have to waste your valuable time taking
              care of your Fountain. Because each fountain is unique, one of our
              Fountain experts must ascertain the specific details of your
              fountain. Call Ivan Fountain services today to talk to a
              representative regarding any of your Fountain needs."
        image1={serviceImages.maintenance.src}
        image2={serviceImages.maintenance2.src}
        alt1="San Diego Fountain Maintenance"
        alt2="San Diego CA Fountain Maintenance"
        width1={serviceImages.maintenance.width}
        height1={serviceImages.maintenance.height}
        width2={serviceImages.maintenance2.width}
        height2={serviceImages.maintenance2.height}
        isFlipped={false}
      />
      <ServiceSection
        title="Fountain Restoration San Diego"
        description="Already have a fountain on your property that does not work
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
        image1={serviceImages.emergency.src}
        image2={serviceImages.business.src}
        alt1="San Diego Fountain Restoration"
        alt2="San Diego Fountain Restoration"
        width1={serviceImages.emergency.width}
        height1={serviceImages.emergency.height}
        width2={serviceImages.business.width}
        height2={serviceImages.business.height}
        isFlipped={true}
      />
      <Reviews />
      <Contact />
      <Footer />
    </section>
  );
};

export default SanDiego;
