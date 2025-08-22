import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Drivoxe from '../../src/assets/Drivoxe..svg';

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
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
            <li><a href="#" onClick={closeMenu}>Service</a></li>
            <li><a href="#" onClick={closeMenu}>Cars</a></li>
            <li><a href="#" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#" onClick={closeMenu}>About</a></li>
          </ul>
          <div className="navbar-buttons">
            <button className="btn btn-contact text-red-500">Contact </button>
          <div className="line text-red-500">|</div>
            <button className="btn btn-signup border rounded-4xl px-5 py-2 transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:text-white hover:scale-105 hover:shadow-lg">
            Sign up
            </button>
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
