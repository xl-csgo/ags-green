import React from 'react';
import './LandingPage.css';
import HeroSection from './HeroSection';
import Offerings from './Offerings';
import { ReactComponent as Logo } from '../assets/logo.svg';
import bg from '../assets/bg.png';
import CompanyDescription from './CompanyDescription';
import BlogPosts from './BlogPosts';
import ContactSection from './ContactSection';
import Footer from './footer';

const LandingPage = () => {
	const logo = <Logo width={56} height={56} />;
	const background = bg;

	return (
		<div className="landing-page">
			<HeroSection logo={logo} background={background} />
			<CompanyDescription />
			<Offerings />
			<BlogPosts />
			<ContactSection />
			<Footer />
		</div>
	);
};

export default LandingPage;
