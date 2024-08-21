// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './Shimla.module.css';
import Footer from '../Footer/Footer'; // Assuming you have an App.css file for styling

const App = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles["background-image"]}>
                    <h1 className={styles.location}>Shimla</h1>
                </div>
                <div className={styles["itinerary-container"]}>
                    <h2 className={styles.itinerary}>Itinerary</h2>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default App;
