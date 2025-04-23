import React, { useState } from 'react';
import Card from './Card';
import './CardsPage.css';
import huzaifaImg from '../../Assets/man.png';
import avatar from '../../Assets/boy.png';
import women from '../../Assets/woman.png';

const tutorsData = [
  { image: huzaifaImg, name: 'Ahmad Raza', subject: 'Math', qualification: 'MSc Mathematics', isVerified: true },
  { image: avatar, name: 'Ali Khan', subject: 'Physics', qualification: 'BSc physics', isVerified: true },
  { image: women, name: 'Fatima Noor', subject: 'English', qualification: 'BA English', isVerified: true },
  { image: huzaifaImg, name: 'Mudassir Ali', subject: 'Chemistry', qualification: 'Bs Chemistry', isVerified: true },
  { image: avatar, name: 'Muhammad Ali', subject: 'Urdu', qualification: 'BA urdu', isVerified: true },
  { image: women, name: 'Noor Fatima', subject: 'Computer', qualification: 'Bs Computer Science', isVerified: true },
  { image: huzaifaImg, name: 'Babar Azam', subject: 'Islamiyat', qualification: 'BA Islamiyat', isVerified: true },
  { image: avatar, name: 'Hamza Khan', subject: 'biology', qualification: 'Bs Biology', isVerified: true },
  { image: women, name: 'Aliza Khan', subject: 'Pak Studies', qualification: 'ADP ', isVerified: true },
  { image: huzaifaImg, name: 'Raza', subject: 'Math', qualification: 'MSc Mathematics', isVerified: true },
  { image: avatar, name: 'Azeem Khan', subject: 'Physics', qualification: 'BSc physics', isVerified: true },
  { image: women, name: 'Minal Noor', subject: 'English', qualification: 'BA English', isVerified: true },
  { image: huzaifaImg, name: 'Hassan Ali', subject: 'Chemistry', qualification: 'Bs Chemistry', isVerified: true },
  { image: avatar, name: 'Mirza Ali', subject: 'Urdu', qualification: 'BA urdu', isVerified: true },
  { image: women, name: 'Sana Fatima', subject: 'Computer', qualification: 'Bs Computer Science', isVerified: true },
  { image: huzaifaImg, name: 'Hassan', subject: 'Islamiyat', qualification: 'BA Islamiyat', isVerified: true },
  { image: avatar, name: 'Sufyan', subject: 'biology', qualification: 'Bs Biology', isVerified: true },
  { image: women, name: 'Amna Khan', subject: 'Pak Studies', qualification: 'ADP ', isVerified: true },
  { image: huzaifaImg, name: 'Azan', subject: 'Math', qualification: 'MSc Mathematics', isVerified: true },
  { image: avatar, name: 'Hussain', subject: 'Physics', qualification: 'BSc physics', isVerified: true },
  { image: women, name: 'Ayesha Noor', subject: 'English', qualification: 'BA English', isVerified: true },
  { image: huzaifaImg, name: 'Hassan Ali', subject: 'Chemistry', qualification: 'Bs Chemistry', isVerified: true },
  { image: avatar, name: 'Rahman Ali', subject: 'Urdu', qualification: 'BA urdu', isVerified: true },
  { image: women, name: 'Sana Noor', subject: 'Computer', qualification: 'Bs Computer Science', isVerified: true },
  { image: huzaifaImg, name: 'Maqbool', subject: 'Islamiyat', qualification: 'BA Islamiyat', isVerified: true },
  { image: avatar, name: 'Sheikh Abid', subject: 'biology', qualification: 'Bs Biology', isVerified: true },
  { image: women, name: 'Aleena', subject: 'Pak Studies', qualification: 'ADP ', isVerified: true },
  { image: huzaifaImg, name: 'Hafeez', subject: 'Math', qualification: 'MSc Mathematics', isVerified: true },
  { image: avatar, name: 'Waleed', subject: 'Physics', qualification: 'BSc physics', isVerified: true },
  { image: women, name: 'Javaria', subject: 'English', qualification: 'BA English', isVerified: true },
  { image: huzaifaImg, name: 'Daniyal', subject: 'Chemistry', qualification: 'Bs Chemistry', isVerified: true },
  { image: avatar, name: 'Musa', subject: 'Urdu', qualification: 'BA urdu', isVerified: true },
  { image: women, name: 'Laiba', subject: 'Computer', qualification: 'Bs Computer Science', isVerified: true },
  { image: huzaifaImg, name: 'Iqsa', subject: 'Islamiyat', qualification: 'BA Islamiyat', isVerified: true },
  { image: avatar, name: 'Rana Junaid', subject: 'biology', qualification: 'Bs Biology', isVerified: true },
  { image: women, name: 'Maryam', subject: 'Pak Studies', qualification: 'ADP ', isVerified: true },
];

const CardsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTutors = tutorsData.filter(tutor =>
    tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cards-page">
      <h1 className="page-title">Tutors</h1>

      <input
        type="text"
        placeholder="Search by subject..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="cards-container">
        {filteredTutors.length > 0 ? (
          filteredTutors.map((tutor, index) => (
            <Card key={index} {...tutor} />
          ))
        ) : (
          <p style={{ color: '#2F2E41', textAlign: 'center' , fontSize:'35px', margin :'50px auto' }}>No tutors found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default CardsPage;
