
import React from 'react';
import './About.css';

import { Printer, CheckCircle, Package } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose PVN Industries?</h2>
          <p>Excellence in Manufacturing & Branding</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <Printer size={48} className="feature-icon" />
            <h3>Dry Offset Printing</h3>
            <p>We offer high-quality dry offset printing directly on buckets for vibrant, durable branding suitable for industrial use.</p>
          </div>
          <div className="feature-card">
            <CheckCircle size={48} className="feature-icon" />
            <h3>Food-Grade Material</h3>
            <p>Our buckets are manufactured using 100% virgin food-grade plastic ensuring hygiene and safety for dairy products.</p>
          </div>
          <div className="feature-card">
            <Package size={48} className="feature-icon" />
            <h3>Bulk Supply</h3>
            <p>Equipped to handle large industrial orders with timely delivery across Telangana and India.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;