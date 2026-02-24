import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'ranahassan427726@gmail.com' && password === '1234') {
        console.log('Login successful');
        setEmail('');
        setPassword('');
        navigate('/btn');
    } else {
      alert('Invalid email or password');
      setEmail('');
        setPassword('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        <button className='loginbtn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
