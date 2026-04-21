
import React, { useState } from 'react';
import './FAQ.css';

import Plus from 'lucide-react/dist/esm/icons/plus';
import Minus from 'lucide-react/dist/esm/icons/minus';

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const faqs = [
    {
      q: 'Are your buckets food-grade and safe for curd?',
      a: 'Yes. We use virgin PP/HDPE resins and dairy-safe inks. Our process follows hygiene protocols and ink migration safety.',
    },
    {
      q: 'Do lids have tamper evidence?',
      a: 'Yes. We offer snap-fit and ring-lock tamper-evident lids across capacities for product integrity.',
    },
    {
      q: 'Can you print my brand and artwork?',
      a: 'Absolutely. We support high-definition Dry Offset printing up to 6 colors with 360° coverage. Our team can help adapt your design.',
    },
    {
      q: 'What is the minimum order quantity (MOQ)?',
      a: 'MOQs vary by size and printing. Share your requirement and we will propose an optimized MOQ.',
    },
    {
      q: 'What are the lead times and delivery options?',
      a: 'Standard lead times are 7-10 days. We offer flexible delivery across Telangana and can arrange logistics for other states.',
    },
  ];

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Answers to common questions from our dairy partners.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className={`faq-item ${faqOpen === idx ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggleFAQ(idx)}>
                <span>{item.q}</span>
                {faqOpen === idx ? <Minus className="faq-icon" /> : <Plus className="faq-icon" />}
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;