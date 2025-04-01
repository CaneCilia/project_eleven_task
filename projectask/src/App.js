import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in both fields.');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      setError('');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="footer-text">
          Don't have an account? <a href="/New User">Register here</a>
        </p>
        <p className="footer-text">
          Forgot your password? <a href="/Don't remembered Password">reset-password</a>
        </p>
      </div>
    </div>
  );
}

export default App;