// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Safetypage.module.css'; // Ensure to add necessary styling in App.css or any other CSS file
import SafetyImg from '../../assets/Group 1.png'
import Footer from '../../components/Footer/Footer';
import SafetyMeasures from "../../components/Safetymeasures/Safetymeasures";
import Logobar from '../../components/Logobar/Logobar';

const SafetyMessage = () => {
    return (
        <>
            <div className={styles["safety-container"]}>
                <div className={styles["safety-content"]}>
                    <h1 className={styles.headline}>Adventure begin with <span
                        className={styles["safety-highlight"]}>Safety!</span></h1>
                    <div className={styles["safety-image"]}>
                        <img src={SafetyImg} alt="Adventure Buddy"/>
                    </div>
                    <p>
                        Safety is our first priority at The Adventure Buddy. We want to ensure that your experience with
                        us is not only thrilling and adventurous but also secure and well-protected. Our commitment to
                        safety runs deep, and we take comprehensive measures to ensure your well-being throughout your
                        journey with us.
                    </p>
                    <p>
                        We use standard technical gear for all adventure activities, including harnesses, helmets,
                        carabiners, ropes, and other equipment. Our gear is of the highest quality, sourced from Italy &
                        USA.
                    </p>
                    <p>
                        We ensure student safety through certified equipment, professional trainers, and comprehensive
                        insurance. Our expert trainers provide top-notch guidance and emergency response. We prioritize
                        health with on-site first aid and medical supplies. Our comprehensive insurance offers peace of
                        mind, making safety our top priority.
                    </p>
                </div>
                {/*<div className={styles["safety-image"]}>*/}
                {/*    <img src={SafetyImg} alt="Adventure Buddy"/>*/}
                {/*</div>*/}
            </div>
            <Logobar/>
            <SafetyMeasures/>
            <Footer/>
        </>
    );
};

export default SafetyMessage;
