import React from 'react';
import './Journey.css';


const Journey = () => {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">A Legacy of Growth & Partnership</h2>
          <p className="section-subtitle">
            From a focused raw material supplier to a comprehensive manufacturing partner, our history is one of steady growth and innovation.
          </p>
        </div>
        <div className="timeline">
          {[
            {
              year: '2018',
              title: 'Foundation of Business',
              description: <>The business journey began with the establishment of Wins Industry, founded by <strong className="highlight-name">Mrs. Kadire Karuna</strong>. The company initially focused on the production and supply of plastic raw materials for manufacturing applications.</>,
            },
            {
              year: '2022',
              title: 'Establishment of PVN Industries',
              description: 'Building on the experience gained in the plastic sector, PVN Industries was officially established to manufacture plastic household products such as buckets and utility containers, serving distributors and commercial buyers.',
            },
            {
              year: '2025',
              title: 'Expansion of Management and Operations',
              description: <><strong className="highlight-name">Mr. Kadire Vincent Tagore</strong> assumed operational leadership as Managing Director, focusing on strengthening production capacity, improving operational efficiency, and expanding market reach.</>,
            },
            {
              year: 'Present',
              title: 'Growing Manufacturing Operations',
              description: 'Today, PVN Industries continues to expand its manufacturing and printing capabilities while building strong partnerships with distributors, dairy companies, and industrial clients.',
            },
          ].map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;