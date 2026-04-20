import React from 'react';
import './Specs.css';


import { Box, Package, ShieldCheck, Printer } from 'lucide-react';

const specs = [
  {
    icon: <Box size={32} className="spec-icon" />,
    title: 'Material',
    value: '100% Virgin Food-Grade PP & HDPE',
    description: 'Ensures product safety and compliance with food contact regulations.',
  },
  {
    icon: <Package size={32} className="spec-icon" />,
    title: 'Capacities',
    value: '5L, 10L, 20L',
    description: 'Catering to retail, HORECA, and bulk packaging needs.',
  },
  {
    icon: <ShieldCheck size={32} className="spec-icon" />,
    title: 'Lid & Handle',
    value: 'Tamper-Evident Lids & Durable Plastic Handles',
    description: 'Provides security, prevents contamination, and ensures easy handling.',
  },
  {
    icon: <Printer size={32} className="spec-icon" />,
    title: 'Printing',
    value: 'High-Definition Dry Offset Printing',
    description: 'Up to 6 colors for vibrant, durable, and high-impact branding.',
  },
];

const Specs = () => {
  return (
    <section id="specs" className="section specs-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Specifications</h2>
          <p className="section-subtitle">
            Built for durability and performance, our curd buckets meet rigorous industry standards.
          </p>
        </div>
        <div className="specs-grid">
          {specs.map((spec, index) => (
            <div key={index} className="spec-card">
              {spec.icon}
              <h3 className="spec-title">{spec.title}</h3>
              <p className="spec-value">{spec.value}</p>
              <p className="spec-description">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;