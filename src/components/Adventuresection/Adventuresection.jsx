// src/AdventureSection.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from'./Adventuresection.module.css';

const AdventureSection = () => {
  return (
    <div className={styles["adventure-containers"]}>
      <div className={styles["text-sections"]}>
        <p>Experience</p>
        <h1>The Thrill<br/>Adventure!</h1>
      </div>
      <div className={styles["video-container"]}>
        <iframe
          width="420"
          height="345"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AdventureSection;
