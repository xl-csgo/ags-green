import React from 'react'
import './CareerText.css'
import FeatureCard from './FeatureCard'

const CareerText = () => {
  const short = 'Joining AGS Green means becoming a part of India\'s green energy revolution. We offer a dynamic and supportive work environment where your contributions directly help build a sustainable future.'

  return (
    <div className='career-text-head'>
      <h1 className='contact-title'>Why <span className='highlight'>Work</span> With Us?</h1>
      <p className='contact-desc'>Joining AGS Green means becoming a part of India's green energy revolution. We offer a dynamic and supportive work environment where your contributions directly help build a sustainable future. We are not just installing solar panels; we are empowering communities, supporting farmers, and driving national progress.</p>

      <div className="career-cards-row">
        <FeatureCard
          icon={'☀️'}
          heading={'Feature 1'}
          content={short}
          theme={'blue'}
        />

        <FeatureCard
          icon={'⚡'}
          heading={'Feature 2'}
          content={'We offer competitive salaries, continuous learning opportunities, and remote-friendly policies for eligible roles.'}
          theme={'orange'}
        />

        <FeatureCard
          icon={'🌱'}
          heading={'Feature 3'}
          content={'Be part of a mission-driven team that values impact, sustainability, and community-first solutions.'}
          theme={'blue'}
        />
      </div>
    </div>
  )
}

export default CareerText
