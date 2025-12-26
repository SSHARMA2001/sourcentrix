import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../utils';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('services');
  };

  const handleProductsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('products');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <Logo size="large" showTagline={true} />
        </Link>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a 
                href={location.pathname === '/' ? '#home' : '/#home'} 
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#about' : '/#about'} 
                onClick={closeMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="/"
                onClick={handleServicesClick}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="/"
                onClick={handleProductsClick}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#supplier-base' : '/#supplier-base'} 
                onClick={closeMenu}
              >
                Supplier Base
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#industries' : '/#industries'} 
                onClick={closeMenu}
              >
                Industries
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#contact' : '/#contact'} 
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

