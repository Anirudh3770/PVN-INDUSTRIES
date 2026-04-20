import React from 'react';
import './Technology.css';

const Technology = () => {
  return (
    <section id="technology" className="section technology-section">
      <div className="container">
        <div className="section-header">
          <h2>Technology & Capabilities</h2>
          <p>Leveraging state-of-the-art technology and automated processes to deliver superior quality and consistency at scale.</p>
        </div>
        <div className="technology-grid">
          {[
            {
              title: 'Dry-Offset Printing',
              description: 'We utilize advanced 6-color dry-offset printing machines to apply vibrant, high-resolution graphics directly onto our buckets. This automated process ensures brand consistency and a premium finish for every product.',
              image: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457139_y.jpg`,
            },
            {
              title: 'Injection Moulding',
              description: 'Our facility is equipped with high-precision injection moulding machines that form the core of our manufacturing. This technology allows us to produce dimensionally accurate and structurally robust buckets and caps with high efficiency.',
              image: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457092_y.jpg`,
            },
            {
              title: 'Automated Manufacturing',
              description: 'From raw material handling to final product stacking, our production line incorporates automation to minimize human error and maximize output. This ensures a reliable supply chain for our clients.',
              image: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457095_y.jpg`,
            },
            {
              title: 'Quality Control & Assurance',
              description: 'Every stage of our process is monitored by a strict quality assurance protocol. We conduct rigorous testing for durability, leak-resistance, and print quality to guarantee that our products meet the highest standards.',
              image: `${import.meta.env.BASE_URL}infrastructure/photo_6143153756141457140_y.jpg`,
            },
          ].map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-card-image-container">
                <img src={tech.image} alt={tech.title} className="tech-card-image" loading="lazy" decoding="async" />
              </div>
              <div className="tech-card-content">
                <h3>{tech.title}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;