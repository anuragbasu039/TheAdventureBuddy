// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Services.module.css';
import schoolcamp from '../../assets/schoolcamp.png'
import outdoorcamp from '../../assets/outdoorcamp.png'
import adventureactivitiescamp from '../../assets/AdventureActivitiescamp.png'

const Services = () => {
    return (
        <div className={styles.contain}>
            <section className={styles.services}>
                <h2>Our Services</h2>
                <div className={styles.service}>
                    <img src={schoolcamp} alt="School Camps" />
                    <div>
                        <h3>School Camps:</h3>
                        <p>Experience excitement with The Adventure Buddy’s Day Camps, right at your school! Our portable setup offers 10-25 thrilling activities tailored to your chosen package. Designed to be affordable, we ensure all students can join without compromising quality. Enjoy team-building challenges and adrenaline-pumping pursuits, making for an unforgettable day of fun and learning. Every participant receives a certificate, celebrating their courage and adventurous spirit. Join us for a day of laughter, learning, and lasting memories!</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <img src={outdoorcamp} alt="Outdoor Camps" />
                    <div>
                        <h3>Outdoor Camps:</h3>
                        <p>Escape the ordinary and embrace the extraordinary at our outdoor camp, a haven for adventure seekers of all ages. Nestled in nature’s embrace, our camp offers everything from adrenaline-fueled thrills to serene moments of tranquility. With expert guides and breathtaking landscapes, we promise an unforgettable experience filled with camaraderie and adventure. Join us for activities that will rejuvenate your spirit, inspire your soul, and leave you longing for more. Welcome to your outdoor paradise, where every moment is a new adventure.</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <img src={adventureactivitiescamp} alt="Adventure Activities" />
                    <div>
                        <h3>Adventure Activities:</h3>
                        <p>Experience the thrill of adventure without breaking the bank with our affordable adventure activities. From heart-pounding excursions to serene explorations, we offer an array of budget-friendly options that cater to every adventurer’s taste. Whether you’re scaling cliffs, traversing trails, or paddling tranquil waters, our adventures are designed to ignite your spirit of exploration without draining your wallet. Join us for an unforgettable journey filled with excitement, discovery, and unbeatable value. Adventure awaits—all at a price that won’t hold you back.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
