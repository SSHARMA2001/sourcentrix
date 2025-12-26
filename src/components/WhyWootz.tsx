import React from 'react';
import './WhyWootz.css';

const WhyWootz: React.FC = () => {
  const benefits = [
    'Single source for all your project material needs',
    'Destination for hard-to-procure materials',
    'Partnership with international quality suppliers',
    'Wide experience in supplying multiple segments',
    'Prompt Response and Faster Delivery',
    'Quantity Flexibility',
    'Dedicated Free Trade Zone in Chennai, India, with the benefit of duty deferment for Imports as well re-Exports.',
    'Customs house within FTWZ facilitates hassle-free round-the-clock clearance of Inbound and Outbound logistics.',
    'Inspection of qualified third-party agencies such as TUV, Lloyds, BV, etc.',
  ];

  return (
    <section className="why-wootz">
      <div className="container">
        <h2 className="section-title">Why Wootz?</h2>
        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefit-item">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyWootz;

