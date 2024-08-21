// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from'./Adventurestart.module.css';
import linktreeImg from '../../assets/Linktree.png'; // Adjust the path as necessary

const AdventureStart = () => {
    return (
        <div className={styles["adventure-container"]}>
            <div className={styles["Text-section"]}>
                <p>let’s begin</p>
                <h1>The Adventure...</h1>
            </div>
            <div className={styles["image-section"]}>
                <a href="https://linktr.ee/adventurebuddy01" target="_blank" rel="noopener noreferrer">
                    <img src={linktreeImg} alt="Linktree" className={styles["linktree-image"]} />
                </a>
            </div>
        </div>
    );
};

export default AdventureStart;
