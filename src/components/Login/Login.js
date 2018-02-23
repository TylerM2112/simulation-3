import React from 'react';
import logo from './logo.png';
import './Login.css';

const Login = () => {
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
    const link = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}`
    return (
        <div className="login-main">
            <div className="login-box">
                <div className="logo-text-container">    
                    <img src={logo} alt="logo" />  
                    <h1>Helo</h1>
                </div> 
                <div className="login-button-container">
                    <a href={link} className="login-link-text"><button className="login-button">Login / Register</button></a>
                </div>    
            </div>    
        </div>    
    );
};

export default Login;