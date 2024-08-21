// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import Footer from '../../components/Footer/Footer';

const RegistrationForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [formData, setFormData] = useState({
        schoolName: '',
        venue: '',
        startDate: '',
        endDate: '',
        year: '',
        campEventCourse: '',
        fullName: '',
        guardianName: '',
        gender: '',
        bloodGroup: '',
        dateOfBirth: '',
        age: '',
        class: '',
        section: '',
        whatsappNo: '',
        mobileNo: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        aadharNo: '',
        disease: '',
        agree: false,
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.schoolName) newErrors.schoolName = 'School Name is required';
        if (!formData.venue) newErrors.venue = 'Venue is required';
        if (!formData.startDate) newErrors.startDate = 'Start Date is required';
        if (!formData.endDate) newErrors.endDate = 'End Date is required';
        if (!formData.year) newErrors.year = 'Year is required';
        if (!formData.campEventCourse) newErrors.campEventCourse = 'Camp/Event/Course is required';
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.guardianName) newErrors.guardianName = 'Guardian Name is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood Group is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date Of Birth is required';
        if (!formData.age) newErrors.age = 'Age is required';
        if (!formData.class) newErrors.class = 'Class is required';
        if (!formData.section) newErrors.section = 'Section is required';
        if (!formData.whatsappNo) newErrors.whatsappNo = 'Whatsapp No is required';
        else if(!/^\d{10}$/.test(formData.whatsappNo)) newErrors.whatsappNo = 'Whatsapp No must be 10 digits';
        if (!formData.mobileNo) newErrors.mobileNo = 'Mobile No is required';
        else if (!/^\d{10}$/.test(formData.mobileNo)) newErrors.mobileNo = 'Mobile No must be 10 digits';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.pincode) newErrors.pincode = 'Pincode is required';
        if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No is required';
        if (!formData.agree) newErrors.agree = 'You must agree to the terms and conditions';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            navigate('/checkform', { state: { formData, profileImage } });
        }
    };

    return (
        <>
            <div className="registration-form">
                <h1>Registration Form</h1>
                <p>All Details Should Be Correct And Filled In Block Letter</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-section school-details">
                        <h2 className="details">School Details</h2>
                        <div className="form-group">
                            <label id='SN'>School Name:</label>
                            <input id='schoolname' type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} />
                            {errors.schoolName && <span className="error">{errors.schoolName}</span>}
                        </div>
                        <div className="form-group-venue">
                            <label>Venue:</label>
                            <input className="venue" type="text" name="venue" value={formData.venue} onChange={handleChange} />
                            {errors.venue && <span className="error">{errors.venue}</span>}
                        </div>
                        <div className="form-group-date">
                            <label>Date:</label>
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
                            <span>To</span>
                            <input type="date" className="date" name="endDate" value={formData.endDate} onChange={handleChange} />
                            <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} />
                            {errors.startDate && <span className="error">{errors.startDate}</span>}
                            {errors.endDate && <span className="error">{errors.endDate}</span>}
                            {errors.year && <span className="error">{errors.year}</span>}
                        </div>
                        <div className="form-group-camp">
                            <label>Camp/Event/Course:</label>
                            <input type="text" name="campEventCourse" value={formData.campEventCourse} onChange={handleChange} />
                            {errors.campEventCourse && <span className="error">{errors.campEventCourse}</span>}
                        </div>
                    </div>

                    <div className="form-section student-details">
                        <h2 className="details">Student Details</h2>
                        <div className="profile-pic">
                            {profileImage && <img src={profileImage} alt="Profile" />}
                            <input type="file" accept="image/*" className="upload" onChange={handleImageChange} />
                        </div>
                        <div className="form-group-fullname">
                            <label>Full Name:</label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                            {errors.fullName && <span className="error">{errors.fullName}</span>}
                        </div>
                        <div className="form-group-guardian">
                            <label>Guardian Name:</label>
                            <input type="text" name="guardianName" value={formData.guardianName} onChange={handleChange} />
                            {errors.guardianName && <span className="error">{errors.guardianName}</span>}
                        </div>
                        <div className="gender-group-gender">
                            <label>Gender:</label>
                            <input id='male' type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
                            <input id='female' type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
                            <input id='other' type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other
                            {errors.gender && <span className="error">{errors.gender}</span>}
                        </div>
                        <div className="form-group-blood">
                            <label>Blood Group:</label>
                            <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
                            {errors.bloodGroup && <span className="error">{errors.bloodGroup}</span>}
                        </div>
                        <div className="form-group-dob">
                            <label>Date Of Birth:</label>
                            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                            {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
                        </div>
                        <div className="form-group-age">
                            <label>Age:</label>
                            <input type="number" name="age" value={formData.age} onChange={handleChange} />
                            {errors.age && <span className="error">{errors.age}</span>}
                        </div>
                        <div className="form-group-class">
                            <label>Class:</label>
                            <input type="text" name="class" value={formData.class} onChange={handleChange} />
                            {errors.class && <span className="error">{errors.class}</span>}
                        </div>
                        <div className="form-group-section">
                            <label>Section:</label>
                            <input type="text" name="section" value={formData.section} onChange={handleChange} />
                            {errors.section && <span className="error">{errors.section}</span>}
                        </div>
                        <div className="form-group-whatapp">
                            <label>Whatsapp No:</label>
                            <input type="text" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} />
                            {errors.whatsappNo && <span className="error">{errors.whatsappNo}</span>}
                        </div>
                        <div className="form-group-mobile">
                            <label>Mobile No:</label>
                            <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
                            {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}
                        </div>
                        <div className="form-group-address">
                            <label>Address:</label>
                            <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                            {errors.address && <span className="error">{errors.address}</span>}
                        </div>
                        <div className="form-group-city">
                            <label>City:</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} />
                            {errors.city && <span className="error">{errors.city}</span>}
                        </div>
                        <div className="form-group-state">
                            <label>State:</label>
                            <input type="text" name="state" value={formData.state} onChange={handleChange} />
                            {errors.state && <span className="error">{errors.state}</span>}
                        </div>
                        <div className="form-group-pincode">
                            <label>Pincode:</label>
                            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                            {errors.pincode && <span className="error">{errors.pincode}</span>}
                        </div>
                        <div className="form-group-aadhar">
                            <label>Aadhar No:</label>
                            <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
                            {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
                        </div>
                    </div>
                    <div className="disease">
                        <h3>Does the student have any allergies, chronic illness, or medical condition? If yes, please describe.</h3>
                        <input type="text" name="disease" value={formData.disease} onChange={handleChange} />
                    </div>

                    <div className="form-group agree-group">
                        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                        <label>
                            I Agree To Adhere To The Discipline Of The Movement And The Program In Particular, And Abide By The Rules And Regulations Of The Institution During This Entire Event. In The Case Of Any Accident, Illness, Or Injury, Whether Minor Or A Natural, I Will Not Hold The Authorities Directly Responsible At All. I Further Declare That I Have Not Been In Contact With Any Infectious Disease For The Past Month And That I Am In Good Health And Physically Fit To Participate In The Adventure Program.
                        </label>
                        {errors.agree && <span className="error">{errors.agree}</span>}
                    </div>
                    <div className="btns">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default RegistrationForm;
