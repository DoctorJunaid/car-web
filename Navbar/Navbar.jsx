import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Drivoxe from '../src/assets/Drivoxe..svg'

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to close the menu when screen size changes (e.g., from mobile to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) { // Assuming 768px is the breakpoint for mobile
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          <img src={Drivoxe} alt="Drivoxe Logo" className="h-10" />
        </a>

        {/* Container for links and buttons */}
        {/* The 'active' class is toggled based on the isMenuOpen state */}
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#">Service</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <div className="navbar-buttons">
            <button className="btn btn-contact">Contact</button>
            <button className="btn btn-signup">Sign up</button>
          </div>
        </div>

        {/* Hamburger menu icon - visible only on mobile */}
        <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          {/* These divs create the three lines of the hamburger icon */}
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
          <div className="menu-icon-line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
