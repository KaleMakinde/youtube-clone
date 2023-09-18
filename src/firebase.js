
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDoDbCa2hJBVOoqircO_955VLyGDdsoz60",
    authDomain: "clone-3-d795b.firebaseapp.com",
    projectId: "clone-3-d795b",
    storageBucket: "clone-3-d795b.appspot.com",
    messagingSenderId: "590975831099",
    appId: "1:590975831099:web:632bc93724c4979b3da01e"
  };


// firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export default firebase.auth()