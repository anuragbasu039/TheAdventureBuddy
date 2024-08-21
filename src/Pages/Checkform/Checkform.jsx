// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkform.css';
import Poster from '../../assets/theadventurebuddy.png';

const CheckoutForm = () => {
    const location = useLocation();
    const { formData, profileImage } = location.state;
    return (
        <div className="checkout-form">
            <img src={Poster} alt="Company Poster" className="company-poster" id="poster"/>
            <div className="form-section school-details">
                <h2 className="details">School Details</h2>
                <p><span>School Name:</span> <span>{formData.schoolName}</span></p>
                <p><span>Venue:</span> <span>{formData.venue}</span></p>
                <p><span>Date:</span> <span>{formData.startDate} To {formData.endDate}</span></p>
                <p><span>Year:</span> <span>{formData.year}</span></p>
                <p><span>Camp/Event/Course:</span> <span>{formData.campEventCourse}</span></p>
            </div>
            <div className="form-section student-details">
                <h2 className="details">Student Details</h2>
                <img src={profileImage} alt="Profile" className="pic"/>
                <p><span className="tail">Full Name:</span> <span className="fill">{formData.fullName}</span></p>
                <p><span className="tail">Guardian Name:</span> <span className="fill">{formData.guardianName}</span></p>
                <p><span className="tail">Gender:</span> <span className="fill">{formData.gender}</span></p>
                <p><span className="tail">Blood Group:</span> <span className="fill">{formData.bloodGroup}</span></p>
                <p><span className="tail">Date Of Birth:</span> <span className="fill">{formData.dateOfBirth}</span></p>
                <p><span className="tail">Age:</span> <span className="fill">{formData.age}</span></p>
                <p><span className="tail">Class:</span> <span className="fill">{formData.class}</span></p>
                <p><span className="tail">Section:</span> <span className="fill">{formData.section}</span></p>
                <p><span className="tail">Whatsapp No:</span> <span className="fill">{formData.whatsappNo}</span></p>
                <p><span className="tail">Mobile No:</span> <span className="fill">{formData.mobileNo}</span></p>
                <p><span className="tail">Address:</span> <span className="fill">{formData.address}</span></p>
                <p><span className="tail">City:</span> <span className="fill">{formData.city}</span></p>
                <p><span className="tail">State:</span> <span className="fill">{formData.state}</span></p>
                <p><span className="tail">Pincode:</span> <span className="fill">{formData.pincode}</span></p>
                <p><span className="tail">Aadhar No:</span> <span className="fill">{formData.aadharNo}</span></p>
                <p><span className="tail">Disease:</span> <span className="fill">{formData.disease}</span></p>
            </div>
            <div className="agreement">
                <p>
                I Agree To Adhere To The Discipline Of The Movement And The Program In Particular, And Abide By The Rules And Regulations Of The Institution During This Entire Event. In The Case Of Any Accident, Illness, Or Injury, Whether Minor Or A Natural, I Will Not Hold The Authorities Directly Responsible At All. I Further Declare That I Have Not Been In Contact With Any Infectious Disease For The Past Month And That I Am In Good Health And Physically Fit To Participate In The Adventure Program.
                </p>
            </div>
            <div className="signature-section">
                <div>
                    <p>Applicant Signature</p>
                </div>
                <div>
                    <p>Parent Signature</p>
                </div>
            </div>
            <button className="print-button" onClick={() => window.print()}>Print</button>
        </div>
    );
};

export default CheckoutForm;
