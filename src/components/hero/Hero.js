import "./HeroStyles.css";
import { useState, useEffect } from "react";
import imageSlide from "./data";

function Hero(props) {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState(currentState === 3 ? 0 : currentState + 1);
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%", // Fixed typo: changed weight to width
    transition: "background-image 3s ease",
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="backgroundMain">
      <div className="countiner-style">
        <div style={bgImageStyle}></div>
        <div className="description">
          <div>
            <h2>{imageSlide[currentState].title}</h2>
            <h1>{imageSlide[currentState].body}</h1>
          </div>
        </div>
        <div className="transparent-background"></div>

        <div className="hero-content-wrapper">
          {" "}
          {/* New wrapper */}
          <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </div>
          <button className="hero-button" onClick={scrollToContact}>
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
