import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TutorDetail.css';

const TutorDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No tutor data found.</p>;
  }

  const { image, name, subject, qualification, isVerified } = state;

  return (
    <div className="tutor-details">
      
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="tutor-data"><strong>Subject:</strong> {subject}</p>
      <p className="tutor-data"><strong>Qualification:</strong> {qualification}</p>
      {isVerified && <p className="verified-text">✔ Verified Tutor</p>}
      <p className="tutor-data"><strong>If you wish to study with this tutor, please contact us.</strong></p>

      
      <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Tutor</button>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
};

export default TutorDetails;
