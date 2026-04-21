import React from 'react';
import './Contact.css';

import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Reach out for orders and inquiries</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <MapPin className="icon" />
              <div>
                <h4>Factory Address</h4>
                <p>Plot No. 31/1 & 31/2, Mankhal Plastic Park (Extn.)<br />
                Thummaluru Viii., Maheshwaram Mdl.,<br />
                R.R. Dist., 501 359, Telangana.</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 8501905917</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="icon" />
              <div>
                <h4>Email</h4>
                <p>pvnindustries.tg@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <CheckCircle className="icon" />
              <div>
                <h4>GSTIN</h4>
                <p>36BOQPK3182L2ZB</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="map-container">
              <iframe
                title="PVN Industries Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.45916666931488%2C17.160592744145144%2C78.46916666931488%2C17.170592744145145&layer=mapnik&marker=17.165592744145144%2C78.46416666931488"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-actions">
              <a
                href="https://www.google.com/maps?q=17.165592744145144%2C78.46416666931488"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;