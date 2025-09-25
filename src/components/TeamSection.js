import React from 'react';
import './TeamSection.css';
import team1 from '../assets/shalini_malik.jpeg';
import team2 from '../assets/gagan_singh_mokha.jpeg';
import team3 from '../assets/mohit_shukla.jpeg';

const TeamSection = () => {
  // Placeholder team members data
  const teamMembers = [
    {
      id: 2,
      name: 'Gagan Singh Mokha',
      designation: 'CEO',
      description: 'Experienced professional with a proven track record in the financial services and capital markets sectors. Mr. Mokha has rich experience of working in Renewable Sector.',
      image: team2
    },
    {
      id: 1,
      name: 'Shalini Malik',
      designation: 'COO',
      description: 'A Company Secretary by Profession, Governance, Risk Compliance Professional with rich experience from Solar Module manufacturing and Renewable Industry.',
      image: team1
    },
    {
      id: 3,
      name: 'Mohit Shukla',
      designation: 'Consultant',
      description: 'A dedicated SME Professional with 31 years of experience in Project Execution related to Fire Protection & Renewable Resource Industry.',
      image: team3
    },
  ];

  return (
    <section className="team-section">
      <div className="team-section__inner">
        <div className="team-card">
          <div className="team-card__heading">
            <h2 className="team-card__title">Our Team</h2>
            <span className="team-card__arrow" aria-hidden>↗</span>
          </div>
          <p className="team-card__description">
            Meet the passionate individuals driving our mission forward with expertise, experience, and a passion for clean energy.
          </p>
        </div>

        {/* Right Content - 60% width */}
        <div className="team-card__content">
          {/* Team Grid */}
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div
                  className={`team-member__image ${member.image ? 'has-photo' : ''}`}
                  style={member.image ? { backgroundImage: `url(${member.image})` } : {}}
                  aria-label={member.name}
                >
                  {/* If no image, show placeholder pattern */}
                  {!member.image && (
                    <div className="team-member__placeholder">
                      <div className="placeholder-pattern"></div>
                    </div>
                  )}
                  {/* Hover overlay with description */}
                  <div className="team-member__overlay">
                    <div className="team-member__description">
                      {member.description}
                    </div>
                  </div>
                </div>
                
                <div className="team-member__info">
                  <h3 className="team-member__name">{member.name}</h3>
                  <p className="team-member__designation">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
