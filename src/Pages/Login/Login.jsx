import React, { useState, useContext } from 'react';
import './Login.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import character1 from '../../assets/character1.svg';
import character2 from '../../assets/character2.svg';
import character3 from '../../assets/character3.svg';
import character4 from '../../assets/character4.svg';
import logo from '../../assets/buddylogo1.svg';
import Footer from "../../components/Footer/Footer.jsx";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../components/ContextAuth/AuthContext';

const LoginPage = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', loginData); // Log the login data to the console

        // You would typically send loginData to your backend here and get a user object in response
        const userData = { username: loginData.username }; // Mock user data
        login(userData);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="nav">
                    <img src={logo} alt="The Adventure Buddy" className="logos" />
                    <div className="nav-links">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                </div>
                <div className="content">
                    <div className="carousel-wrapper">
                        <Slider {...settings}>
                            <div>
                                <img src={character1} alt="Character 1" className="characters" id='character1'/>
                            </div>
                            <div>
                                <img src={character2} alt="Character 2" className="characters" id="character2"/>
                            </div>
                            <div>
                                <img src={character3} alt="Character 3" className="characters" id="character3"/>
                            </div>
                            <div>
                                <img src={character4} alt="Character 4" className="characters" id='character4'/>
                            </div>
                        </Slider>
                    </div>
                    <div className="form-wrapper">
                        <h1 className="title">Login to Your Account</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Login"
                                name="username"
                                value={loginData.username}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                className="input"
                            />
                            <p className="instructions">For signup, click on the Signup</p>
                            <button type="submit" className="button">Next</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
