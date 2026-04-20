import React from 'react';
import './PrintingServices.css';
import { Palette, Layers, ShieldCheck, Image } from 'lucide-react';
import printingMachineImage from '/infrastructure/photo_6143153756141457139_y.jpg';
import printedBucketImage from '/infrastructure/photo_6143153756141457140_y.jpg';

const PrintingServices = () => {
  return (
    <section className="section printing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Advanced Dry Offset Printing</h2>
          <p className="section-subtitle">
            A Third-Party Printing Solution to Elevate Your Brand
          </p>
        </div>
        <div className="printing-grid">
          <div className="grid-item printing-details-card">
            <h3 className="printing-tagline">Vibrant, Durable, and Ready for Market.</h3>
            <p className="printing-description">
              PVN Industries offers specialized dry offset printing services for businesses that require high-quality graphics on their plastic containers. Whether you're in the paint, lubricant, food, or chemical industry, our state-of-the-art printers can handle your needs, transforming your standard buckets into powerful branding assets.
            </p>
          </div>
          <div className="grid-item printing-image-1">
            <img 
              src={printingMachineImage} 
              alt="High-quality dry offset printing machine in action" 
              className="printing-image"
            />
          </div>
          <div className="grid-item printing-image-2">
            <img 
              src={printedBucketImage} 
              alt="Close-up of a vibrantly printed bucket" 
              className="printing-image"
            />
          </div>
          <div className="grid-item printing-features-card">
            <div className="printing-features">
              <div className="feature-item">
                <Palette size={24} className="feature-icon" />
                <div className="feature-text">
                  <h4>Multi-Color Capability</h4>
                  <p>Up to 6 colors for complex, eye-catching designs.</p>
                </div>
              </div>
              <div className="feature-item">
                <ShieldCheck size={24} className="feature-icon" />
                <div className="feature-text">
                  <h4>Durable & Scratch-Resistant</h4>
                  <p>Inks formulated to withstand harsh industrial environments.</p>
                </div>
              </div>
              <div className="feature-item">
                <Layers size={24} className="feature-icon" />
                <div className="feature-text">
                  <h4>Versatile Applications</h4>
                  <p>Perfect for engine oil, milk, paint, and other products.</p>
                </div>
              </div>
              <div className="feature-item">
                <Image size={24} className="feature-icon" />
                <div className="feature-text">
                  <h4>Photorealistic Quality</h4>
                  <p>Achieve stunning, high-fidelity images on any container.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintingServices;