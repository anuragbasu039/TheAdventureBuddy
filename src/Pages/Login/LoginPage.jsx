import React from 'react';
import './LoginPage.css';
import character from '../../assets/character1.svg'; // Ensure the path to your image is correct
import logo from '../../assets/buddylogo1.svg'; // Ensure the path to your image is correct
import Footer from "../../components/Footer/Footer.jsx";
const LoginPage = () => {
    return (
        <>
        <div className="page-wrapper">
            <div className="navs">
                <img src={logo} alt="The Adventure Buddy" className="logos" />
                <div className="nav-links">
                    <a href="/login" id='login'>Login</a>
                    <a href="/signup" id='signup'>Sign Up</a>
                </div>
            </div>
            <div className="content">
                <img src={character} alt="Character" className="characters" />
                <div className="form-wrapper">
                    <h1 className="title">Create Your Account</h1>
                    <input type="text" placeholder="Unique Id" className="input"/>
                    <p className="instructions">For signup, click on the next</p>
                    <a href="/signups" rel="noopener noreferrer">
                        <button className="button">Next</button>
                    </a>

                        {/*<p className="instructions">For signup, click on the next</p>*/}
                </div>
            </div>
        </div>
            <Footer/>
        </>
    );
};

export default LoginPage;
