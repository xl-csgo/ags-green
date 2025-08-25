import React from 'react';
import './HeroSection.css';

// logo: SVG React component or <img src="..." />, background: PNG url or import
const HeroSection = ({ logo, background }) => (
  <section
    className="hero-section"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.12)), url(${background})` }}
  >
    <div className="hero-brand">
      {logo}
      <span className="hero-company">AGS GREEN RENEW PVT. LTD.</span>
    </div>
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">
          Leaders In <span className="hero-highlight">Solar</span> Solutions
        </h1>
        <p className="hero-desc">
          Empowering homes, businesses and communities with innovative solar rooftop solutions.
        </p>
        <a href="/" className="hero-btn">
          Learn More
        </a>
      </div>
      <div className="hero-right">
        <span className="hero-hindi">
          <span style={{ color: '#FFA93D' }}>ऊर्जा</span> से <span style={{ color: '#FFA93D' }}>उन्नति</span> की<br />
          और <span className="hero-hindi-desc">
          solar parks, professional<br /></span>
          <span className="hero-hindi-desc">operation and maintenance services</span>
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;
