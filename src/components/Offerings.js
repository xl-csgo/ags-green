import React, { useRef, useEffect } from 'react';
import './Offerings.css';
import solarSvg from '../assets/solar.svg';
import sunSvg from '../assets/sun.svg';
import bulbSvg from '../assets/bulb.svg';



function Offerings() {
	const animRef = useRef(null);
	const overlayRef = useRef(null);
	const animRef2 = useRef(null);
	const overlayRef2 = useRef(null);

	useEffect(() => {
		if (!overlayRef.current && !overlayRef2.current) return;
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					try {
						if (e.target === overlayRef.current && animRef.current && typeof animRef.current.beginElement === 'function') {
							animRef.current.beginElement();
						}
						if (e.target === overlayRef2.current && animRef2.current && typeof animRef2.current.beginElement === 'function') {
							animRef2.current.beginElement();
						}
					} catch (err) { /* ignore */ }
				}
			});
		}, { threshold: 0.2 });

		if (overlayRef.current) obs.observe(overlayRef.current);
		if (overlayRef2.current) obs.observe(overlayRef2.current);
		return () => obs.disconnect();
	}, []);

	return (
	<section className="offerings">
		<div className="offering-row offering-row--left">
			<svg ref={overlayRef} className="animation-overlay-1" width="624" height="289" viewBox="0 0 624 289" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="overlayPath1" opacity="0.5" d="M619 8.37211C467.453 -7.60632 132.487 25.1494 5 284" stroke="url(#paint0_linear_2016_108)" stroke-width="10" stroke-linecap="round" stroke-dasharray="35 35"/>
			{/* moving square that follows the path (right -> left) */}
			<rect x="0" y="0" width="14" height="14" rx="3" fill="#FF9A24">
				<animateMotion ref={animRef} begin="indefinite" dur="3s" fill="freeze" rotate="auto">
					<mpath xlinkHref="#overlayPath1" />
				</animateMotion>
			</rect>
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
				<svg width="500" height="813" viewBox="0 0 427 813" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Outer glows pulsate slowly */}
					<ellipse opacity="0.15" cx="405.5" cy="406.5" rx="405.5" ry="405.5" fill="url(#paint0_linear_2016_99)">
						<animate attributeName="rx" values="405.5;440;405.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="ry" values="405.5;445;405.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.12;0.32;0.12" dur="4s" repeatCount="indefinite" />
					</ellipse>
					<ellipse opacity="0.25" cx="405.5" cy="406.5" rx="330.5" ry="331.5" fill="url(#paint1_linear_2016_99)">
						<animate attributeName="rx" values="330.5;365;330.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="ry" values="331.5;366;331.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.22;0.45;0.22" dur="4s" repeatCount="indefinite" />
					</ellipse>
					<ellipse opacity="0.5" cx="424.5" cy="406.5" rx="271.5" ry="272.5" fill="url(#paint2_linear_2016_99)">
						<animate attributeName="rx" values="271.5;305;271.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="ry" values="272.5;306;272.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.45;0.75;0.45" dur="4s" repeatCount="indefinite" />
					</ellipse>
					<ellipse opacity="0.7" cx="434.5" cy="406.5" rx="215.5" ry="216.5" fill="url(#paint3_linear_2016_99)">
						<animate attributeName="rx" values="215.5;250;215.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="ry" values="216.5;251;216.5" dur="4s" repeatCount="indefinite" />
						<animate attributeName="opacity" values="0.65;1;0.65" dur="4s" repeatCount="indefinite" />
					</ellipse>
					{/* Core circle pulses slightly faster */}
					<g transformOrigin="454 406" transform="translate(0,0)">
						<circle cx="454" cy="406" r="152" fill="url(#paint4_linear_2016_99)">
							<animate attributeName="r" values="152;190;152" dur="4s" repeatCount="indefinite" />
							<animateTransform attributeName="transform" type="scale" values="1;1.06;1" additive="sum" dur="4s" repeatCount="indefinite" />
						</circle>
					</g>
					<defs>
					<linearGradient id="paint0_linear_2016_99" x1="405.5" y1="0" x2="405.5" y2="813" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint1_linear_2016_99" x1="405.5" y1="75" x2="405.5" y2="738" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint2_linear_2016_99" x1="424.5" y1="134" x2="424.5" y2="679" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint3_linear_2016_99" x1="434.5" y1="190" x2="434.5" y2="623" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint4_linear_2016_99" x1="454" y1="254" x2="454" y2="558" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					</defs>
				</svg>

			</div>
			
		</div>

		<div className="offering-row offering-row--right">
			<svg ref={overlayRef2} className="animation-overlay-2" width="514" height="246" viewBox="0 0 514 246" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path id="overlayPath2" opacity="0.5" d="M5.00001 7.85239C129.397 -5.66341 404.353 22.044 509 241" stroke="url(#paint0_linear_2016_109)" stroke-width="10" stroke-linecap="round" stroke-dasharray="35 35"/>
				{/* moving square that follows the path (left -> right) */}
				<rect x="0" y="0" width="14" height="14" rx="3" fill="#0095F5">
					<animateMotion ref={animRef2} begin="indefinite" dur="3s" fill="freeze" rotate="auto">
						<mpath xlinkHref="#overlayPath2" />
					</animateMotion>
				</rect>
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

}

export default Offerings;