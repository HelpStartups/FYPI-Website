import React, { useState } from "react";
import "./events.css";
import { Helmet } from "react-helmet";
import {
  FaMicrophoneAlt,
  FaUsers,
  FaRecycle,
  FaChalkboardTeacher,
  FaTrophy,
  FaMusic,
} from "react-icons/fa";

const eventsData = [
  {
    title: "Keynote Sessions",
    description:
      "Industry leaders, policymakers, and sustainability experts share insights on tackling climate change.",
    icon: <FaMicrophoneAlt />,
  },
  {
    title: "Panel Discussions",
    description:
      "A series of thought-provoking discussions featuring sustainability pioneers across industries.",
    icon: <FaUsers />,
  },
  {
    title: "Go-Green Expo",
    description:
      "100+ startups showcase sustainable innovations, including Recycle Mela and Carbon Neutral Pavilion.",
    icon: <FaRecycle />,
  },
  {
    title: "Workshops & Networking",
    description:
      "Hands-on sessions and networking opportunities with sustainability experts and industry leaders.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Entertainment Night",
    description:
      "A vibrant night featuring stand-up comedy and musical performances to energize the summit.",
    icon: <FaMusic />,
  },
  {
    title: "Green Championship",
    description:
      "A grand competition featuring five engaging sustainability-based contests for teams from various institutions.",
    icon: <FaTrophy />,
  },
];

const greenChampionship = [
  {
    title: "Nukkad for Nature",
    description:
      "Street play competition to spread awareness on climate change.",
  },
  {
    title: "The Green Startup Showdown",
    description: "Startup pitching competition for sustainable ventures.",
  },
  {
    title: "The Sustainability Challenge",
    description:
      "Teams pitch solutions to real-world problems posed by sustainability-focused brands.",
  },
  {
    title: "Waste to Wealth Innovation",
    description: "Teams present products made from waste materials.",
  },
  {
    title: "Clash of Perspectives: The Climate Debate",
    description: "Debate competition on sustainability-related topics.",
  },
];

const Events = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <>
      <Helmet>
        <title>Events | C-Summit'25</title>
        <meta
          name="description"
          content="Explore workshops, keynote sessions, panel discussions, and the Green Championship at C-Summit'25. Discover all event highlights."
        />
        <meta
          name="keywords"
          content="C-Summit Events, Climate Change Events, Sustainability Workshops, Green Championship, Eco-friendly Events, Climate Debate"
        />
        <meta name="author" content="HelpStartup" />

        <meta property="og:title" content="Events | C-Summit'25" />
        <meta
          property="og:description"
          content="See all events happening at C-Summit'25 including Expo, Workshops, Speaker Sessions and Green Championship."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/events-banner.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/events" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Events | C-Summit'25" />
        <meta
          name="twitter:description"
          content="See the exciting events lineup of C-Summit'25."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/events-banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="events-container">
        <h1 className="page-title">Events at C-Summit'25</h1>

        {/* Events Section */}
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div
              className="event-card"
              key={index}
              onMouseEnter={() => setHoveredEvent(index)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {hoveredEvent === index ? (
                <p>{event.description}</p>
              ) : (
                <div className="event-icon-container">
                  {event.icon}
                  <h3>{event.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Green Championship Section */}
        <section className="green-championship">
          <h2>The Green Championship</h2>
          <p>
            A special competition featuring 5 unique sustainability challenges:
          </p>
          <div className="green-grid">
            {greenChampionship.map((item, index) => (
              <div className="green-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="" className="btn-register">
                  Register
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
