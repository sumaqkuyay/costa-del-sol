import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3Zo4B6E2-VEsh_2kic5RvNlljEUtU7Po',
  authDomain: 'costa-del-sol-2d857.firebaseapp.com',
  projectId: 'costa-del-sol-2d857',
  storageBucket: 'costa-del-sol-2d857.appspot.com',
  messagingSenderId: '30547720822',
  appId: '1:30547720822:web:742329d6926aa78ee77d57',
  measurementId: 'G-EMRK34WKPS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
