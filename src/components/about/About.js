import React from "react";
import "./About.css";
import { aboutIvan } from "../../assets/index.js";
import { useInView } from "react-intersection-observer";
import { FaTools, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi"; // Replaced FaFountain with water drop icon

const About = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="about-section"
      style={{ background: "#000" }}
    >
      <div
        ref={titleRef}
        className={`section-header ${titleInView ? "visible" : ""}`}
      >
        <h1>Meet Ivan Cornejo</h1>
        <p>Founder and Master Fountain Technician</p>
      </div>

      <div className="about-container">
        <div
          ref={contentRef}
          className={`about-content ${contentInView ? "visible" : ""}`}
        >
          <div className="about-text">
            <div className="about-intro">
              <h2>Transforming Water Features Across Southern California</h2>
              <div className="divider"></div>
            </div>

            <p className="highlight">
              With over{" "}
              <span className="white-text">
                15 years of specialized experience
              </span>
              , Ivan Cornejo has mastered the art of fountain restoration,
              transforming both{" "}
              <span className="white-text">small garden features</span>
              and{" "}
              <span className="white-text">
                large commercial installations
              </span>{" "}
              throughout Southern California.
            </p>

            <p>
              Ivan approaches each project as a unique{" "}
              <span className="blue-text">artistic challenge</span>, blending
              technical expertise with aesthetic vision. His work goes beyond
              mere functionality—it creates{" "}
              <span className="white-text">harmonious water features</span> that
              complement their surroundings and become focal points of beauty.
            </p>

            <p>
              What sets Ivan apart is his{" "}
              <span className="blue-text">commitment to preserving</span> the
              artistic and cultural essence of each location. Through his
              skilled hands, fountains become{" "}
              <span className="white-text">living testimonials</span> to
              Southern California's rich landscape, telling stories through the
              medium of water and light.
            </p>
          </div>

          <div className="about-photo">
            <div className="photo-frame">
              <img
                src={aboutIvan}
                alt="Ivan Cornejo, Fountain Restoration Expert"
                loading="lazy"
              />
              <div className="frame-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
