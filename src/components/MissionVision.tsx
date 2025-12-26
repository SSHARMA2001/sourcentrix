import React from 'react';
import './MissionVision.css';

const MissionVision: React.FC = () => {
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <h2 className="mv-title">Mission</h2>
            <p className="mv-text">
              Our mission is to empower organizations to thrive through strategic guidance, 
              innovative solutions, and unparalleled expertise.
            </p>
          </div>
          <div className="vision-card">
            <h2 className="mv-title">Vision</h2>
            <p className="mv-text">
              We aim to push boundaries using advanced tech for transformative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

