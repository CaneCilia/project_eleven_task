// MainApp.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import App from './App'; // Main Login page
import RegisterFile from './RegisterFile'; // Register page
import ResetPassword from './ResetPassword'; // Reset password page

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Main Login Page */}
        <Route path="/login" element={<App />} /> {/* Login Page */}
        <Route path="/register" element={<RegisterFile />} /> {/* Register Page */}
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Reset Password Page */}
      </Routes>
    </Router>
  );
}

export default MainApp;
