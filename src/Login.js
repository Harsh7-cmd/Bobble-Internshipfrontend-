
import React from 'react';
import Facebook from './Facebook.js';
import Google from './Google.js';
import logo from './logo.png';
import './login.css';

function Login() {
    function reroute() {
        window.location="/register";
      }
    return (
        
            <div class="login-page">
                 <center><img id="img1" src={logo} alt="Company Logo"></img></center>
      <hr className="brand"></hr>
  <div className="form">

    <form>
      <input type="text" placeholder="  username"/>
      <input type="password" placeholder="  password"/>
      <button className="hover">LOGIN</button>
      <p className="message"></p>
    </form>

    <form class="login-form">
    <Facebook /><Google />
      <button type="button" className="hover" onClick={reroute}>SIGN UP</button>
    </form>
  </div>
</div>
        
    );
}
export default Login;
