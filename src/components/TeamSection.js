import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  // Placeholder team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Name',
      designation: 'Designation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam'
    },
    {
      id: 2,
      name: 'Name',
      designation: 'Designation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam'
    },
    {
      id: 3,
      name: 'Name',
      designation: 'Designation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam'
    },
    {
      id: 4,
      name: 'Name',
      designation: 'Designation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam'
    }
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla est sapien, eget blandit libero semper sed. Etiam et lobortis sem, vitae fringilla massa.
          </p>
        </div>

        {/* Right Content - 60% width */}
        <div className="team-card__content">
          {/* Team Grid */}
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-member__image">
                  {/* Placeholder image with pattern */}
                  <div className="team-member__placeholder">
                    <div className="placeholder-pattern"></div>
                  </div>
                  
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
