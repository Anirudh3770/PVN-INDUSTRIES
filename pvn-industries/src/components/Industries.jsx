import React from 'react';
import './Industries.css';

import {
  Milk,
  UtensilsCrossed,
  PaintBucket,
  Syringe,
  Tractor,
} from 'lucide-react';

const industries = [
  { name: 'Dairy', icon: <Milk size={48} /> },
  { name: 'Food & Beverage', icon: <UtensilsCrossed size={48} /> },
  { name: 'Paints & Chemicals', icon: <PaintBucket size={48} /> },
  { name: 'Pharmaceuticals', icon: <Syringe size={48} /> },
  { name: 'Agriculture', icon: <Tractor size={48} /> },
];

const Industries = () => {
  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Serving a Wide Range of Industries</h2>
          <p className="section-subtitle">
            Our products are trusted by businesses across various sectors.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;