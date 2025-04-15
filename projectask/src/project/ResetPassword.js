// ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css'; // You can style this as needed.

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // used for navigation

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Please enter your email address.');
    } else {
      console.log('Password reset requested for email:', email);
      setError('');
      setSuccessMessage('Password reset email has been sent. Please check your inbox.');
      setTimeout(() => {
        navigate('/login'); // Navigate back to login page after success
      }, 3000); // Wait for 3 seconds before redirecting
    }
  };

  return (
    <div className="ResetPassword">
      <div className="reset-container">
        <h1>Reset Password</h1>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handlePasswordReset}>
          <div className="input-group">
            <label htmlFor="email">Enter your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-button">Send Reset Link</button>
        </form>
        <p className="footer-text">
          Remember your password? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
