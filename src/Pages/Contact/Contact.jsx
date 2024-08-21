import React, { useState } from 'react';
import styles from './Contact.module.css';
import Contactimg from '../../assets/Contact image.png';
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            mobile,
            email,
            message,
        };

        console.log(formData);

        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
    };

    return (
        <>
            <div className={styles["contact-container"]}>
                <div id={styles["contact-form"]}>
                    <h2>Get in touch</h2>
                    <p>How can we support you? Just let us know!</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className={styles["contact-image"]}>
                    <img src={Contactimg} alt="Contact" />
                    {/*<div className="contact-info">*/}
                    {/*    <p>RISE Incubation Center, Nagri Nigam Premises, Elite Chauraha, Jhansi, Uttar Pradesh - 284001</p>*/}
                    {/*    <p>+919518619813, 8827531565</p>*/}
                    {/*    <p>connect@theadventurebuddy.in</p>*/}
                    {/*</div>*/}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
