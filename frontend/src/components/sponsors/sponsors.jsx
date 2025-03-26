import React from "react";
import "./sponsors.css";
import { Helmet } from "react-helmet";

import { FaWhatsapp } from "react-icons/fa";

const sponsorsData = [
  {
    name: "Why Waste Wednesdays",
    role: "Sustainability Partner",
    website: "https://www.whywastewednesdays.com/",
    logo: "/images/WWWFlogo.svg",
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
    <>
      <Helmet>
        <title>Our Sponsors | C-Summit'25</title>
        <meta
          name="description"
          content="Meet our partners and sponsors who are contributing towards making C-Summit'25 successful and impactful."
        />
        <meta
          name="keywords"
          content="C-Summit Sponsors, Sustainability Partners, Earth Day Network, Why Waste Wednesdays, Near to College, Print Saathi"
        />
        <meta name="author" content="HelpStartup" />

        <meta property="og:title" content="Our Sponsors | C-Summit'25" />
        <meta
          property="og:description"
          content="Our partners are helping us make C-Summit'25 a success."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/sponsors-banner.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/sponsors" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Our Sponsors | C-Summit'25" />
        <meta
          name="twitter:description"
          content="See the official partners of C-Summit'25."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/sponsors-banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="sponsors-container">
        <h1 className="page-title">Our Partners</h1>

        {/* Sponsors Section */}
        <div className="sponsors-grid">
          {sponsorsData.map((sponsor, index) => (
            <div className="sponsor-card" key={index}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-logo"
              />
              <h3>{sponsor.name}</h3>
              <p>{sponsor.role}</p>
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-learn-more"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Become a Partner Section */}
        <section className="partner-section">
          <h2>Become Our Partner</h2>
          <p>
            Join us in making a sustainable impact! Click below to reach out to
            us directly on WhatsApp.
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
    </>
  );
};

export default Sponsors;
