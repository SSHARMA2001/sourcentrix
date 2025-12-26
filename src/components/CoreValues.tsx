import React from 'react';
import './CoreValues.css';

const CoreValues: React.FC = () => {
  const values = [
    {
      title: 'Accountability',
      description: 'We take responsibility for our actions and results.',
    },
    {
      title: 'Excellence',
      description: 'We are dedicated to providing end to end solution.',
    },
    {
      title: 'Integrity',
      description: 'We maintain high ethical standards.',
    },
  ];

  return (
    <section className="core-values">
      <div className="container">
        <h2 className="section-title">Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

