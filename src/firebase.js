// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDNQaQT7EHsG_pXwD2Gq9uE4OQshTVbW0o',
    authDomain: 'base-1539b.firebaseapp.com',
    projectId: 'base-1539b',
    storageBucket: 'base-1539b.appspot.com',
    messagingSenderId: '426725803669',
    appId: '1:426725803669:web:44ffee5070a5dd64a83d9c',
    measurementId: 'G-1DQX7502Q6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
