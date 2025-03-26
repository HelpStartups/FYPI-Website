import React, { useState, useEffect } from "react";
import "./speakers.css";
import { Helmet } from "react-helmet";

const revealDate = new Date("2025-04-05T00:00:00");

const Speakers = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = revealDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Speakers | C-Summit'25</title>
        <meta
          name="description"
          content="Get ready to meet renowned speakers, entrepreneurs and climate leaders at C-Summit'25."
        />
        <meta
          name="keywords"
          content="Speakers, Sustainability Speakers, Climate Leaders, Entrepreneurs, Student Summit, C-Summit Speakers"
        />
        <meta name="author" content="HelpStartup" />

        <meta property="og:title" content="Speakers | C-Summit'25" />
        <meta
          property="og:description"
          content="Official speakers list will be revealed soon. Stay tuned!"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/speakers-banner.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/speakers" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Speakers | C-Summit'25" />
        <meta
          name="twitter:description"
          content="Meet our eminent speakers from across the globe."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/speakers-banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="speakers-container">
        <h1 className="page-title">Our Speakers</h1>
        <div className="coming-soon-box">
          {timeLeft ? (
            <>
              <h2>Coming Soon</h2>
              <p>Speakers will be revealed in:</p>
              <p className="countdown">
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
                {timeLeft.seconds}s
              </p>
            </>
          ) : (
            <>
              <h2>Speakers will be Revealed Today!</h2>
              <p>Stay tuned!</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Speakers;
