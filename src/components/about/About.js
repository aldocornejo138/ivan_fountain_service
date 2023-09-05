import React from "react";
import "./About.css";
import { aboutIvan } from "../../assets/index.js";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section id="about">
      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1>Meet Ivan</h1>
        <p>Founder and CEO</p>
      </div>
      <div ref={ref}>
        {inView ? (
          <div className="about">
            <div className="about-content zoomInRight">
              <div className="about-text">
                <h1>Ivan Cornejo</h1>
                <p>
                  With a distinguished track record spanning over 12 years, Ivan
                  Cornejo stands as a master in the art of beautifully restoring
                  fountains. His expertise extends across the spectrum of
                  fountain types, catering to both small and large outdoor
                  fountains alike. <br /> <br />
                </p>
                <p>
                  In every corner of Southern California, Ivan Cornejo's touch
                  is one of transformation. His restoration skills evolve into a
                  medium that transcends the functional aspects of fountains,
                  elevating them to expressions of artistry. With every
                  restoration project, he harmonizes the visual splendor of the
                  water feature with the surrounding environment, forming a
                  narrative that resonates with the very soul of the region.{" "}
                  <br /> <br />
                </p>
                <p>
                  Ivan Cornejo's journey is not merely about restoration; it's
                  about enrichment. His work redefines the relationship between
                  fountains and their settings, creating a symphony where water
                  dances in tune with the landscapes, architecture, and stories
                  that define Southern California. This profound dedication to
                  his craft has established Ivan Cornejo as a true luminary in
                  the field of fountain restoration, setting a standard that
                  elevates every drop of water to a canvas of life and beauty.{" "}
                  <br /> <br />
                </p>
                <p>
                  As the CEO of our fountain company, Ivan Cornejo leads with a
                  passion that transcends the ordinary. His vision extends
                  beyond business; it embodies a commitment to preserving the
                  artistic and cultural essence of each location. Through his
                  hands, fountains become living testimonials to the rich
                  tapestry of Southern California, and his legacy stands as an
                  enduring testament to the power of artistry and dedication in
                  revitalizing the heart of our surroundings.
                </p>
              </div>
            </div>
            <div className="about-photo zoomInLeft">
              <img src={aboutIvan} alt="Ivan" />
            </div>
          </div>
        ) : (
          <div className="about">
            <div className="about-content zoomOutRight">
              <div className="about-text">
                <h1>Ivan Cornejo</h1>
                <p>
                  With a distinguished track record spanning over 12 years, Ivan
                  Cornejo stands as a master in the art of beautifully restoring
                  fountains. His expertise extends across the spectrum of
                  fountain types, catering to both small and large outdoor
                  fountains alike. <br /> <br />
                </p>
                <p>
                  In every corner of Southern California, Ivan Cornejo's touch
                  is one of transformation. His restoration skills evolve into a
                  medium that transcends the functional aspects of fountains,
                  elevating them to expressions of artistry. With every
                  restoration project, he harmonizes the visual splendor of the
                  water feature with the surrounding environment, forming a
                  narrative that resonates with the very soul of the region.{" "}
                  <br /> <br />
                </p>
                <p>
                  Ivan Cornejo's journey is not merely about restoration; it's
                  about enrichment. His work redefines the relationship between
                  fountains and their settings, creating a symphony where water
                  dances in tune with the landscapes, architecture, and stories
                  that define Southern California. This profound dedication to
                  his craft has established Ivan Cornejo as a true luminary in
                  the field of fountain restoration, setting a standard that
                  elevates every drop of water to a canvas of life and beauty.{" "}
                  <br /> <br />
                </p>
                <p>
                  As the CEO of our fountain company, Ivan Cornejo leads with a
                  passion that transcends the ordinary. His vision extends
                  beyond business; it embodies a commitment to preserving the
                  artistic and cultural essence of each location. Through his
                  hands, fountains become living testimonials to the rich
                  tapestry of Southern California, and his legacy stands as an
                  enduring testament to the power of artistry and dedication in
                  revitalizing the heart of our surroundings.
                </p>
              </div>
            </div>
            <div className="about-photo zoomOutLeft">
              <img src={aboutIvan} alt="Ivan" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default About;
