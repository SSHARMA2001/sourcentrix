import React from 'react';
import { Logo } from '../utils';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <Logo size="large" showTagline={true} />
        </div>
        <h1 className="hero-title">
          Strategic Sourcing & Supply Chain Solutions
        </h1>
        <p className="hero-subtitle">
          Empowering organizations through strategic guidance, innovative solutions, and unparalleled expertise
        </p>
      </div>
    </section>
  );
};

export default Hero;

