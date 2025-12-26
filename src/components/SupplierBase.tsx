import React from 'react';
import './SupplierBase.css';

const SupplierBase: React.FC = () => {
  const regions = [
    {
      name: 'NCR',
      items: ['Fabrication', 'Sheet metal', 'Machining'],
    },
    {
      name: 'Maharashtra',
      items: ['Green Casting cluster', 'Casting'],
    },
    {
      name: 'Punjab',
      items: ['Casting', 'Forging'],
    },
    {
      name: 'Gujarat',
      items: ['Investment Loss foam', 'Steel casting clusters', 'Small machine manufacturer'],
    },
  ];

  return (
    <section id="supplier-base" className="supplier-base">
      <div className="container">
        <h2 className="section-title">Pan India Supplier Base</h2>
        <div className="regions-grid">
          {regions.map((region, index) => (
            <div key={index} className="region-card">
              <h3 className="region-name">{region.name}</h3>
              <ul className="region-items">
                {region.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="region-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplierBase;

