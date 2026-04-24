import React from 'react';
import './Hero.css';

import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import Printer from 'lucide-react/dist/esm/icons/printer';
import Package from 'lucide-react/dist/esm/icons/package';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';

const Hero = ({ scrollToSection }) => {
  const BUCKET_IMAGE_URL = `${import.meta.env.BASE_URL}products/10kg-bucket.jpg`;

  return (
    <header id="home" className="hero">


      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-overline">
            <span className="hero-brand-name">PVN Industries</span>
            <span className="hero-location"> | Mankhal, Telangana</span>
          </div>

          <h1>PP & HDPE Curd Buckets for Dairy Packaging</h1>

          <p>
            Manufactured in food-grade PP and HDPE with tamper-evident lids,
            dry offset printing, and multiple capacities for retail, HORECA,
            and bulk dairy supply.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get Quote
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('products')}
            >
              View Product Range
            </button>
          </div>

          <div className="hero-trust-line">
            <CheckCircle size={18} />
            <span>Trusted by dairy brands across Telangana & AP</span>
          </div>

          <div className="hero-contact-info">
            <a href="tel:+918501905917">+91 85019 05917</a>
            <span className="divider">|</span>
            <a href="mailto:pvnindustries.tg@gmail.com">
              pvnindustries.tg@gmail.com
            </a>
          </div>

          <div className="hero-proof-points">
            <div className="proof-point">
              <Package size={16} />
              <span>Food-Grade PP/HDPE</span>
            </div>

            <div className="proof-point">
              <CheckCircle size={16} />
              <span>Tamper-Evident Lids</span>
            </div>

            <div className="proof-point">
              <Printer size={16} />
              <span>Up to 6-Color Dry Offset Printing</span>
            </div>
          </div>
        </div>

        <div className="hero-image-column">
          <div className="hero-image-frame">
            <img
              src={BUCKET_IMAGE_URL}
              alt="Range of PP and HDPE curd buckets"
              className="hero-product-image"
              onError={(e) => e.currentTarget.style.display = 'none'}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;