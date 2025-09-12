import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon, heading, content, theme = 'blue' }) => {
  const themeClass = `feature-card--${theme}`;

  return (
    <article className={`feature-card ${themeClass}`} aria-labelledby={`fc-${heading.replace(/\s+/g, '-')}`}>
      <div className="feature-card__inner">
        <div className="feature-card__icon" aria-hidden>{icon}</div>
        <h3 id={`fc-${heading.replace(/\s+/g, '-')}`} className="feature-card__title">{heading}</h3>
        <p className="feature-card__content">{content}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
