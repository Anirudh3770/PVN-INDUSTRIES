import React from "react";
import "./Footer.css";
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import Youtube from 'lucide-react/dist/esm/icons/youtube';

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
              width="69"
              height="48"
            />
            <p className="footer-tagline">
              High-Quality Plastic Buckets & Containers
            </p>
          </div>
          <div className="footer-column footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>
                <a href="#products" onClick={() => scrollToSection("products")} role="button">Products</a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")} role="button">About Us</a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")} role="button">Contact</a>
              </li>
              <li>
                <a href="#faq" onClick={() => scrollToSection("faq")} role="button">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
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