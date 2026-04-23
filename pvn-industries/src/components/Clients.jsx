import React from 'react';
import './Clients.css';


const Clients = () => {
  const clients = [
    {
      name: 'Karimnagar Dairy',
      logo: 'logos/karim.png'
    },
    {
      name: 'Mother Dairy',
      logo: 'logos/mot.webp'
    },
    {
      name: 'Vijaya Dairy',
      logo: 'logos/vijaya.avif'
    },
    {
      name: 'Masqati Dairy',
      logo: 'logos/masqati.png'
    }
  ];

  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <div className="section-header">
          <h2>Trusted By</h2>
          <p>We proudly serve leading dairy brands</p>
        </div>
        <div className="clients-logos">
          {clients.map((c) => (
            <div key={c.name} className="client-card" aria-label={c.name}>
              <div className="client-logo">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  decoding="async"
                  width="240"
                  height="64"
                  className="client-logo-img"
                />
              </div>
              <div className="client-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;