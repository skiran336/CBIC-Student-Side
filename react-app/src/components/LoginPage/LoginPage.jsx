import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Loginpage.css';

function LoginPage() {
    return (
        <div className = 'wrapper' >
            <form action="">
                <h1>Login</h1>
                <div className = "input-box">
                    <input type = "text" placeholder= "Username" required />
                </div>
                <div className = "input-box">
                    <input type = "password" placeholder = 'Password' required />
                </div>

                <div className= "remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
            </form>
        </div>
        
    );
};

export default LoginPage
