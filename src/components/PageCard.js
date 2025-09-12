import React from 'react';
import './PageCard.css';

const PageCard = ({ heading, content, theme = 'default' }) => {
  const themeClass = theme ? `page-card--${theme}` : '';

  return (
    <section className={`page-card ${themeClass}`}>
      <div className="page-card__inner">
        <div className="page-card__heading">
          <h2 className="page-card__title">{heading}</h2>
          <span className="page-card__arrow" aria-hidden>↗</span>
        </div>

        <div className="page-card__content">{content}</div>
      </div>
    </section>
  );
};

export default PageCard;
