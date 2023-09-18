import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './loginScreen.scss';
import { login } from '../../../../redux/actions/auth.action';




const LoginScreen = () => {

const dispatch = useDispatch()

const accessToken = useSelector(state=>state.auth.accessToken)

const handleLogin = () => {
  dispatch(login())
}

const navigate = useNavigate(); // Use useNavigate instead of useHistory

useEffect(() => {
  if (accessToken) {
    navigate('/'); // Use navigate('/path') to navigate to the home route
  }
}, [accessToken, navigate]);


// const history = useHistory();

// useEffect(() => {
//   if (accessToken) {
//     history.push('/')
    
//   }
// },[accessToken])


// useEffect(() =>{
//   if (accessToken) {
    
//   }
// },[accessToken])

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