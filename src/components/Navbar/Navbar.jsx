import React, { useEffect, useState, useContext } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../components/ContextAuth/AuthContext';

const Navbar = () => {
    const [shrink, setShrink] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, logout } = useContext(AuthContext); // Access user and logout from AuthContext

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShrink(true);
        } else {
            setShrink(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        logout(); // Call logout function from AuthContext
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest('.navbar')) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <nav className={`navbar ${shrink ? 'visible' : ''}`}>
            <div className="navbar-container">
                <button className="menu-toggles" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item dropdown" onClick={toggleDropdown}>
                        <NavLink to="">Activities</NavLink>
                        <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                            {/* <li><NavLink to="/activities/schoolcamp" onClick={(e) => e.stopPropagation()}>Epic Explorer</NavLink></li> */}
                            <li><NavLink to="/activities/rising" onClick={(e) => e.stopPropagation()}>Rising Wanderer</NavLink></li>
                            <li><NavLink to="/activities/outdoorcamp" onClick={(e) => e.stopPropagation()}>Master Pioneer</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item"><NavLink to="/register">Register</NavLink></li>
                    <li className="nav-item"><NavLink to="/safety">Safety</NavLink></li>
                    <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>

                    {user ? (
                        <li className="nav-item">
                            <button className="logout-button" onClick={handleLogout}>Log Out</button>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <NavLink to="/login">
                                <button className="login-button">Log In</button>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
