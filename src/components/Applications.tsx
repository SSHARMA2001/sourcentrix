import React from 'react';
import './Applications.css';

interface Application {
  name: string;
  image: string;
}

const Applications: React.FC = () => {
  const applications: Application[] = [
    { name: 'Fertilizer', image: 'fertilizer1.jpg' },
    { name: 'Oil and Gas', image: 'Oil and Gas1.jpg' },
    { name: 'Water', image: 'water1.jpg' },
    { name: 'Automotive', image: 'auto2.jpg' },
    { name: 'Carbon', image: 'carbon1_edited.jpg' },
    { name: 'Pharma', image: 'pharma1.jpg' },
    { name: 'Paper', image: 'paper1.jpg' },
    { name: 'Nuclear', image: 'nuclear1.jpg' },
    { name: 'Thermal', image: 'thermal1.jpg' },
    { name: 'Power', image: 'power1.jpg' },
    { name: 'Cryogenic', image: 'cryo1.jpg' },
    { name: 'Aerospace', image: 'aerospace1.jpg' },
  ];

  return (
    <section id="applications" className="applications">
      <div className="container">
        <div className="applications-grid">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              <div className="application-image">
                <img src={app.image} alt={app.name} />
              </div>
              <h3 className="application-name">{app.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;

