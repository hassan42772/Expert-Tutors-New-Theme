import React, { useState } from 'react';
import { databaseStudent } from './FirebaseConfig'; // Updated import
import { ref as dbRef, push, set } from 'firebase/database';
import './StudentForm.css';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        class: '',
        subject: '',
        email: '',
        contactNumber: '',
        requirement: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, address, class: studentClass, subject, email, contactNumber, requirement } = formData;
        if (fullName && address && studentClass && subject && email && contactNumber) {
            try {
                const newStudentRef = push(dbRef(databaseStudent, 'students'));
                await set(newStudentRef, {
                    fullName,
                    address,
                    class: studentClass,
                    subject,
                    email,
                    contactNumber,
                    requirement
                });

                setSuccess("Form submitted successfully!");
                setTimeout(() => { 
                    setSuccess('');
                }, 3000);
                setFormData({
                    fullName: '',
                    address: '',
                    class: '',
                    subject: '',
                    email: '',
                    contactNumber: '',
                    requirement: ''
                });
            } catch (error) {
                console.error('Error saving data:', error);
                setError("Error submitting form. Please try again.");
            }
        } else {
            setError("Please fill all the required fields");
        }
    };

    const Copynumber = () => {
        navigator.clipboard.writeText("03136064985");
        alert("Number Copied please paste it in your dialer to call us"); 
    }

    return (
        <div className="container">
            <div className="text-section">
                <h1>Find Tutor Nearby You With <span>Expert Tutor</span></h1>
                <hr />
                <p className="Team">A Team of Highly Experienced Tutors</p>
                <p className="Success">We Guarantee Your Success!</p>
                <button className="CallNow" onClick={Copynumber}>Call Now</button>
            </div>
            <div className="form-section">
                <h2>Student Apply Form</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name" 
                        required 
                        value={formData.fullName}
                        onChange={handleChange} 
                    />
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Area/Address" 
                        required 
                        value={formData.address}
                        onChange={handleChange} 
                    />

                    {/* Dropdown for Class */}
                    <select 
                        name="class" 
                        value={formData.class}
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Class</option>
                        {[...Array(9)].map((_, index) => (
                            <option key={index} value={index + 8}>{index + 8}</option>
                        ))}
                    </select>

                    {/* Dropdown for Subject */}
                    <select 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Select Subject</option>
                        <option value="Math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Urdu">Urdu</option>
                        <option value="English">English</option>
                        <option value="Computer">Computer</option>
                        <option value="Biology">Biology</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Islamiyat">Islamiyat</option>
                        <option value="PakStudies">Pak Study</option>
                    </select>

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                        value={formData.email}
                        onChange={handleChange} 
                    />
                    <input 
                        type="tel" 
                        name="contactNumber" 
                        placeholder="Contact Number (e.g. 03XXXXXXXXX)" 
                        pattern="03[0-9]{9}"
                        title="Contact number must start with 03 and be 11 digits long"
                        required 
                        value={formData.contactNumber}
                        onChange={handleChange} 
                    />
                    <textarea 
                        name="requirement" 
                        placeholder="Your Requirement (if any)" 
                        rows="4" 
                        value={formData.requirement}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Submit</button>
                    {success && <p className="success-message">{success}</p>}
                </form>
            </div>
        </div>
    );
};

export default StudentForm;
