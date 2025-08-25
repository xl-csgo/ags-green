import React from 'react';
import './CompanyDescription.css';
import Rhombus from '../assets/rhombus.svg';


const CompanyDescription = () => {
  return (
    <div className="company-description">
      <img src={Rhombus} alt="rhombus" className="rhombus" />
      <p>
        We are AGS Green, dedicated to advancing solar energy solutions in India. We specialize in solar rooftops, ground mounted solar projects, innovative solutions for farmers and comprehensive operations and maintenance of solar installations.
      </p>
      <img src={Rhombus} alt="rhombus" className="rhombus" />
    </div>
  );
};

export default CompanyDescription;