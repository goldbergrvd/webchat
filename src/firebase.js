import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBGe1r55XLUCAiWSRtj3Zomj8wrBxiZETo",
  authDomain: "yochat-193001.firebaseapp.com",
  databaseURL: "https://yochat-193001.firebaseio.com",
  projectId: "yochat-193001",
  storageBucket: "yochat-193001.appspot.com",
  messagingSenderId: "4678666336"
};

firebase.initializeApp(config);

export default firebase
