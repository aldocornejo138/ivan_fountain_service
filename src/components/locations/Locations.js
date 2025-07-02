// src/components/locations/Locations.js
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./LocationsFile.css";

const CityCard = ({ city, county, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <a
      ref={ref}
      href={`/fountain-service-${city.toLowerCase().replace(/\s+/g, "-")}`}
      className="city-card-link"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      <div className="city-card">
        <div className="city-name">{city}</div>
        <div className="city-county">{county}</div>
        <div className="city-wave"></div>
      </div>
    </a>
  );
};

const Locations = () => {
  const [activeCounty, setActiveCounty] = useState("Riverside");

  // Header animation
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter animation
  const [filterRef, filterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define cities grouped by county with correct assignments
  const citiesByCounty = {
    Riverside: [
      "Riverside",
      "Corona",
      "Moreno Valley",
      "Temecula",
      "Hemet",
      "Lake Elsinore",
      "San Marcos",
      "Rancho Mirage",
      "Palm Springs",
      "Indio",
      "Murrieta",
      "Wildomar",
      "Menifee",
      "French Valley",
    ],
    "San Diego": [
      "Carlsbad",
      "Chula Vista",
      "El Cajon",
      "Encinitas",
      "Escondido",
      "Oceanside",
      "Vista",
      "Rancho Santa Fe",
      "FallBrook",
      "Poway",
    ],
    Orange: [
      "Irvine",
      "Anaheim",
      "Santa Ana",
      "Orange",
      "Fullerton",
      "Huntington Beach",
      "Newport Beach",
      "Costa Mesa",
    ],
    "Los Angeles": [
      "Los Angeles",
      "Beverly Hills",
      "Santa Monica",
      "Long Beach",
      "Pasadena",
      "Malibu",
      "Burbank",
      "Glendale",
    ],
  };

  // Filter cities based on active county
  const getFilteredCities = () => {
    if (activeCounty === "all") {
      return Object.values(citiesByCounty).flat();
    }
    return citiesByCounty[activeCounty] || [];
  };

  const filteredCities = getFilteredCities();

  // Get county name for a city
  const getCountyForCity = (city) => {
    for (const [countyName, cities] of Object.entries(citiesByCounty)) {
      if (cities.includes(city)) {
        return `${countyName} County`;
      }
    }
    return "Southern California"; // Default if not found
  };

  return (
    <section className="locations-section">
      <div className="locations-container">
        {/* Centered Header */}
        <div
          ref={headerRef}
          className={`locations-header ${headerInView ? "visible" : ""}`}
        >
          <h1>Service Areas</h1>
          <p>Currently servicing Southern California counties</p>
          <div className="header-wave"></div>
        </div>

        {/* County Filter */}
        <div
          ref={filterRef}
          className={`county-filter ${filterInView ? "visible" : ""}`}
        >
          <button
            className={`filter-btn ${activeCounty === "all" ? "active" : ""}`}
            onClick={() => setActiveCounty("all")}
          >
            All Cities
          </button>
          <button
            className={`filter-btn ${
              activeCounty === "Riverside" ? "active" : ""
            }`}
            onClick={() => setActiveCounty("Riverside")}
          >
            Riverside
          </button>
          <button
            className={`filter-btn ${
              activeCounty === "San Diego" ? "active" : ""
            }`}
            onClick={() => setActiveCounty("San Diego")}
          >
            San Diego
          </button>
          <button
            className={`filter-btn ${
              activeCounty === "Orange" ? "active" : ""
            }`}
            onClick={() => setActiveCounty("Orange")}
          >
            Orange
          </button>
          <button
            className={`filter-btn ${
              activeCounty === "Los Angeles" ? "active" : ""
            }`}
            onClick={() => setActiveCounty("Los Angeles")}
          >
            Los Angeles
          </button>
        </div>

        {/* Cities Grid */}
        <div className="cities-grid">
          {filteredCities.map((city, index) => (
            <CityCard
              key={city}
              city={city}
              county={getCountyForCity(city)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
