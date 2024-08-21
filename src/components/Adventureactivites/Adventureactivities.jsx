// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Adventureactivities.module.css';
import camp from '../../assets/AdventureActivitiescamp.png';
import image1 from '../../assets/Zip climbing.png';
import image2 from '../../assets/shooting.png';
import image3 from '../../assets/archery.png';
import image4 from '../../assets/tyre tunnel.png';
import image5 from '../../assets/monkey crawl.png';
import image6 from '../../assets/Wall Climbing.png';
import image7 from '../../assets/zorbing fight.png';
import image8 from '../../assets/zorbing ball.png';
import image9 from '../../assets/Side Crawl.png';
import image10 from '../../assets/burma bridge.png';
import image11 from '../../assets/balance bridge.png';
import image12 from '../../assets/plank walk.png';
import image13 from '../../assets/Wood Log Bridge.png';
import image14 from '../../assets/Tyre Wall.png';
import image15 from '../../assets/commando net.png';
import image16 from '../../assets/Rectangle 98.png';
import image17 from '../../assets/tyre bridge.png';
import image18 from '../../assets/Plum Walk.png';
import image19 from '../../assets/suspension Bridge.png';
import image20 from '../../assets/Horse Riding.png';
import image21 from '../../assets/tyre chimney.png';
import image22 from '../../assets/Rappeling.png';
import image23 from '../../assets/zumaring.png';
import image24 from '../../assets/Group activity.png';

import Footer from "../Footer/Footer";
const activities = [
    { name: "Zip Lane", image: image1 },
    { name: "Shooting", image: image2 },
    { name: "Archery", image: image3 },
    { name: "Tyre Tunnel", image: image4 },
    { name: "Monkey Crawl", image: image5 },
    { name: "Wall Climbing", image: image6 },
    { name: "Zorbing Fight", image: image7 },
    { name: "zorbing Ball", image: image8 },
    { name: "Side Crawl", image: image9 },
    { name: "Burma Bridge", image: image10 },
    { name: "Balance Bridge", image: image11 },
    { name: "Plank walk", image: image12 },
    { name: "Wood Log Bridge", image: image13 },
    { name: "Tyre Wall", image: image14 },
    { name: "Commando Net", image: image15 },
    { name: "Wood Log Bridge", image: image16 },
    { name: "Plum Walk", image: image17 },
    { name: "Suspension Bridge", image: image18 },
    { name: "Horse Riding", image: image19 },
    { name: "Tyre Chimney", image: image20 },
    { name: "Rappeling", image: image21 },
    { name: "Zumaring", image: image22 },
    { name: "Group Activity", image: image23 },
    { name: "Climbing Wall", image: image24 },
];

function Activites() {
    return (
        <>
        <div className={styles.Activities}>
            <header >
                <img src={camp} alt="Adventure Activities Logo" className={styles.lOgo} />
                <h1>Adventure Activities</h1>
            </header>
            <div className={styles["activities-grid"]}>
                {activities.map(activity => (
                    <div className={styles["activitys-cards"]} key={activity.name}>
                        <img src={activity.image} alt={activity.name} className={styles["activity-image"]} />
                        <p>{activity.name}</p>
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
        </>
    );
}

export default Activites;
