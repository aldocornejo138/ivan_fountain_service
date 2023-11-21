// Locations.js

import React from "react";
import { useInView } from "react-intersection-observer";
import "./Locations.css";
import { Link } from "react-router-dom"; // Import Link from React Router

const Locations = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  // Define the list of cities in Riverside County
  const riversideCountyCities = [
    "Riverside",
    "Corona",
    "Moreno Valley",
    "Temecula",
    "Hemet",
    "Lake Elsinore",
    "Poway",
    "San Diego",
    "San Marcos",
    "Rancho Mirage",
    "Palm Springs",
    "Indio",
    "Murrieta",
    "Wildomar",
    "Los Angeles",
    "Irvine",

    // Add more cities as needed
  ];

  // Define the list of cities in San Diego County
  const sanDiegoCountyCities = [
    "Carlsbad",
    "Chula Vista",
    "El Cajon",
    "Encinitas",
    "Escondido",
    "Oceanside",
    "Vista",
    "Rancho Santa Fe",
    "FallBrook",
    "Cathedral City",
    "Palm Desert",
    "La Quinta",
    "French Valley",
    "Menifee",
    "Santa Ana",
    "Anaheim",
    // Add more cities as needed
  ];

  return (
    <section>
      <div ref={ref} className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1>Currently Servicing </h1>
        <p>Riverside and San Diego County</p>
      </div>
      <div className="locations-container">
        <div className="locations-row">
          <div className="locations-column">
            <ul
              ref={ref}
              className={`locations-list ${
                inView ? "zoomInLeft" : "zoomOutLeft"
              }`}
            >
              {riversideCountyCities.map((city, index) => (
                // Wrap the city name with a Link component
                <Link
                  to={`/fountain-service-${city
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  key={index}
                >
                  <li>
                    <h1>{city}</h1>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="locations-column">
            <ul
              ref={ref}
              className={`locations-list ${
                inView ? "zoomInRight" : "zoomOutRight"
              }`}
            >
              {sanDiegoCountyCities.map((city, index) => (
                // Wrap the city name with a Link component

                <Link
                  to={`/fountain-service-${city
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  key={index}
                >
                  <li>
                    <h1>{city}</h1>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
