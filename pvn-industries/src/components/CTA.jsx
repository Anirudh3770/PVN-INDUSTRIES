import React from "react";
import "./CTA.css";
import ChevronsRight from "lucide-react/dist/esm/icons/chevrons-right";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";

const CTA = ({ scrollToSection }) => {
  const whatsappNumber = "918501905917";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20PVN%20Industries,%20I%20need%20a%20quote%20for%20curd%20buckets.`;

  return (
    <section className="section cta-section" id="cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">
              Request a Quote for Bulk Dairy Packaging
            </h2>
            <p className="cta-subtitle">
              Tell us your capacity, printing, and quantity requirement. Our
              team will assist with pricing, customization, and delivery
              planning.
            </p>

            <div className="cta-action-group">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-primary cta-button"
              >
                <span>Request a Quote</span>
                <ChevronsRight size={20} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp cta-button"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="cta-note">
              Bulk orders, custom printing, and distributor inquiries welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
