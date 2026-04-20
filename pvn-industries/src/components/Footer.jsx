import React from "react";
import "./Footer.css";
import { Instagram, Youtube } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-column footer-brand">
            <img
              src={`${import.meta.env.BASE_URL}logos/pvn-logo.png`}
              alt="PVN Industries logo"
              className="footer-logo-img"
            />
            <p className="footer-tagline">
              High-Quality Plastic Buckets & Containers
            </p>
          </div>
          <div className="footer-column footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <a onClick={() => scrollToSection("products")}>Products</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("about")}>About Us</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("contact")}>Contact</a>
              </li>
              <li>
                <a onClick={() => scrollToSection("faq")}>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <p>Plot No. 31/1 & 31/2, Mankhal Plastic Park (Extn.) Maheshwaram Mdl., 501359, Telangana.</p>
            <a
              href="mailto:pvnindustries.tg@gmail.com"
              className="footer-email"
            >
              pvnindustries.tg@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} PVN Industries. All Rights
            Reserved.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/pvnindustries"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/@pvnindustries"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;