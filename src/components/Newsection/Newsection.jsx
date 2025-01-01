// src/NewsSection.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import styles from './Newsection.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo4 from '../../assets/Atik.JPG'
import logo5 from '../../assets/arbaz.jpg'
import logo6 from '../../assets/Farhan.JPG'
const NewsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className={styles["news-container"]}>
      <div className={styles["slider-container"]}>
        {/*<Slider {...settings}>*/}
        {/*  <div className={styles.slide}>*/}
        {/*      <img src={logo4} alt="Slide 1" />*/}
        {/*  </div>*/}
        {/*  <div className={styles.slide}>*/}
        {/*      <img src={logo5} alt="Slide 2" />*/}
        {/*  </div>*/}
        {/*  <div className={styles.slide}>*/}
        {/*      <img src={logo6} alt="Slide 3" />*/}
        {/*  </div>*/}
        {/*</Slider>*/}
      </div>
      <div className={styles["text-section"]}>
        <p>What's Happening</p>
        <h1><span className={styles.news}>News</span><br/><span className={styles.articles}>Articles</span></h1>
      </div>
    </div>
  );
}

export default NewsSection;
