import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storageTutor, databaseTutor } from "./FireBaseConfig1";
import { ref as dbRef, push, set } from "firebase/database";
import "./TutorForm.css";

const TutorForm = () => {
    const [success, setSuccess] = useState('');
    const [data, setData] = useState({
        fullName: "",
        gender: "",
        address: "",
        email: "",
        cnic: "",
        contactNumber: "",
        qualification: "",
        experience: "",
        classesToTeach: "",
        subjectToTeach: "",
        currentCity: "",
        file: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleFileChange = (e) => {
        setData({ ...data, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, gender, address, email, cnic, contactNumber, qualification, experience, classesToTeach, subjectToTeach, currentCity, file } = data;
        if (fullName && gender && address && email && cnic && contactNumber && qualification && experience && classesToTeach && subjectToTeach && currentCity && file) {
            try {
                const storageRef = ref(storageTutor, `tutorFiles/${encodeURIComponent(file.name)}`);
                await uploadBytes(storageRef, file);
                const fileURL = await getDownloadURL(storageRef);

                const newTutorRef = push(dbRef(databaseTutor, 'Tutors'));
                await set(newTutorRef, {
                    fullName,
                    gender,
                    address,
                    email,
                    cnic,
                    contactNumber,
                    qualification,
                    experience,
                    classesToTeach,
                    subjectToTeach,
                    currentCity,
                    fileURL
                });

                setData({
                    fullName: "",
                    gender: "",
                    address: "",
                    email: "",
                    cnic: "",
                    contactNumber: "",
                    qualification: "",
                    experience: "",
                    classesToTeach: "",
                    subjectToTeach: "",
                    currentCity: "",
                    file: null
                });
                setSuccess("Form submitted successfully!");
                setTimeout(() => {
                    setSuccess('');
                }, 3000);
            } catch (error) {
                console.error('Error uploading file or saving data:', error);
                alert("An error occurred. Please try again.");
            }
        } else {
            alert("Please fill all the data");
        }
    };

    const copyNumber = () => {
        navigator.clipboard.writeText("03136064985");
        alert("Number Copied please paste it in your dialer to call us");
    };

    return (
        <div className="container">
            <div className="text-section">
                <h1>Are You An Experienced Tutor? <br /> Join Now <span> Expert Tutor</span></h1>
                <hr />
                <p className="Team">A Team of Highly Experienced Tutors</p>
                <p className="Success">No Registration Fee!</p>
                <button className="CallNow" onClick={copyNumber}>Call Now For More Info</button>
            </div>
            <div className="form-section">
                <h2>Tutor Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fullName" placeholder="Full Name" value={data.fullName} onChange={handleInputChange} required />
                    <input type="text" name="gender" placeholder="Gender" value={data.gender} onChange={handleInputChange} required />
                    <input type="text" name="address" placeholder="Complete Address" value={data.address} onChange={handleInputChange} required />
                    <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleInputChange} required />
                    <input type="text" name="cnic" placeholder="CNIC No" value={data.cnic} onChange={handleInputChange} required />
                    <input type="tel" name="contactNumber"   placeholder="Contact Number (e.g. 03XXXXXXXXX)" 
                        pattern="03[0-9]{9}"
                        title="Contact number must start with 03 and be 11 digits long" value={data.contactNumber} onChange={handleInputChange} required />

                    {/* Qualification Dropdown */}
                    <select name="qualification" value={data.qualification} onChange={handleInputChange} required>
                        <option value="">Select Qualification</option>
                        <option value="BSCS">BSCS</option>
                        <option value="BSIT">BSIT</option>
                        <option value="BS Urdu">BS Urdu</option>
                        <option value="BS English">BS English</option>
                        <option value="MSc">MSc</option>
                        <option value="MPhil">MPhil</option>
                        <option value="PhD">PhD</option>
                    </select>

                    <input type="text" name="experience" placeholder="Experience" value={data.experience} onChange={handleInputChange} required />

                    {/* Classes To Teach Dropdown */}
                    <select name="classesToTeach" value={data.classesToTeach} onChange={handleInputChange} required>
                        <option value="">Select Classes to Teach</option>
                        {Array.from({ length: 9 }, (_, i) => (
                            <option key={i + 8} value={`Class ${i + 8}`}>{`Class ${i + 8}`}</option>
                        ))}
                    </select>

                    {/* Subject to Teach Dropdown */}
                    <select name="subjectToTeach" value={data.subjectToTeach} onChange={handleInputChange} required>
                        <option value="">Select Subject to Teach</option>
                        <option value="Urdu">Urdu</option>
                        <option value="English">English</option>
                        <option value="Math">Math</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer">Computer</option>
                        <option value="Islamiyat">Islamiyat</option>
                        <option value="General Science">General Science</option>
                    </select>

                    <input type="text" name="currentCity" placeholder="Current City" value={data.currentCity} onChange={handleInputChange} required />
                    <input type="file" name="file" onChange={handleFileChange} required />
                    <button type="submit">Submit</button>
                    {success && <p className="success-message">{success}</p>}
                </form>
            </div>
        </div>
    );
};

export default TutorForm;
