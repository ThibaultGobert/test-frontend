import React from 'react';
import logo from '../../../assets/images/login-logo.png';

const LoginHeader = () => {
  return (
    <div className="header login-header">
      <img className="login-logo" src={logo} alt="Login logo"/>
    </div>
  );
};

export default LoginHeader;
