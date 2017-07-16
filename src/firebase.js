import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD46mhjtsaa04UtT36-D7hUDB0FBdpme_I',
  authDomain: 'femexample-54f76.firebaseapp.com',
  databaseURL: 'https://femexample-54f76.firebaseio.com',
  projectId: 'femexample-54f76',
  storageBucket: 'femexample-54f76.appspot.com',
  messagingSenderId: '571272761064'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
