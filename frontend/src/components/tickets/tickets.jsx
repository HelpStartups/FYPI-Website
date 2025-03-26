import React from "react";
import "./tickets.css";
import { Helmet } from "react-helmet";

import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

const Tickets = () => {
  return (
    <>
      <Helmet>
        <title>Tickets | C-Summit'25</title>
        <meta
          name="description"
          content="Get your passes for C-Summit'25. Choose from Student, Premium, Professional, or Startup Expo Passes."
        />
        <meta
          name="keywords"
          content="Tickets, C-Summit Passes, Student Tickets, Premium Tickets, Professional Tickets, Expo Pass, Register Now"
        />
        <meta name="author" content="HelpStartup" />

        <meta property="og:title" content="Tickets | C-Summit'25" />
        <meta
          property="og:description"
          content="Choose your ticket type and secure your seat for C-Summit'25."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/tickets-banner.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/tickets" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Tickets | C-Summit'25" />
        <meta
          name="twitter:description"
          content="Grab your tickets for India's biggest sustainability summit."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/tickets-banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="tickets-section">
        <h1 className="tickets-title">Choose Your Pass</h1>

        {/* Main 3 Tickets */}
        <div className="tickets-container">
          <div className="ticket-card">
            <h2>Standard Student Pass</h2>
            <ul>
              <li>
                <FaCheckCircle /> All Keynote Speaker Sessions
              </li>
              <li>
                <FaCheckCircle /> Flagship and Fun Events
              </li>
              <li>
                <FaCheckCircle /> Stand-up comedy Nights
              </li>
              <li>
                <FaCheckCircle /> Workshops
              </li>
              <li>
                <FaCheckCircle /> Startup exhibition and Food Carnival
              </li>
            </ul>
            <div className="bottom-section">
              <h1 className="price">₹999/-</h1>
              <a
                href="https://neartocollege.com/ticket-selection/67dfda42fcfa20cea814bb39"
                className="ticket-btn"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="ticket-card">
            <h2>Premium Student Pass</h2>
            <ul>
              <li>
                <FaCheckCircle /> All Keynote Speaker Sessions
              </li>
              <li>
                <FaCheckCircle /> Flagship and Fun Events
              </li>
              <li>
                <FaCheckCircle /> Stand-up comedy Nights
              </li>
              <li>
                <FaCheckCircle /> Workshops
              </li>
              <li>
                <FaCheckCircle /> Startup exhibition and Food Carnival
              </li>
              <li>
                <FaCheckCircle /> Coupons and Goodies
              </li>
              <li>
                <FaCheckCircle /> Accommodation For 3 days
              </li>
              <li>
                <FaCheckCircle /> Food: 3 meals per day for 3 days
              </li>
            </ul>
            <div className="bottom-section">
              <h1 className="price">₹1999/-</h1>
              <a
                href="https://neartocollege.com/ticket-selection/67dfda42fcfa20cea814bb39"
                className="ticket-btn"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="ticket-card">
            <h2>Professional Student Pass</h2>
            <ul>
              <li>
                <FaCheckCircle /> All Keynote Speaker Sessions
              </li>
              <li>
                <FaCheckCircle /> Flagship and Fun Events
              </li>
              <li>
                <FaCheckCircle /> Stand-up comedy Nights
              </li>
              <li>
                <FaCheckCircle /> Workshops
              </li>
              <li>
                <FaCheckCircle /> Startup exhibition and Food Carnival
              </li>
              <li>
                <FaCheckCircle /> Coupons and Goodies
              </li>
              <li>
                <FaCheckCircle /> Accommodation For 3 days
              </li>
              <li>
                <FaCheckCircle /> Networking Lounge
              </li>
              <li>
                <FaCheckCircle /> Food: 3 meals per day for 3 days
              </li>
            </ul>
            <div className="bottom-section">
              <h1 className="price">₹2499/-</h1>
              <a
                href="https://neartocollege.com/ticket-selection/67e146c724f2b8c32e4bf066"
                className="ticket-btn"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>

        {/* Expo Card */}
        <div className="expo-card">
          <div className="bbbb">
            <h1>Startup Expo Professional Pass</h1>
            <a
              href="https://drive.google.com/file/d/1gKo3ad6QK1fgEqveQNqVZmGpOKnEnIB_/view?usp=sharing"
              className="details-btn"
            >
              <FaInfoCircle /> Details
            </a>
          </div>

          <div className="expo-content">
            <div className="expo-column">
              <ul>
                <li>
                  <FaCheckCircle /> Exhibition Kiosk (2x2 metre)
                </li>
                <li>
                  <FaCheckCircle /> Accommodation and Food (2 person)
                </li>
                <li>
                  <FaCheckCircle /> Networking Dinner
                </li>
              </ul>
            </div>

            <div className="expo-column">
              <ul>
                <li>
                  <FaCheckCircle /> All Keynote Speaker Sessions
                </li>
                <li>
                  <FaCheckCircle /> Welcome Kit
                </li>
                <li>
                  <FaCheckCircle /> All Flagship Events
                </li>
                <li>
                  <FaCheckCircle /> Networking Lounge
                </li>
              </ul>
            </div>

            <div className="expo-column expo-info">
              <h1 className="price">₹9999/-</h1>
              <a
                href="https://neartocollege.com/ticket-selection/67e146d224f2b8c32e4bf067"
                className="ticket-btn"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tickets;
