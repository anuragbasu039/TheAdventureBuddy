// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Herosection.module.css';
import adventureImage from '../../assets/Heroimage.png'; // Replace with your actual image path

const HeroSection = () => {
    return (
        <div className={styles["hero-section"]}>
            <div>
                <h1>Welcome To <br /> Adventure <br /> Life!</h1>
                <p>
                    Embark on an Adventure with The Adventure Buddy - Pioneering Affordable and Accessible Outdoor Experiences in Bundelkhand!
                </p>
                <a href="/about" rel="noopener noreferrer">
                    <button className={styles["read-more-btn"]}>Read More</button>
                </a>
            </div>
            <img src={adventureImage} alt="Adventure Life" className={styles["hero-image"]} />
        </div>
    );
};

export default HeroSection;
