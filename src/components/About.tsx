import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Founded in 2025, <strong>SOURCENTRIX</strong> is the essential partner simplifying global sourcing and Supply Chain Management (SCM). 
            We leverage the deep, collective expertise of professionals with over 20 years of industry experience to serve as a comprehensive 
            consolidator, aggregator, and solution provider, simplifying complex customer requirements. Guided by strong business acumen and an 
            unwavering customer-focused vision, we deliver tailored, end-to-end solutions under one roof. This bespoke approach is flawlessly 
            supported by strategic logistics partnerships with leading 3PL providers, guaranteeing timely, secure, and reliable deliveries every time.
          </p>
          {/* <p className="about-text">
            We provide tailored solutions to meet specific customer needs, supported by our logistics 
            partnerships with leading 3PL providers to ensure timely and secure deliveries.
          </p> */}
          <p className="about-text highlight">
            We are passionate about what we do, and we are committed to provide the best sourcing solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
