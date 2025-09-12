import React from 'react';
import HeroSection from './landing/HeroSection';
import Offerings from './landing/Offerings';
import { ReactComponent as Logo } from '../assets/logo.svg';
import bg from '../assets/bg.png';
import CompanyDescription from './landing/CompanyDescription';
import BlogPosts from './landing/BlogPosts';
import ContactSection from './landing/ContactSection';
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
