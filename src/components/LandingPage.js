import React from 'react';
import './LandingPage.css';
import HeroSection from './HeroSection';
import Offerings from './Offerings';
import { ReactComponent as Logo } from '../assets/logo.svg';
import bg from '../assets/bg.png';
import CompanyDescription from './CompanyDescription';

const LandingPage = () => {
	const logo = <Logo width={56} height={56} />;
	const background = bg;

	return (
		<div className="landing-page">
			<HeroSection logo={logo} background={background} />
			<CompanyDescription />
			<Offerings />
		</div>
	);
};

export default LandingPage;
