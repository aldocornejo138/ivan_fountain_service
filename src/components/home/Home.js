import React from "react";
import Head from "../head/Head.js";
import Navbar from "../navbar/Navbar.js";
import Hero from "../hero/Hero.js";
import Service from "../features/Service.js";
import Gallery from "../gallery/Gallery.js";
import About from "../about/About.js";
import Reviews from "../reviews/Reviews.js";
import Contact from "../contact/Contact.js";
import Footer from "../footer/Footer.js";
import Faq from "../faq/Faq.js";
import Locations from "../locations/Locations.js";

const Home = () => {
  return (
    <section id="Home" className="App">
      <Head />
      <Navbar />
      <Hero />
      <Service />
      <Gallery />
      <About />
      <Reviews />
      <Faq />
      <Locations />
      <Contact />
      <Footer />
    </section>
  );
};

export default Home;
