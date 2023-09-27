import React from "react";
import "../navbar/NavbarStyles.css";

const Head = () => {
  const phoneNumber = "(951) 837-8384";
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="Head">
      <h1 className="HeadLogo">IVAN'S FOUNTAIN SERVICES</h1>
      <a
        className="HeadNumber"
        href={phoneLink}
        style={{ textDecoration: "none", color: "white", fontSize: "1.2rem" }}
      >
        {phoneNumber}
      </a>
    </div>
  );
};

export default Head;
