import React from 'react';
import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Ashok Kumar',
      role: 'FOUNDER',
      description: '15+ years of experience in technical commercial sales in the metallurgical industries, with exposure to India and global (USA, Brazil, Mexico, Sweden, and China).',
    },
    {
      name: 'Thangabalu',
      role: 'PRODUCT MANAGER',
      description: '15+ years of experience in the fields of Quality, Project Management, and Pre-sales functions.',
    },
    {
      name: 'Barath',
      role: 'BUSINESS DEVELOPMENT MANAGER',
      description: '15+ years of experience in Sales and Business Development.',
    },
  ];

  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

