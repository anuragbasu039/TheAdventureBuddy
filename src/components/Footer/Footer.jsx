import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-section"]}>
            <img src={logo} alt="The Adventure Buddy Logo" className={styles["footer-logo"]} />
          </div>
          <div className={styles["footer-section"]}>
            <h4>Explore</h4>
            <ul>
              <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms-conditions">Terms & Condition</NavLink></li>
            </ul>
            <div className={styles["social-icons"]}>
              <NavLink to="https://www.facebook.com/adventurebuddy01"><FontAwesomeIcon icon={faFacebookF} /></NavLink>
              <NavLink to="https://x.com/adventurebuddy1"><FontAwesomeIcon icon={faTwitter} /></NavLink>
              <NavLink to="https://www.instagram.com/adventurebuddy01/"><FontAwesomeIcon icon={faInstagram} /></NavLink>
              <NavLink to="https://www.linkedin.com/company/adventurebuddy01/"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
            </div>
          </div>
          <div className={styles["footer-section"]}>
            <h4>Quick Links</h4>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
              <li><NavLink to="/safety">Safety</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/activities/schoolcamp">Epic Explorer</NavLink></li>
              <li><NavLink to="/activities/adventureactivities">Rising Wanderer</NavLink></li>
              <li><NavLink to="/activities/outdoorcamp">Master Pioneer</NavLink></li>


            </ul>
          </div>
          <div className={styles["footer-section"]}>
            <h4>Head Office</h4>
            <address>
              RISE Incubation Center, Nagar Nigam Parisar, Elite Chauraha, Civil Lines, Jhansi, Uttar Pradesh - 284001
            </address>
            <h4>Connect With Us</h4>
            <p><a href="tel:9351891313">9351891313</a>, <a href="tel:8572575655">8572575655</a></p>
            <p><a href="mailto:contact@theadventurebuddy.in">contact@theadventurebuddy.in</a></p>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          &copy; 2024 The Adventure Buddy. All Rights Reserved.
        </div>
      </footer>
  );
};

export default Footer;
