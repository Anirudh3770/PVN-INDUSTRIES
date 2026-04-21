import React from 'react';
import './Hero.css'; 

import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import Printer from 'lucide-react/dist/esm/icons/printer';
import Package from 'lucide-react/dist/esm/icons/package';

const Hero = ({ scrollToSection }) => {
  return (
    <header
      id="home"
      className="hero"
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-brand">
          <h2 className="hero-brand-title">PVN Industries</h2>
          <p className="hero-brand-address">IP Mankhal, Ranga Reddy, Telangana</p>
        </div>
        <h2>Food‑Grade <span className="text-yellow">Curd Buckets</span> For Dairy Brands</h2>
        <p>Durable PP/HDPE containers with tamper‑evident lids and high‑definition Dry Offset printing for strong shelf impact.</p>
        
        <div className="hero-badges">
          <div className="hero-badge"><CheckCircle size={18} /> Food‑Grade Materials</div>
          <div className="hero-badge"><Printer size={18} /> Dry Offset up to 6 Colors</div>
          <div className="hero-badge"><Package size={18} /> 5L • 10L • 20L</div>
        </div>

        <div className="hero-actions">
          <button className="btn" onClick={() => scrollToSection('products')}>Explore Buckets</button>
          <a href="tel:+918501905917" className="btn secondary">Call Sales</a>
          <a href="mailto:pvnindustries.tg@gmail.com?subject=PVN%20Curd%20Bucket%20Enquiry" className="btn secondary">Get Price List</a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">5L</div>
            <div className="hero-stat-label">Retail Packs</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">10L</div>
            <div className="hero-stat-label">HORECA</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">20L</div>
            <div className="hero-stat-label">Bulk Logistics</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;