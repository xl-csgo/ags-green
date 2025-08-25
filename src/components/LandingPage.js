import React from 'react';
import './LandingPage.css';
import HeroSection from './HeroSection';
import { ReactComponent as Logo } from '../assets/logo.svg';
import bg from '../assets/bg.png';

const LandingPage = () => {
	const logo = <Logo width={56} height={56} />;
	const background = bg;

	return (
		<div className="landing-page">
			<HeroSection logo={logo} background={background} />
		</div>
	);
};

export default LandingPage;
