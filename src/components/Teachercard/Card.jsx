// src/components/Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';


const Card = ({ image, name, subject, qualification, isVerified }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/tutor/${encodeURIComponent(name)}`, {
          state: { image, name, subject, qualification, isVerified }
        });
      };
  return (
    <div className="card-tutor" onClick={handleClick}>
      <img src={image} alt={name} className="card-tutor-image" />
      <h2 className="card-tutor-name">{name}</h2>
      <p className="card-tutor-subject">Teaching: {subject}</p>
      <p className="card-qualification">Qualification: {qualification}</p>
      {isVerified && <span className="card-tutor-verified">✔ Verified</span>}
    </div>
  );
};

export default Card;
