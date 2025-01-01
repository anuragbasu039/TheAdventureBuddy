// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Risingwanderer.module.css';
import image1 from '../../assets/Rope Climbing.jpg'
import image2 from '../../assets/archery.png'
import image3 from '../../assets/balance bridge.png'
import image4 from '../../assets/burma bridge.png'
import image5 from '../../assets/commando net.png'
import image6 from '../../assets/monkey crawl.png'
import image7 from '../../assets/plank walk.png'
import image8 from '../../assets/Rappeling.png'
import image9 from '../../assets/Tyre Wall.png'
import Footer from '../../components/Footer/Footer.jsx';
const TripGrid = () => {
    const trips = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 },
        { id: 4, image: image4 },
        { id: 5, image: image5 },
        { id: 6, image: image6 },
        { id: 7, image: image7 },
        { id: 8, image: image8 },
        { id: 9, image: image9 }
    ];

    return (
        <>
        <div className={styles.Rising}>
            <h1>Rising Wanderer</h1>
            <div className={styles.TripGrid}>
                {trips.map((trip) => (
                    <div key={trip.id} className={styles.Trips}>
                        <img src={trip.image} alt={`Trip ${trip.id}`} className={styles["trip-image"]} />
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
        </>
    );
};

export default TripGrid;
