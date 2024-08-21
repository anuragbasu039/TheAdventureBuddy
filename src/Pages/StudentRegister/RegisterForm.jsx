import React from 'react';
import './RegisterForm.css';
import character from '../../assets/character1.svg'; // Ensure the path to your image is correct
import logo from '../../assets/buddylogo1.svg'; // Ensure the path to your image is correct
import Footer from "../../components/Footer/Footer.jsx";
const LoginPage = () => {

    return (
        <>
            <div className="page-wrapper">
                <div className="nav">
                    <img src={logo} alt="The Adventure Buddy" className="logos" />
                </div>
                <div className="content">
                    <img src={character} alt="Character" className="characters" />
                    <div className="form-wrapper">
                        <h1 className="title">Register Now</h1>
                        <input type="text" placeholder="Unique Id" className="input"/>
                        <p className="instructions">For registration give unique id and click on the submit</p>
                        <a href="/form" rel="noopener noreferrer">
                            <button className="button">Submit</button>
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
