import React from 'react';
import './Contact.css';

import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';

import { useForm, ValidationError } from '@formspree/react';

const ContactInfo = () => (
  <div className="contact-info-container">
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
          href="https://maps.app.goo.gl/MK4KoqRQ7WdEZB6f8"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [state, handleSubmit] = useForm("mojybpng");

  if (state.succeeded) {
    return (
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We will get back to you shortly.</p>
          </div>
          <div className="contact-wrapper">
            <ContactInfo />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Request a Quote</h2>
          <p>Fill out the form below or contact us directly. We're ready to help.</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="product">Product of Interest</label>
                <select id="product" name="product">
                  <option>Curd Buckets (General)</option>
                  <option>1kg Bucket</option>
                  <option>2kg Bucket</option>
                  <option>5kg Bucket</option>
                  <option>10kg Bucket</option>
                  <option>Other/Custom</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Estimated Monthly Quantity</label>
                <input type="text" id="quantity" name="quantity" placeholder="e.g., 10,000 units" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;