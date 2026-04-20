
import React from 'react';
import { ChevronsRight, Award, PackageCheck, Truck } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <div className="cta-header">
              <h2>Let's Build Your Perfect Packaging Solution</h2>
              <p>From concept to delivery, our team is ready to create high-quality, reliable packaging that meets your unique needs.</p>
            </div>

            <div className="cta-benefits">
              <div className="benefit-item">
                <Award size={28} className="benefit-icon" />
                <h3>Unmatched Quality</h3>
              </div>
              <div className="benefit-item">
                <PackageCheck size={28} className="benefit-icon" />
                <h3>Custom Solutions</h3>
              </div>
              <div className="benefit-item">
                <Truck size={28} className="benefit-icon" />
                <h3>Reliable Delivery</h3>
              </div>
            </div>

            <div className="cta-actions">
              <a 
                href="mailto:pvnindustries.tg@gmail.com?subject=Request for Quote"
                className="btn btn-primary"
              >
                <span>Get a Quote Now</span>
                <ChevronsRight size={24} />
              </a>
              <p className="cta-social-proof">Trusted by 150+ Businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;