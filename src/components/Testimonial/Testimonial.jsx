// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonial.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo4 from '../../assets/Farhan.JPG'
import logo5 from '../../assets/Atik.JPG'
import logo6 from '../../assets/arbaz.jpg'
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
             {/*<img src={logo4} alt="Slide 1" />*/}
          </div>
          <div>
             {/*<img src={logo5} alt="Slide 2" />*/}
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
