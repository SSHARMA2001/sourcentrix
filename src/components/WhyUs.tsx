import React from 'react';
import './WhyUs.css';

const WhyUs: React.FC = () => {
  const benefits = [
    'Supplier Pool Criteria: Based on Quality, Cost, Delivery performance',
    'Supplier Performance Tracking: Real-time monitoring to match customer requirements',
    'Prototyping & New Development: Fast-tracked with digitalized procurement for reduced lead time',
    'End-to-End Manufacturing',
  ];

  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us-content">
          <h2 className="why-us-title">Why Us?</h2>
          <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              {benefit}
            </li>
          ))}
          </ul>
          <p className="why-us-footer">
            Discover the difference and experience excellence at <strong>SOURCENTRIX</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

