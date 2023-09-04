import React from "react";
import { useInView } from "react-intersection-observer";
import "./ServiceStyles.css";
import { Installation } from "../../assets/index.js";
import { beforeRepair } from "../../assets/index.js";
import { afterRepair } from "../../assets/index.js";
import { maintenance } from "../../assets/index.js";
import { maintenance2 } from "../../assets/index.js";
import { business } from "../../assets/index.js";
import { emergency } from "../../assets/index.js";
import { delivary } from "../../assets/index.js";

const ServiceSection = ({ title, description, image1, image2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`services ${inView ? "revealLeft" : "hideLeft"}`}>
      <div className="first-serv">
        <div className="serv-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="image">
          <img alt="img" src={image1} />
          <img alt="img" src={image2} />
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
    <div
      ref={ref}
      className={`services ${inView ? "revealRight" : "hideRight"}`}
    >
      <div className="first-serv">
        <div className="image">
          <img alt="img" src={image1} />
          <img alt="img" src={image2} />
        </div>
        <div className="serv-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <section id="services" title="Services">
      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1>Services</h1>
        <p>Southern California’s Premier Fountain Service </p>
      </div>

      <ServiceSection
        title="Delivery & Installation"
        description="Our dedicated team takes care of every aspect of the delivery and installation process. From carefully packaging your fountain to safe transportation and with years of experience, our skilled technicians guarantee a seamless and efficient setup."
        image1={delivary}
        image2={Installation}
      />

      <ServiceSection2
        title="Restoration & Renovation"
        description="If your fountain has lost its former glory, our restoration experts can breathe new life into it. We specialize in fountain renovation, bringing outdated or damaged fountains back to their original splendor while incorporating modern upgrades if desired."
        image1={beforeRepair}
        image2={afterRepair}
      />

      <ServiceSection
        title="Cleaning & Maintenance"
        description="To maintain the beauty and longevity of your fountain, regular cleaning and maintenance are essential. Our team performs thorough cleaning procedures to remove algae, calcium deposits, and debris that may accumulate over time."
        image1={maintenance}
        image2={maintenance2}
      />

      <ServiceSection2
        title="Emergency Services & Much More!"
        description="We understand that fountain issues can arise unexpectedly, which is why we offer emergency repair services. Our responsive team will be at your location promptly to address any urgent concerns, preventing further damage and minimizing downtime."
        image1={emergency}
        image2={business}
      />
    </section>
  );
};

export default Service;
