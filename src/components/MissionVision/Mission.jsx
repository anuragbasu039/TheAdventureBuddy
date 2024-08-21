// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Mission.module.css';

const MissionVision = () => {
    return (
        <div className={styles.Mission}>
            <section className={styles["mission-vision"]}>
                <h2>Our Mission</h2>
                <div className={styles.missions}>
                    <div className={styles.mission}>
                        <h3>Democratizing Adventure in Bundelkhand</h3>
                        <p>We provide affordable and accessible outdoor experiences for students, individuals, and the youth in Bundelkhand.</p>
                    </div>
                    <div className={styles.mission}>
                        <h3>Pioneering Affordable Adventure Activities</h3>
                        <p>We offer school adventure camps, trekking expeditions, and diverse group activities to ignite the adventurous spirit.</p>
                    </div>
                    <div className={styles.mission}>
                        <h3>Cultivating Adventure Enthusiasts</h3>
                        <p>Our mission is to nurture a generation of adventure enthusiasts and successful sports personalities in Bundelkhand.</p>
                    </div>
                </div>
            </section>
            <section className={styles["mission-vision"]}>
                <h2>Our Vision</h2>
                <div className={styles.missions}>
                    <div className={styles.mission}>
                        <h3>Adventure for All in Bundelkhand</h3>
                        <p>We envision a community where everyone can experience the thrill of outdoor exploration, regardless of background.</p>
                    </div>
                    <div className={styles.mission}>
                        <h3>Transforming Bundelkhand into an Adventure Hub</h3>
                        <p>Our goal is to make Bundelkhand a center of adventure and excitement through affordable outdoor experiences.</p>
                    </div>
                    <div className={styles.mission}>
                        <h3>Inspiring a Culture of Exploration</h3>
                        <p>We aspire to foster a generation of bold adventurers, promoting resilience, curiosity, and environmental stewardship.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MissionVision;
