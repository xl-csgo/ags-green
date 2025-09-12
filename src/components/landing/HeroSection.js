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
      <span className="hero-company">AGS GREEN RENEW PRIVATE LIMITED</span>
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
          <span style={{ color: '#1bcb1bff' }}>ऊर्जा</span> से <span style={{ color: '#1bcb1bff' }}>उन्नति</span> की<br />
          और <span className="hero-hindi-desc">
          solar parks, professional operation and maintenance services</span>
        </span>
      </div>
    </div>
    
      {/* Scroll down hint - thin white circle with a down arrow */}
      <a href="#next" className="scroll-down" aria-label="Scroll down to next section">
        <svg
          className="scroll-icon"
          width="36"
          height="58"
          viewBox="0 0 36 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <circle cx="18" cy="18" r="5.5" stroke="rgba(255,255,255,0.95)" strokeWidth="1.2" fill="none" />
          <path d="M18 32 V44" stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12.5 38.5 L18 44 L23.5 38.5" stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

    </section>
);

export default HeroSection;
