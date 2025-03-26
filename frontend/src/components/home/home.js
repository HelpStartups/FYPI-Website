import React from "react";
import "./home.css";
import { Helmet } from "react-helmet";
import {
  FaMicrophoneAlt,
  FaUsers,
  FaRecycle,
  FaChalkboardTeacher,
  FaTrophy,
  FaMusic,
  FaLeaf,
  FaGlobe,
  FaSeedling,
  FaCloudSun,
} from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          C-Summit'25 | India's Largest Student-Led Sustainability Summit
        </title>
        <meta
          name="description"
          content="Join India's biggest sustainability summit at Lovely Professional University. Learn, Connect, and Act for Climate Change and Sustainable Development."
        />
        <meta
          name="keywords"
          content="C-Summit, Sustainability Summit, Climate Change, Student Summit, LPU Events, HelpStartup, Eco-friendly, Climate Action, India"
        />
        <meta name="author" content="HelpStartup" />

        <meta
          property="og:title"
          content="C-Summit'25 | India's Biggest Sustainability Summit"
        />
        <meta
          property="og:description"
          content="April 15-17, 2025 | Lovely Professional University | Join policymakers, entrepreneurs, students, and leaders in building a sustainable future."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/banner.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="C-Summit'25 | India's Biggest Sustainability Summit"
        />
        <meta
          name="twitter:description"
          content="April 15-17, 2025 | Join the largest sustainability-focused student summit in India."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <img src={logo} alt="C-Summit'25 Logo" className="hero-logo" />
            <p className="tagline">Creating a Sustainable Bharat</p>
            <p className="event-date">15th to 17th April 2025</p>
            <div className="hero-buttons">
              <Link to="/tickets" className="btn-gradient">
                Get Tickets
              </Link>
              <Link to="/events" className="btn-gradient">
                Explore Events
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="about-text">
            <h2>About C-Summit'25</h2>
            <p>
              One of India’s largest student-led sustainability summits,
              bringing together policymakers, industry leaders, investors,
              researchers, startups, and students to drive meaningful action on
              sustainability.
            </p>
          </div>
          <div className="about-elements">
            <div className="about-item">
              <FaLeaf /> Green Initiatives
            </div>
            <div className="about-item">
              <FaGlobe /> Global Impact
            </div>
            <div className="about-item">
              <FaSeedling /> Eco Startups
            </div>
            <div className="about-item">
              <FaCloudSun /> Climate Awareness
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="features">
          <h2>What to Expect</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaMicrophoneAlt className="feature-icon" />
              <h3>Speaker Sessions</h3>
              <p>
                Speakers & Entrepreneurs from across the industry giving
                sessions on Climate Change and Sustainability.
              </p>
            </div>
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>Panel Discussions</h3>
              <p>
                Speakers from across industry will discuss on Climate Change &
                Sustainability.
              </p>
            </div>
            <div className="feature-card">
              <FaRecycle className="feature-icon" />
              <h3>Go-Green Expo</h3>
              <p>
                100+ Startups from across India to showcase their innovation on
                sustainability, Recycle Mela & More.
              </p>
            </div>
            <div className="feature-card">
              <FaChalkboardTeacher className="feature-icon" />
              <h3>Workshops</h3>
              <p>
                Workshops & sessions for creating awareness about climate change
                and Sustainability.
              </p>
            </div>
            <div className="feature-card">
              <FaTrophy className="feature-icon" />
              <h3>Green Championship</h3>
              <p>
                A competition where colleges from across states will participate
                and compete for the Winner’s Trophy.
              </p>
            </div>
            <div className="feature-card">
              <FaMusic className="feature-icon" />
              <h3>Entertainment</h3>
              <p>
                Standup comedy shows and musical bands will perform to make the
                environment more engaging.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
