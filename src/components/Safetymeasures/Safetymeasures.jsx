// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from'./Safetymeasures.module.css';

const SafetyMeasures = () => {
    return (
        <div className={styles["safety-measures"]}>
            <div className={styles.section}>
                <h2 className={styles.s}>Certified <br /> Equipment</h2>
                <ul>
                    <li>-Use only equipment that meets industry safety standards.</li>
                    <li>-Regularly inspect and maintain all gear to ensure it is in good working condition.</li>
                    <li>-Provide proper fitting and adjustment of equipment for each participant.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Professional <br /> Trainers</h2>
                <ul>
                    <li>-We employ certified and experienced trainers skilled in both activities and emergency
                        response.
                    </li>
                    <li>-Maintain a low trainer-to-student ratio to ensure adequate supervision.</li>
                    <li>-Conduct thorough background checks and provide continuous training for staff.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Comprehensive <br/> Risk Assessment</h2>
                <ul>
                    <li>-Conduct a detailed risk assessment of all activities and locations.</li>
                    <li>-Identify potential hazards and implement measures to mitigate them.</li>
                    <li>-Have an emergency response plan tailored to each activity and location.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Pre-Camp <br/> Safety<br/> Briefing</h2>
                <ul>
                    <li>-Provide students and parents with a comprehensive safety briefing before the camp.</li>
                    <li>-Explain the rules, emergency procedures, and the importance of following instructions.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Health and <br/>Medical<br/> Precautions</h2>
                <ul>
                    <li>-Collect and review health information and emergency contacts for all participants.</li>
                    <li>-Ensure easy access to first aid supplies and have trained first aid personnel on site.</li>
                    <li>-Prepare for specific medical needs, such as allergies or chronic conditions.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Activity-Specific<br/> Safety Measures</h2>
                <ul>
                    <li>-Ensure activities are age-appropriate and match the skill levels of participants.</li>
                    <li>-Establish clear boundaries and guidelines for each activity.</li>
                    <li>-Use spotters and safety lines where necessary, particularly in high-risk activities like climbing</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Environmental <br />Safety</h2>
                <ul>
                    <li>-Monitor weather conditions and adjust activities accordingly</li>
                    <li>-Provide adequate hydration and sun protection</li>
                    <li>-Ensure safe and hygienic camping facilities.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Insurance and<br/> Liability</h2>
                <ul>
                    <li>-Secure comprehensive insurance coverage for all participants and staff</li>
                    <li>-Obtain necessary permissions and waivers from parents or guardians.</li>
                    <li>-Clearly communicate the extent of insurance coverage and procedures for claims.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Continuous<br/> Monitoring and <br/>Communication</h2>
                <ul>
                    <li>-Implement a buddy system to ensure students are always accounted for.</li>
                    <li>-Use communication devices for trainers and staff to stay connected.</li>
                    <li>-Conduct regular headcounts and check-ins throughout the day.</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h2 className={styles.s}>Post-Activity<br/> Review</h2>
                <ul>
                    <li>-Conduct debriefing sessions to review safety performance and gather feedback.</li>
                    <li>-Make necessary adjustments to improve safety protocols for future camps.</li>
                </ul>
            </div>
        </div>
    );
};

export default SafetyMeasures;
