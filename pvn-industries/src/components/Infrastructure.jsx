import React from 'react';
import './Infrastructure.css';

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="section infrastructure-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Facility in Action</h2>
          <p>State-of-the-art machinery for consistent quality and large-scale production.</p>
        </div>
        <div className="media-grid">
          {[
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/new machine.jpg`,
              alt: 'PVN Industries new machinery',
            },
            {
              type: 'video',
              src: `${import.meta.env.BASE_URL}infrastructure/WhatsApp Video 2026-02-28 at 12.44.20.mp4`,
              alt: 'Factory machinery in operation',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457090_y.jpg`,
              alt: 'PVN Industries factory infrastructure',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457092_y.jpg`,
              alt: 'PVN Industries manufacturing process',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457096_y.jpg`,
              alt: 'Another view of the factory machinery',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457098_y.jpg`,
              alt: 'PVN Industries production line',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457085_y.jpg`,
              alt: 'Infrastructure image 1',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457127_y.jpg`,
              alt: 'Infrastructure image 2',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457139_y.jpg`,
              alt: 'Infrastructure image 3',
            },
            {
              type: 'image',
              src: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457140_y.jpg`,
              alt: 'Infrastructure image 4',
            },
          ].map((media, index) => (
            <div key={index} className="media-item">
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  controls
                  className="media-content"
                  loading="lazy"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="media-content"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;