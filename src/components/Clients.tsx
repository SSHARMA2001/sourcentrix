import React from 'react';
import lockerLogo from '../assets/locker.png';
import vedacoesmakitaLogo from '../assets/vedacoesmakita_logo.jpeg';
import './Clients.css';

interface Client {
  name: string;
  logo: string;
  alt: string;
}

const Clients: React.FC = () => {
  const clients: Client[] = [
    {
      name: 'Locker',
      logo: lockerLogo,
      alt: 'Locker Logo',
    },
    {
      name: 'Vedacoes Makita',
      logo: vedacoesmakitaLogo,
      alt: 'Vedacoes Makita Logo',
    },
  ];

  return (
    <section className="clients">
      <div className="container">
        <h2 className="section-title">Trusted By</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

