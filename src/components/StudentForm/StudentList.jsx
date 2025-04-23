// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
import { databaseStudent } from './FirebaseConfig';
import { ref as dbRef, onValue } from 'firebase/database';
import './StudentList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const studentsRef = dbRef(databaseStudent, 'students');
        onValue(studentsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const studentsArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setStudents(studentsArray);
            } else {
                setStudents([]);
            }
        }, (error) => {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again.');
        });
    }, []);

    return (
        <div className="Displaycontainer">
            <h2>Student List</h2>
            {error && <p className="error-message">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Requirement</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.fullName}</td>
                                <td>{student.address}</td>
                                <td>{student.class}</td>
                                <td>{student.subject}</td>
                                <td>{student.email}</td>
                                <td>{student.contactNumber}</td>
                                <td>{student.requirement}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No students found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
