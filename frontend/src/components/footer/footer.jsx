import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo */}
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="C-Summit'25 Logo" />
          </Link>
        </div>

        {/* Middle Section: Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Organized by:{" "}
            <a href="https://www.linkedin.com/company/102038429/admin/dashboard/">
              HelpStartup
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@helpstartup.org.in">info@helpstartup.org.in</a>
          </p>
          <h3>Event Venue</h3>
          <p>
            <p>Lovely Professional University</p>
            <p>GT Road, Phagwara, Punjab, 144401,</p>
          </p>
        </div>

        {/* Middle Section: Organizers */}
        <div className="footer-organizers">
          <h3>Organizers</h3>
          <p>
            Pratik Singh - Convener <br />{" "}
            <a href="tel:+917058058027">+91 70580 58027</a>
          </p>
          <p>
            Aniket Singh Rathore - Co-Convener <br />{" "}
            <a href="tel:+919199105488">+91 91991 05488</a>
          </p>
          <p>
            Gurveer Kaur - Co-Convener <br />{" "}
            <a href="tel:+919915250813">+91 99152 50813</a>
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/csummit_org?igsh=MTFjMGZmOHNucWx3Zw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/c-summit-helpstartup/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://wa.me/919341443149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 C-Summit. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
