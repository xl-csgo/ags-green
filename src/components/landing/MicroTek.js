import React from 'react';
import './MicroTek.css';
import IMG from '../../assets/cert.jpg';

// A standalone row component based on the provided SVG snippet
// - Draws an animated dashed overlay path with a moving dot
// - Shows the solar panel illustration with subtly animated gradient stops
function MicroTek() {
	return (
		<div className="offering-row offering-row--right microtek-row">
			<div className="microtek-illustration" id = "MicroTek">
                <img src={IMG} alt="MicroTek" className="offering-image" style={{ objectFit: 'cover', width: '50vw', height: '100%', borderRadius: '3vw', border: '2px solid #ccc', boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)' }}/>
			</div>

			<div className="offering-text offering-text--right">
				<h3 className="offering-title"><span className="offering-highlight">MicroTek —</span> Innovative Solar Products</h3>
				<p className="offering-desc">AGS Green Renew Private Limited is a proud distributor of MicroTek's wide range of innovative PSD products.</p>
			</div>
		</div>
	);
}

export default MicroTek;

