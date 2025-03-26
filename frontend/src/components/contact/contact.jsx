import React, { useState } from "react";
import "./contact.css";
import { Helmet } from "react-helmet";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | C-Summit'25</title>
        <meta
          name="description"
          content="Contact the team of C-Summit'25 for queries, partnerships, or support."
        />
        <meta
          name="keywords"
          content="Contact HelpStartup, Contact C-Summit, LPU Events, Sustainability Summit Contact"
        />
        <meta name="author" content="HelpStartup" />

        <meta property="og:title" content="Contact | C-Summit'25" />
        <meta
          property="og:description"
          content="Reach out to us for queries and collaborations."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/assets/contact-banner.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Contact | C-Summit'25" />
        <meta
          name="twitter:description"
          content="Reach out to us for queries and collaborations."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/assets/contact-banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="contact-wrapper">
        <h2 className="contact-heading">Contact Us</h2>

        <div className="contact-grid">
          {/* LEFT BOX */}
          <div className="contact-box info-box">
            <h3>Organized by: HelpStartup</h3>
            <div className="info-grid">
              <div>
                <h4>Event Venue</h4>
                <p>
                  Lovely Professional University
                  <br />
                  GT Road, Phagwara, Punjab, 144401
                </p>
              </div>

              <div>
                <h4>Email</h4>
                <p>info@helpstartup.org.in</p>
              </div>

              <div>
                <h4>Pratik Singh</h4>
                <p>
                  Convener
                  <br />
                  +91 70580 58027
                </p>
              </div>

              <div>
                <h4>Aniket Singh Rathore</h4>
                <p>
                  Co-Convener
                  <br />
                  +91 91991 05488
                </p>
              </div>

              <div>
                <h4>Gurveer Kaur</h4>
                <p>
                  Co-Convener
                  <br />
                  +91 99152 50813
                </p>
              </div>

              <div className="socials">
                <h4>Socials</h4>
                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/csummit_org?igsh=MTFjMGZmOHNucWx3Zw=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/106433111/admin/dashboard/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://wa.me/919341443149"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="contact-box form-box">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            ) : (
              <div className="success-message">
                <h3>Thank you for contacting us!</h3>
                <p>
                  This is a demo. Your message has been received (not really
                  sent).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
