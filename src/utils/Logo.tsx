import React from 'react';
import logoImage from '../assets/logo.jpeg';
import './Logo.css';

interface LogoProps {
  showTagline?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ showTagline = false, size = 'medium' }) => {
  return (
    <div className={`logo-container logo-${size}`}>
      <img src={logoImage} alt="SOURCENTRIX Logo" className="logo-image" />
      {showTagline && <div className="logo-tagline">ONE STOP SOLUTION</div>}
    </div>
  );
};

export default Logo;



