import React, { useEffect, useState } from 'react';     
import ReactDOM from 'react-dom';
import './Navbar.css';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Rhombus from '../assets/rhombus.svg';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' }
];

const Navbar = () => {
  const [activePath, setActivePath] = useState('/');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Get current pathname (ignore trailing slash)
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    setActivePath(path);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Logo className="navbar-logo" />
        <span className="nav-company">AGS GREEN RENEW PRIVATE LIMITED</span>
      </div>
      <ul className="navbar-links">
        {links.map(link => {
          const normalized = link.href.replace(/\/$/, '') || '/';
          const isActive = normalized === activePath;
          return (
            <li key={link.href} className={isActive ? 'active-wrapper' : undefined}>
              {isActive && (
                <img src={Rhombus} alt="active" className="active-rhombus" />
              )}
              <a href={link.href} className={isActive ? 'active' : undefined}>{link.label}</a>
            </li>
          );
        })}
      </ul>
      <a className="contact-btn" href="/#contact">Contact Us</a>
      {/* Hamburger for mobile */}
      <button
        className="hamburger"
        aria-label="Open menu"
        type="button"
        onClick={() => setMobileOpen(true)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Mobile sidenav rendered as a portal so it covers the full viewport */}
      {typeof document !== 'undefined' && ReactDOM.createPortal(
        <div className={`mobile-sidenav ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}>
          <div className="mobile-sidenav-panel" role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
            <button className="mobile-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>&times;</button>
            <div className="mobile-sidenav-content">
              <ul>
                {links.map(link => (
                  <li key={link.href}><a href={link.href}>{link.label}</a></li>
                ))}
                <li><a href="/#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
};

export default Navbar;