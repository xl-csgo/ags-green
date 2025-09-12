import React from 'react';
import './CareerHero.css';

// background: image url import passed in
const CareerHero = ({ background }) => {
  return (
    <section
      className="career-hero"
      style={background ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${background})` } : undefined}
      aria-labelledby="career-hero-heading"
    >
      <div className="career-hero-inner">
        <div className="career-hero-left">
          <h1 id="career-hero-heading" className="career-hero-title">
            <span className="accent">Opportunities</span> <span className="light">At</span><br />
            <span className="company">AGS Green</span>
          </h1>
        </div>
        <div className="career-hero-right">
          <p className="career-hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer fringilla est sapien, eget blandit libero semper sed.
            Etiam a lobortis sem, vitae fringilla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;