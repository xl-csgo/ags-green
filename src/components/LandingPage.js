import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './landing/HeroSection';
import Offerings from './landing/Offerings';
import Calculator from './landing/Calculator';
import { ReactComponent as Logo } from '../assets/logo.svg';
import bg from '../assets/bg.png';
import CompanyDescription from './landing/CompanyDescription';
import BlogPosts from './landing/BlogPosts';
import ContactSection from './landing/ContactSection';
import './Landing.css';
import Navbar from './Navbar';
import Footer from './footer';

const LandingPage = () => {
	const logo = <Logo width={56} height={56} />;
	const background = bg;

	const heroRef = useRef(null);
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		if (!heroRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				// show navbar once less than or equal to 50% of the hero is visible
				setShowNavbar(entry.intersectionRatio <= 0.5);
			},
			{ threshold: [0, 0.25, 0.5, 0.75, 1] }
		);

		observer.observe(heroRef.current);

		// initial check in case the page is already scrolled
		if (heroRef.current) {
			const rect = heroRef.current.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
			const ratio = (visible / rect.height) || 0;
			setShowNavbar(ratio <= 0.5);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div className="landing-page">
			{/* landing-navbar wrapper controls visibility via Landing.css */}
			<div className={`landing-navbar ${showNavbar ? 'show' : ''}`}>
				<Navbar />
			</div>

			<div ref={heroRef}>
				<HeroSection logo={logo} background={background} />
			</div>

			<CompanyDescription />
			<Offerings />
			<Calculator />
			<BlogPosts />
			<ContactSection />
			<Footer />
		</div>
	);
};

export default LandingPage;
