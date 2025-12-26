import React from 'react';
import supplyChainImage from '../assets/services/supply_chain.jpg';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Supply Chain Management',
      description: 'We assist clients in SCM to improve their supply chain.',
      image: supplyChainImage,
    },
    {
      title: 'Sourcing Process Optimization',
      description: 'We improve sourcing and supply chain processes for efficiency.',
      image: supplyChainImage,
    },
    {
      title: 'Strategic Sourcing',
      description: 'We work with suppliers to create strong base for quality products at best pricing.',
      image: supplyChainImage,
    },
    {
      title: 'Sustainable Packaging',
      description: 'We assist with all sustainable & export worthy solution.',
      image: supplyChainImage,
    },
  ];

  const serviceFeatures = [
    'Address customer requirement',
    'Customized products',
    'Tailored solutions',
    'Integrated Supply Chain',
    'Competitive supplier base',
    'Consolidation',
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ '--bg-image': `url(${service.image})` } as React.CSSProperties}
            >
              <div className="service-overlay"></div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="service-features">
          <h3 className="features-title">Key Features</h3>
          <ul className="features-list">
            {serviceFeatures.map((feature, index) => (
              <li key={index} className="feature-item">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

