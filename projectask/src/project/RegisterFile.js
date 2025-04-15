// RegisterFile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterFile.css'; // You can style this as needed.

function RegisterFile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // used for navigation

  const handleRegister = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      console.log('Registered Email:', email);
      console.log('Registered Password:', password);
      setError('');
      navigate('/login');
    }
  };

  return (
    <div className="RegisterFile">
      <div className="register-container">
        <h1>Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="footer-text">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterFile;
