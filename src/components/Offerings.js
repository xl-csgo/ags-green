import React from 'react';
import './Offerings.css';


const Offerings = () => (
	<section className="offerings">
		<div className="offering-row offering-row--left">
			<div className="offering-text">
				<h3 className="offering-title"><span className="highlight">Solar</span> Rooftop Solutions</h3>
				<p className="offering-desc">Custom designed systems for residential, commercial and industrial rooftops. We manage site assessment and design installation, and commissioning so you can generate clean energy, reduce electricity bills, and lower your carbon footprint. Ongoing monitoring and maintenance support worry-free performance</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
		</div>

		<div className="offering-row offering-row--right">
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
		</div>

	</section>
);

export default Offerings;