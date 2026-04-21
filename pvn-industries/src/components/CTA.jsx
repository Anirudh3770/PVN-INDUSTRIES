
import React from 'react';
import './CTA.css';
import ChevronsRight from 'lucide-react/dist/esm/icons/chevrons-right';
import Award from 'lucide-react/dist/esm/icons/award';
import PackageCheck from 'lucide-react/dist/esm/icons/package-check';
import Truck from 'lucide-react/dist/esm/icons/truck';

const CTA = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-main-content">
            <h2 className="cta-title">Let's Build Your Perfect Packaging Solution</h2>
            <p className="cta-subtitle">From concept to delivery, our team is ready to create high-quality, reliable packaging that meets your unique needs.</p>
            <div className="cta-action-group">
              <a 
                href="mailto:pvnindustries.tg@gmail.com?subject=Request for Quote"
                className="btn btn-primary cta-button"
              >
                <span>Get a Quote Now</span>
                <ChevronsRight size={20} />
              </a>
              <p className="cta-social-proof">Trusted by 150+ Businesses</p>
            </div>
          </div>
          <div className="cta-benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon-wrapper"><Award size={28} /></div>
              <p>Unmatched Quality</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper"><PackageCheck size={28} /></div>
              <p>Custom Solutions</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon-wrapper"><Truck size={28} /></div>
              <p>Reliable Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;