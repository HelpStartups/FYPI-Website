import React from "react";
import "./sponsors.css";
import { FaWhatsapp } from "react-icons/fa";

const sponsorsData = [
  {
    name: "Why Waste Wednesdays",
    role: "Sustainability Partner",
    website: "https://www.whywastewednesdays.com/",
    logo: "/images/WWWFlogo.svg", // Using direct URL from public folder
  },
  {
    name: "The Earth Day Network",
    role: "Partner",
    website: "https://www.earthday.org/",
    logo: "/images/earthday.svg",
  },
  {
    name: "Near to College",
    role: "Ticketing Partner",
    website: "https://neartocollege.com/",
    logo: "/images/NC.svg",
  },
  {
    name: "Print Saathi",
    role: "Printing Partner",
    website: "https://www.printsaathi.com/",
    logo: "/images/ps.svg",
  },
];

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <h1 className="page-title">Our Sponsors & Partners</h1>

      {/* Sponsors Section */}
      <div className="sponsors-grid">
        {sponsorsData.map((sponsor, index) => (
          <a
            href={sponsor.website}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.role}</p>
          </a>
        ))}
      </div>

      {/* Become a Partner Section */}
      <section className="partner-section">
        <h2>Become Our Partner</h2>
        <p>
          Join us in making a sustainable impact! Click below to reach out to us
          directly on WhatsApp.
        </p>
        <a
          href="https://wa.me/919341443149"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <FaWhatsapp className="whatsapp-icon" /> Message Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Sponsors;
