import Head from "./components/head/Head.js";
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import Service from "./components/features/Service.js";
import Gallery from "./components/gallery/Gallery.js";
import About from "./components/about/About.js";
import Reviews from "./components/reviews/Reviews.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";
import Faq from "./components/faq/Faq.js";

function App() {
  return (
    <div className="App">
      <Head />
      <Navbar />
      <Hero />
      <Service />
      <Gallery />
      <Faq />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
