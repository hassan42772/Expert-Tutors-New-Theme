// src/components/DisplayTutors.jsx
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { databaseTutor } from './FireBaseConfig1';
import './TutorList.css';
function DisplayTutors() {
  const [tutorData, setTutorData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const dataRef = ref(databaseTutor, 'Tutors');
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        const dataArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        setTutorData(dataArray);
      });
    };

    fetchData();
  }, []);

  return (
    <div className='Discontainer'>
      <h1>Tutor Data</h1>
      {tutorData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Email</th>
              <th>CNIC</th>
              <th>Contact Number</th>
              <th>Qualification</th>
              <th>Experience</th>
              <th>Classes to Teach</th>
              <th>Subject to Teach</th>
              <th>Current City</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {tutorData.map(tutor => (
              <tr key={tutor.id}>
                <td>{tutor.fullName}</td>
                <td>{tutor.gender}</td>
                <td>{tutor.address}</td>
                <td>{tutor.email}</td>
                <td>{tutor.cnic}</td>
                <td>{tutor.contactNumber}</td>
                <td>{tutor.qualification}</td>
                <td>{tutor.experience}</td>
                <td>{tutor.classesToTeach}</td>
                <td>{tutor.subjectToTeach}</td>
                <td>{tutor.currentCity}</td>
                <td>
                  {tutor.fileURL ? (
                    <a href={tutor.fileURL} target="_blank" rel="noopener noreferrer">View File</a>
                  ) : (
                    <p>No file uploaded</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default DisplayTutors;
