import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtjYFkUUUrZe6aL8-eAyY3N5A-htOhNgY",
    authDomain: "cloudimage-15f26.firebaseapp.com",
    databaseURL: "https://cloudimage-15f26.firebaseio.com",
    projectId: "cloudimage-15f26",
    storageBucket: "cloudimage-15f26.appspot.com",
    messagingSenderId: "53772963432",
    appId: "1:53772963432:web:65987ac3d3a996515b75dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database