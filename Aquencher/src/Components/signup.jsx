import React, { useState } from 'react';
import "./Css/signup.css"
import loginLogo from './Assets/loginLogo.png';
import { Link } from 'react-router-dom';

const signup = () =>{
 
  // for label of input field 
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return; 
    }
    // Proceed with form submission
    setError(''); // Clear any previous error

    console.log('Form submitted');
  };

  return (
    <div className="signup-container">
    <h1>Create Account</h1>
    <div className="signup-box">
      <div className="input-container">    
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="input-field">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder=" "
              required
            />
            <label>Username</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              value={firstname}
              onChange={handleFirstnameChange}
              placeholder=" "
              required
            />
            <label>Firstname</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              value={lastname}
              onChange={handleLastnameChange}
              placeholder=" "
              required
            />
            <label>Lastname</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder=" "
              required
            />
            <label>Password</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder=" "
              required
            />
            <label>Confirm Password</label>
            {error && <span className="error">{error}</span>}
          </div>
        
          <div className="form-footer">
            <label>
              <input type="checkbox" required/> I agree to  <a className="agreement" href="#"> Terms of Service and Privacy Policy.</a>
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p className="signin-text">Already have an account?  <Link to="/">Sign In</Link></p>
      </div>
    </div>
  </div>

  );

}

export default signup