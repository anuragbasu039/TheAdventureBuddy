import React, { useState } from 'react';
import './SignupPage.css';
import character from '../../assets/character1.svg'; 
import logo from '../../assets/buddylogo1.svg'; 
import Footer from "../../components/Footer/Footer.jsx";
import { NavLink } from "react-router-dom";
import { db } from '../../firebaseConfig'; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const SignupPage = () => {
    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileCode, setMobileCode] = useState('+91');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [campDate1, setCampDate1] = useState('');
    const [campDate2, setCampDate2] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "users"), {
                schoolName,
                address,
                mobileCode,
                mobileNumber,
                email,
                campDate1,
                campDate2,
                password,  // In a real application, never store plain passwords
                timestamp: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Signup successful!");

            // Clear the form
            setSchoolName('');
            setAddress('');
            setMobileCode('+91');
            setMobileNumber('');
            setEmail('');
            setCampDate1('');
            setCampDate2('');
            setPassword('');
            setConfirmPassword('');
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Error during signup. Please try again.");
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="nav">
                    <img src={logo} alt="The Adventure Buddy" className="logo"/>
                    <div className="nav-links">
                        <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
                <div className="content">
                    <img src={character} alt="Character" className="character"/>
                    <div className="form-wrapper">
                        <h1 className="title">Create Your Account</h1>
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="School Name*" className="input" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
                            <input type="text" placeholder="Address*" className="input" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <div className="mobile-container">
                                <select className="input-mobile-code" value={mobileCode} onChange={(e) => setMobileCode(e.target.value)}>
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+61">+61</option>
                                    {/* Add more country codes as needed */}
                                </select>
                                <input type="text" placeholder="Mobile No.*" className="input-mobile-number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                            </div>
                            <input type="email" placeholder="Email*" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="date" placeholder="Camp Date*" className="input" value={campDate1} onChange={(e) => setCampDate1(e.target.value)} />
                            <input type="date" placeholder="Camp Date" className="input" value={campDate2} onChange={(e) => setCampDate2(e.target.value)} />
                            <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="Confirm Password" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <p className="instructions">By joining, you agree to the Terms and Privacy Policy.</p>
                            <button className="button" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default SignupPage;
