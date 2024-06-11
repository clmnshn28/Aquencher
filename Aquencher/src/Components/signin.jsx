import React, { useState } from 'react';
import "./Css/signin.css"
import loginLogo from './Assets/loginLogo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const signin = () =>{

  // for label of input field 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // this for the toggle password
  const [showPassword, setShowPassword] = useState(false); // State to track if password should be shown or hidden

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return(
      <div className="login-container">
        <img className="loginlogo" src={loginLogo} alt="AquencherLogo" />
        <div className="login-box">
          <div className="input-container">
            <h1>Login</h1>
            
            <form action="" method="post">
              <div className="input-field">
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder=" "
                />
                <label>Username</label>
              </div>
              <div className="input-field password-input">
                <input
                  type={showPassword ? 'text' : 'password'} // Conditionally show/hide password
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder=" "
                />
                <label>Password</label>
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {/* Toggle between eye and crossed eye icons based on showPassword state */}
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="form-footer">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a className="forgot" href="#">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
            </form>
            <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
          </div>
        </div>
      </div>

  );
}


export default signin