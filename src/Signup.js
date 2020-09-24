import React from 'react';
import Facebook from './Facebook.js';
import Google from './Google.js';
import logo from './logo.png';
import './Signup.css';

function Signup (){
  function reroute() {
    window.location="/";
  }
 
  
  return (
    <div className="Signup-page">
      <center><img id="img1" src={logo} alt="Company Logo"></img></center>
      <hr className="brand"></hr>
  <div className="form">

    <form>
      <input type="text" placeholder="first name"/>
      <input type="text" placeholder="last name"/>
      <input type="email" placeholder="email address"/>
      <input type="password" placeholder="password"/>
      
    </form>

    <form className="Signup-form">

      <button type="button" className="hover">SIGN UP</button>
    <h5 id="sbb">-OR-</h5>
      <Facebook /><Google />
      <button type="button" className="hover" onClick={reroute}>Log In</button>  
      
     
    </form>
  </div>
</div>
  );
}

export default Signup;
