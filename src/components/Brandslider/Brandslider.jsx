// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Brandslider.module.css';
import logo1 from '../../assets/circlelogo.png';
import logo2 from '../../assets/Cassin.png';
import logo3 from '../../assets/CAMP-logo.png';
import logo4 from '../../assets/CAMP-SAFETY.png';
import logo5 from '../../assets/Petzl.png';
import logo6 from '../../assets/Ministry of Tourism.png';
import logo7 from '../../assets/icf-logo.png'
import logo8 from '../../assets/ATOAI.png';
import logo9 from '../../assets/AdventureTrvel.png';

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brands = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
    { logo: logo8 },
    { logo: logo9 },
  ];

  return (
    <div className={styles["brand-slider"]}>
      <div className={styles.title}>
        <h2>Associate Partnered</h2>
      </div>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className={styles["brand-slide"]}>
            <img src={brand.logo} alt={`Brand ${index}`} className={styles["brand-logo"]} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;

