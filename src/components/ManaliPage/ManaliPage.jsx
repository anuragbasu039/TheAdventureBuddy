// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './ManaliPage.module.css';
import Footer from '../Footer/Footer'; 

const App = () => {
    return (
        <>
            <div className={styles.manali}>
                <div className={styles["background-image-manali"]}>
                    <h1 className={styles.location}>Manali</h1>
                </div>
                <div className={styles["itinerary-container-manali"]}>
                    <h2 className={styles["itinerary-manali"]}>Itinerary</h2>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default App;
