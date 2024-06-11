import "./Css/signup.css"
import loginLogo from './Assets/loginLogo.png';


const signup = () =>{
 
  return (
    <div className="signup-container">
      <img className="loginlogo" src={loginLogo} alt="AquencherLogo" />
      <div className="signup-box">
        <h1>Sign Up</h1>
        {/* Your sign up form goes here */}
      </div>
    </div>
  );

}

export default signup