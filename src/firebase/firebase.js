import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBxwimtd4SOqoRz7Va7V1g9rhNVjoUhuYo",
  	authDomain: "quizfrontdb.firebaseapp.com",
  	projectId: "quizfrontdb",
  	storageBucket: "quizfrontdb.appspot.com",
  	messagingSenderId: "1079550739473",
  	appId: "1:1079550739473:web:a1a5773bebc37b4dd5ddb0",
  	measurementId: "G-7ZW0CB5SVP"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;