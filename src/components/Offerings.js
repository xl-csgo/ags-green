import React from 'react';
import './Offerings.css';
import solarSvg from '../assets/solar.svg';
import sunSvg from '../assets/sun.svg';
import bulbSvg from '../assets/bulb.svg';


const Offerings = () => (
	<section className="offerings">
		<div className="offering-row offering-row--left">
			<svg className="animation-overlay-1" width="624" height="289" viewBox="0 0 624 289" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.5" d="M619 8.37211C467.453 -7.60632 132.487 25.1494 5 284" stroke="url(#paint0_linear_2016_108)" stroke-width="10" stroke-linecap="round" stroke-dasharray="35 35"/>
				<defs>
				<linearGradient id="paint0_linear_2016_108" x1="312" y1="5" x2="312" y2="284" gradientUnits="userSpaceOnUse">
				<stop stop-color="#FFBE0C"/>
				<stop offset="1" stop-color="#0095F5"/>
				</linearGradient>
				</defs>
			</svg>

			<div className="offering-text">
				<h3 className="offering-title"><span className="highlight">Solar</span> Rooftop Solutions</h3>
				<p className="offering-desc">Custom designed systems for residential, commercial and industrial rooftops. We manage site assessment and design installation, and commissioning so you can generate clean energy, reduce electricity bills, and lower your carbon footprint. Ongoing monitoring and maintenance support worry-free performance</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
			<div className="offering-illustration">
				<img src={sunSvg} alt="Illustration of the Sun." />
			</div>
			
		</div>

		<div className="offering-row offering-row--right">
			<svg className="animation-overlay-2" width="514" height="246" viewBox="0 0 514 246" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path opacity="0.5" d="M5.00001 7.85239C129.397 -5.66341 404.353 22.044 509 241" stroke="url(#paint0_linear_2016_109)" stroke-width="10" stroke-linecap="round" stroke-dasharray="35 35"/>
				<defs>
				<linearGradient id="paint0_linear_2016_109" x1="257" y1="5" x2="257" y2="241" gradientUnits="userSpaceOnUse">
				<stop stop-color="#FFBE0C"/>
				<stop offset="1" stop-color="#0095F5"/>
				</linearGradient>
				</defs>
			</svg>

			<div className="offering-illustration">
				<img src={solarSvg} alt="Solar park and ground mounted illustration" />
			</div>
			<div className="offering-text offering-text--right">
				<h3 className="offering-title"><span className="highlight">Solar</span> Parks And <span className="highlight">Ground Mounted</span> Solutions</h3>
				<p className="offering-desc">Turnkey development of large-scale, ground-mounted solar projects and solar parks. From land identification to project execution, we provide efficient power generation for industries, utilities, and communities, guaranteeing high output and reliable operation</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
		</div>

		<div className="offering-row offering-row--left">
			<div className="offering-text">
				<h3 className="offering-title">Plant <span className="highlight">O&amp;M</span> and <span className="highlight">EPC</span> Services</h3>
				<p className="offering-desc">Comprehensive operations and maintenance to maximize plant performance, minimize downtime, and protect your investment. Our EPC team delivers complete project management for all types of solar installations, focusing on quality, compliance, and timely delivery.</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
			<div className="offering-illustration">
				<img src={bulbSvg} alt="Operations & maintenance and EPC services illustration" />
			</div>
		</div>

	</section>
);

export default Offerings;