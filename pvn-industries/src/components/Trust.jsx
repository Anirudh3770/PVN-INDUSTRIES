import React from 'react';
import './Trust.css';

const trustData = [
  {
    title: 'Advanced Injection Molding',
    description: 'Utilizing modern, high-precision machinery to produce consistent, durable, and defect-free buckets.',
    imageUrl: 'infrastructure/photo_6143153756141457098_y.jpg',
  },
  {
    title: 'Quality Assurance Lab',
    description: 'In-house testing for material strength, dimensional accuracy, and load-bearing capacity to ensure top-tier quality.',
    imageUrl: 'infrastructure/photo_6143153756141457095_y.jpg',
  },
  {
    title: 'Hygienic Production Environment',
    description: 'Maintaining a clean, pest-free, and controlled environment to meet food-grade packaging standards.',
    imageUrl: 'infrastructure/photo_6143153756141457127_y.jpg',
  },
];

const Trust = () => {
  return (
    <section id="trust" className="section trust-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built on a Foundation of Trust</h2>
          <p className="section-subtitle">
            Our commitment to quality is integrated into every step of our manufacturing process.
          </p>
        </div>
        <div className="trust-grid">
          {trustData.map((item, index) => (
            <div key={index} className="trust-card">
              <img src={item.imageUrl} alt={item.title} className="trust-image" />
              <div className="trust-content">
                <h3 className="trust-title">{item.title}</h3>
                <p className="trust-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;