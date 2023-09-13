import React from 'react';
import { useDispatch } from 'react-redux';

import './loginScreen.scss';
import { login } from '../../../../redux/actions/auth.action';


const LoginScreen = () => {

const dispatch = useDispatch()

const handleLogin = () => {
  dispatch(login())
}

  return (
    <div className="login">
        <div className="login__container">
            <img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" 
            alt="" />
            <button onClick={handleLogin}> Login with google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen;