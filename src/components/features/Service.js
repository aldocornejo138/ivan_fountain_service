// src/components/Service.js

import React from "react";
import { useInView } from "react-intersection-observer";
import "./ServiceStyles.css";
import {
  Installation,
  beforeRepair,
  afterRepair,
  maintenance,
  maintenance2,
  business,
  emergency,
  delivary,
} from "../../assets/index.js";

const ServiceSection = ({
  title,
  description,
  image1,
  image2,
  alt1,
  alt2,
  Title1,
  Title2,
  reverse,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`services ${inView ? "visible" : ""}`}>
      <div className={`first-serv ${reverse ? "reverse" : ""}`}>
        <div className="serv-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="image">
          <img src={image1} alt={alt1} title={Title1} loading="lazy" />
          <img src={image2} alt={alt2} title={Title2} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="service-section" title="Services">
      <div
        ref={titleRef}
        className={`section-header ${titleInView ? "visible" : ""}`}
      >
        <h1>Services</h1>
        <p>Southern California’s Premier Fountain Service</p>
      </div>

      <ServiceSection
        title="Delivery & Installation"
        description="Our dedicated team takes care of every aspect of the delivery and installation process. From carefully packaging your fountain to safe transportation and with years of experience, our skilled technicians guarantee a seamless and efficient setup."
        image1={delivary}
        image2={Installation}
        alt1="Fountain Delivery"
        alt2="Fountain Installation"
        Title1="Delivery"
        Title2="Installation"
        reverse={false}
      />

      <ServiceSection
        title="Restoration & Renovation"
        description="If your fountain has lost its former glory, our restoration experts can breathe new life into it. We specialize in fountain renovation, bringing outdated or damaged fountains back to their original splendor while incorporating modern upgrades if desired."
        image1={beforeRepair}
        image2={afterRepair}
        alt1="Before Repair"
        alt2="After Repair"
        Title1="Before"
        Title2="After"
        reverse={true}
      />

      <ServiceSection
        title="Cleaning & Maintenance"
        description="To maintain the beauty and longevity of your fountain, regular cleaning and maintenance are essential. Our team performs thorough cleaning procedures to remove algae, calcium deposits, and debris that may accumulate over time."
        image1={maintenance}
        image2={maintenance2}
        alt1="Maintenance Step 1"
        alt2="Maintenance Step 2"
        Title1="Clean"
        Title2="Maintain"
        reverse={false}
      />

      <ServiceSection
        title="Emergency Services & More"
        description="We understand that fountain issues can arise unexpectedly, which is why we offer emergency repair services. Our responsive team will be at your location promptly to address any urgent concerns, preventing further damage and minimizing downtime."
        image1={emergency}
        image2={business}
        alt1="Emergency Repair"
        alt2="Business Repair"
        Title1="Emergency"
        Title2="Business"
        reverse={true}
      />
    </section>
  );
};

export default Service;
