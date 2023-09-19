import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Import other Firebase services if needed

// Rest of your code


import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';


export const login = () => async dispatch => {
    try {
        dispatch({
          type: LOGIN_REQUEST,
        });
    
        const provider = new firebase.auth.GoogleAuthProvider();
    
        const res = await auth.signInWithPopup(provider);
        const accessToken = res.credential.accessToken;
    


        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem('ytc-access-token', accessToken)
        sessionStorage.setItem('ytc-user', JSON.stringify(profile))
        

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        });

        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        })

    } catch (error) {
        console.error(error.message);
        dispatch({
          type: LOGIN_FAIL,
          payload: error.message,
        });
    }
}

// import { auth } from '../../firebase'; // Make sure auth is correctly imported
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';


// export const login = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: LOGIN_REQUEST,
//     });

//     const provider = new firebase.auth.GoogleAuthProvider();

//     const res = await auth.signInWithPopup(provider);
//     console.log(res);

//     const accessToken = res.credential.accessToken;

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: accessToken,
//     });

    

//     // Rest of your code for handling the user profile

//   } catch (error) {
//     console.error(error.message);
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.message,
//     });
//   }
// };
