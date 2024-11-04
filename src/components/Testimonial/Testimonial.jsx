// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonial.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../../assets/Tyre Wall.png'
import pic2 from '../../assets/Wall Climbing.png'
function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles["testimonial-container"]}>
      <div className={styles["text-contents"]}>
        <p>Where</p>
        <p>People</p>
        <p>Say</p>
        <p>About</p>
        <p>Us...</p>
      </div>
      <div className={styles["image-slider"]}>
        <Slider {...settings}>
          <div>
             {/* <img src={pic1} alt="Slide 1" /> */}
          </div>
          <div>
             {/* <img src={pic2} alt="Slide 2" /> */}
          </div>
          <div>
             {/*<img src={logo6} alt="Slide 3" />*/}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
