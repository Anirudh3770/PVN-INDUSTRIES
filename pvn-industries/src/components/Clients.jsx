import React from 'react';
import './Clients.css';


const Clients = ({ customLogos, onDropImage, handleFileSelect, makePlaceholder }) => {
  const clients = [
    {
      name: 'Karimnagar Dairy',
      logo: 'https://www.karimnagardairy.in/wp-content/uploads/2020/09/logo.png'
    },
    {
      name: 'Mother Dairy',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/26/Mother_Dairy_logo.svg'
    },
    {
      name: 'Vijaya Dairy',
      logo: 'https://tgdairy.telangana.gov.in/images/logo.png'
    },
    {
      name: 'Masqati Dairy',
      logo: 'https://i.ibb.co/MCgdg5q/masqati-logo.png'
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
          {clients.map((c) => {
            const inputId = `upload-${c.name.replace(/\s+/g, '-').toLowerCase()}`;
            const src = customLogos[c.name] || c.logo;
            return (
              <div key={c.name} className="client-card" aria-label={c.name}>
                <div
                  className="client-logo"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => onDropImage(c.name, e)}
                  onClick={() => {
                    const el = document.getElementById(inputId);
                    if (el) el.click();
                  }}
                  role="button"
                  aria-label={`Set logo for ${c.name}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      const el = document.getElementById(inputId);
                      if (el) el.click();
                    }
                  }}
                >
                  <img
                    src={src}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="64"
                    className="client-logo-img"
                    onError={(e) => {
                      e.currentTarget.src = makePlaceholder(c.name);
                    }}
                  />
                  <input
                    id={inputId}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(evt) => handleFileSelect(c.name, evt)}
                  />
                </div>
                <div className="client-name">{c.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;