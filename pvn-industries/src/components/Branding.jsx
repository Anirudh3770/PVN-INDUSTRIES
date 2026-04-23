import React from 'react';
import './Branding.css';

import Palette from 'lucide-react/dist/esm/icons/palette';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Repeat from 'lucide-react/dist/esm/icons/repeat';

const features = [
  {
    icon: <Palette size={28} className="feature-icon" />,
    title: 'Up to 6 Colors',
    description: 'Achieve complex, eye-catching designs with our multi-color printing capabilities.',
  },
  {
    icon: <ShieldCheck size={28} className="feature-icon" />,
    title: 'Food-Safe Inks',
    description: 'We use specially formulated inks that are safe for food packaging and resistant to migration.',
  },
  {
    icon: <Repeat size={28} className="feature-icon" />,
    title: '360° Wrap-Around Graphics',
    description: 'Maximize your branding real estate with seamless, full-wrap designs for maximum shelf impact.',
  },
];

const Branding = () => {
  return (
    <section id="branding" className="section branding-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">High-Definition IML & Offset Printing</h2>
          <p className="section-subtitle">
            Transform your packaging into a powerful branding tool with our advanced printing solutions.
          </p>
        </div>
        <div className="branding-grid">
          <div className="branding-image-container">
            <img 
              src="products/curd-buckets.jpg" 
              alt="Branded curd buckets with high-quality printing" 
              className="branding-image"
              width="500"
              height="500"
            />
          </div>
          <div className="branding-content">
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  {feature.icon}
                  <div className="feature-text">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;