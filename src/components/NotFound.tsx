import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-message">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <button 
              onClick={() => navigate('/')} 
              className="not-found-button primary"
            >
              Go to Home
            </button>
            <button 
              onClick={() => navigate(-1)} 
              className="not-found-button secondary"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

