// src/ActivitiesSection.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Activitiessection.module.css';
import schoolcamp from '../../assets/schoolcamp.png';
import outdoorcamp from '../../assets/outdoorcamp.png';
import AdventureActivitiescamp from '../../assets/AdventureActivitiescamp.png';
import bg from '../../assets/hello.png';

const ActivitiesSection = () => {
    return (
        <div className={styles["activities-section"]}>
            <div className={styles.hero}>
                <img src={bg} alt="Hero" className={styles["hero-image"]} />
                <div className={styles["hero-content"]}>
                    <h2>What We Offering?</h2>
                    <h1>Our Activities</h1>
                </div>
            </div>
            <div className={styles.activities}>
                <a href="/activities/schoolcamp" className={styles["activity-card"]}>
                    <img id='school' src={schoolcamp} alt="School Camp" />
                     {/*<p>School Camp</p> */}
                </a>
                <a href="/activities/outdoorcamp" className={styles["activity-card"]}>
                    <img src={outdoorcamp} alt="Outdoor Camp" />
                    {/* <p>Outdoor Camp</p> */}
                </a>
                <a href="/activities/adventureactivities" className={styles["activity-card"]}>
                    <img src={AdventureActivitiescamp} alt="Adventure Activities" />
                    {/* <p>Adventure Activities</p> */}
                </a>
            </div>
        </div>
    );
};

export default ActivitiesSection;
