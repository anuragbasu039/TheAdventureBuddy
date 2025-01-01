import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/adventurebuddylogo.png'; // Adjust the path to your logo image

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="navbar-container">

            <div className="logo">
                <a href="/">
                    <img src={logo} alt="The Adventure Buddy" />
                </a>
            </div>
            <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
                <a href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
                <a href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
                <div className="nav-link dropdown" onClick={toggleDropdown}>
                    Activities
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="/activities/rising" className="dropdown-item">Rising Wanderer</a>
                            <a href="/activities/master" className="dropdown-item">Master pioneer</a>
                            {/*<a href="/rafting" className="dropdown-item">Rafting</a>*/}
                        </div>
                    )}
                </div>
                <a href="/safety" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Safety</a>
                <a href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                <a href="/login" className="nav-link login-button" onClick={() => setMobileMenuOpen(false)}>Login</a>
            </div>
            <div className="menu-toggle" onClick={handleMobileMenuToggle}>
                <span className={`bar ${isMobileMenuOpen ? 'rotate1' : ''}`}></span>
                <span className={`bar ${isMobileMenuOpen ? 'fade' : ''}`}></span>
                <span className={`bar ${isMobileMenuOpen ? 'rotate2' : ''}`}></span>
            </div>
        </div>
    );
};

export default Navbar;
