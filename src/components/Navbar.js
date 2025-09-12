import React, { useEffect, useState } from 'react';      
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
    </nav>
  );
};

export default Navbar;