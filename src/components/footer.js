import React from 'react'
import './footer.css'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-left">
                        <Logo className="footer-logo" />
                        <p className="footer-desc">A little paragraph about the company</p>
                            <div className="footer-socials" aria-label="social links">
                                <a href="/" className="social-icon" aria-label="Facebook">f</a>
                                <a href="/" className="social-icon" aria-label="Twitter">t</a>
                                <a href="/" className="social-icon" aria-label="YouTube">y</a>
                                <a href="/" className="social-icon" aria-label="Instagram">i</a>
                                <a href="/" className="social-icon" aria-label="Dribbble">d</a>
                            </div>
                    </div>
                    <div className="footer-columns">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="/">Landing Page</a></li>
                                <li><a href="/">Popup Builder</a></li>
                                <li><a href="/">Web-design</a></li>
                                <li><a href="/">Content</a></li>
                                <li><a href="/">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Use Cases</h4>
                            <ul>
                                <li><a href="/">Web-designers</a></li>
                                <li><a href="/">Marketers</a></li>
                                <li><a href="/">Small Business</a></li>
                                <li><a href="/">Website Builder</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="/">Academy</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Themes</a></li>
                                <li><a href="/">Hosting</a></li>
                                <li><a href="/">Developers</a></li>
                                <li><a href="/">Support</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">FAQs</a></li>
                                <li><a href="/">Teams</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© 2025 All Rights Reserved</p>
                        <nav className="footer-links">
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/terms">Terms of Use</a>
                            <a href="/sales-and-refunds">Sales and Refunds</a>
                            <a href="/legal">Legal</a>
                            <a href="/sitemap">Site Map</a>
                        </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer