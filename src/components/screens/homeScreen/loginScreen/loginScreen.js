import React from 'react';

import './loginScreen.scss';

const LoginScreen = () => {
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" 
            alt="" />
            <button> Login with google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen;