import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './AdminBtn.css'; // Import the CSS file
import admin from '../../Assets/admin.png'; // Ensure this path is correct


const AdminBtn = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="data-selector-container">
    <h1>Dashboard</h1>
    <img className="admin" src={admin} alt="admin"  />
    <div className='btn-group'>
      <button 
        className="data-button" 
        onClick={() => handleButtonClick('/data')}
      >
        Student Data
      </button>
      <button 
        className="data-button" 
        onClick={() => handleButtonClick('/tutorData')}
      >
        Tutor Data
      </button>
    </div>
    </div>
  );
};

export default AdminBtn;
