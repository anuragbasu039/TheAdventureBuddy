import React from 'react';
import Slider from 'react-slick';
import styles from './Testimonial.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ceo from '../../assets/Farhan.JPG';
import ceo2 from '../../assets/Atik.JPG';
import ceo3 from '../../assets/arbaz.jpg';

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Set auto-play speed (in milliseconds)
  };

  const slides = [
    {
      name: "Farhan",
      role: "CEO & Founder",
      text: `"This company has been a game-changer for our business. The team's commitment to excellence and their customer-focused approach have been pivotal to our success. I couldn't be prouder of the work we've done together!"`,
      image: ceo,
      bgColor: 'red', // Background color for this slide
    },
    {
      name: "Atik",
      role: "",
      text: `"Our experience working with this team has been nothing short of amazing. Their creativity, attention to detail, and dedication to helping us grow our brand has been invaluable."`,
      image: ceo2,
      bgColor: '#fdf5e6', // Background color for this slide
    },
    {
      name: "Arbaz",
      role: "Co-Founder",
      text: `"Working with this company has been an inspiring journey. Their professionalism and innovative solutions have made a significant impact on our projects."`,
      image: ceo3,
      bgColor: '#e6f7ff', // Background color for this slide
    },
  ];

  return (
      <div className={styles["testimonial-container"]}>
        {/* Static text content */}
        <div className={styles["text-contents"]}>
          <p>Where</p>
          <p>People</p>
          <p>Say</p>
          <p>About</p>
          <p>Us...</p>
        </div>

        {/* Image slider with unique background colors */}
        <div className={styles["image-slider"]}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={styles["testimonial-card"]}
                    style={{ backgroundColor: slide.bgColor }} // Apply unique background color
                >
                  <img
                      src={slide.image}
                      alt={slide.name}
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        display: 'block',
                        margin: '0 auto',
                        marginTop: '80px',
                        borderRadius: '50%',
                      }}
                  />
                  <div className={styles["testimonial-description"]}>
                    <h3 className={styles["testimonial-name"]}>{slide.name}</h3>
                    <p className={styles["testimonial-role"]}>{slide.role}</p>
                    <p className={styles["testimonial-text"]}>{slide.text}</p>
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
  );
}

export default App;
