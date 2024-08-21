import React from 'react';
import './SignupPage.css';
import character from '../../assets/character1.svg'; // Ensure the path to your image is correct
import logo from '../../assets/buddylogo1.svg'; // Ensure the path to your image is correct
import Footer from "../../components/Footer/Footer.jsx";
import {NavLink} from "react-router-dom";

const SignupPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="nav">
                    <img src={logo} alt="The Adventure Buddy" className="logo"/>
                    <div className="nav-links">
                        <NavLink to="/login">Login</NavLink>
                        {/*<a href="/signup">Sign Up</a>*/}
                    </div>
                </div>
                <div className="content">
                    <img src={character} alt="Character" className="character"/>
                    <div className="form-wrapper">
                        <h1 className="title">Create Your Account</h1>
                        <form className="signup-form">
                            <input type="text" placeholder="School Name*" className="input"/>
                            <input type="text" placeholder="Address*" className="input"/>
                            <div className="mobile-container">
                                <select className="input-mobile-code">
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+61">+61</option>
                                    {/* Add more country codes as needed */}
                                </select>
                                <input type="text" placeholder="Mobile No.*" className="input-mobile-number"/>
                            </div>
                            <input type="email" placeholder="Email*" className="input"/>
                            <input type="date" placeholder="Camp Date*" className="input"/>
                            <input type="date" placeholder="Camp Date" className="input"/>
                            {/*<select className="input">*/}
                            {/*    <option>Camp Category*</option>*/}
                            {/*    /!* Add more options as needed *!/*/}
                            {/*</select>*/}
                            <input type="password" placeholder="Password" className="input"/>
                            <input type="password" placeholder="Confirm Password" className="input"/>
                            <p className="instructions">By joining, you agree to the Terms and Privacy Policy.</p>
                            <button className="button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SignupPage;
