import React from 'react';
import './Industries.css';

const Industries: React.FC = () => {
  const industries = [
    {
      title: 'Forklifts, Aerial Platform & Scissor lift',
      items: [
        'Large and medium & small fabrication',
        'Casting brackets and housing',
        'Links, pins, bushes, bosses',
        'Counter weights and balance weight castings',
      ],
    },
    {
      title: 'Construction Equipment',
      items: [
        'Boom dipper, bucket shovel and fabrication items',
        'Kingpost carriage and casting parts',
        'Hydraulic cylinders',
        'Links, pins, bushes',
        'Wiring harnesses',
      ],
    },
    {
      title: 'Engineering products for oil and gas industries & Agro products',
      items: [
        'Steel casting parts like valves',
        'Forging parts links',
        'FG & SG Casting parts for agri, mining & industrial',
      ],
    },
    {
      title: 'NoMOQ model for standards parts & Consumer durable',
      items: [
        'Sheet metals - Stamping, forming',
        'Rubber & plastics parts',
        'Mountings & brackets',
        'Fasteners',
        'Washers',
        'Trading items',
        'Spare parts market',
      ],
    },
  ];

  return (
    <section id="industries" className="industries">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <h3 className="industry-title">{industry.title}</h3>
              <ul className="industry-items">
                {industry.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="industry-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

