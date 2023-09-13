import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';

import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';


export const login = () => async dispatch => {
    try {




        dispatch({
            type: LOGIN_REQUEST,
        })


        const provider = new GoogleAuthProvider();


        const res = await signInWithPopup(auth, provider);
        
        const user = res.user;

    console.log(user);


    const accessToken = res.credential.accessToken


    const profile = {
        name: res.additionalUserInfo.profile.name,
        photoURL: res.additionalUserInfo.profile.picture,
    }
    console.log(profile)

    dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken
    })

    dispatch({
        type: LOAD_PROFILE,
        payload: profile,
    })

    } catch (error) {
        console.error(error.message);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
}