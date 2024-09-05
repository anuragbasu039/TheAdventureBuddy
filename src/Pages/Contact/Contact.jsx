import React, { useState } from 'react';
import styles from './Contact.module.css';
import Contactimg from '../../assets/Contact image.png';
import Footer from '../../components/Footer/Footer';
import { db } from '../../firebaseConfig'; // Import the Firebase Firestore instance
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const ContactPage = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name,
            mobile,
            email,
            message,
            timestamp: new Date(), // Add a timestamp
        };

        try {
            // Add a new document with a generated ID
            const docRef = await addDoc(collection(db, 'contacts'), formData);
            console.log('Document written with ID: ', docRef.id);

            // Clear the form
            setName('');
            setMobile('');
            setEmail('');
            setMessage('');
        } catch (e) {
            console.error('Error adding document: ', e);
        }
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
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
