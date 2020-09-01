import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCU8Sus7GQ8RhvL8j25XEXUrCeFzXOjBU4",
  authDomain: "login-173ed.firebaseapp.com",
  databaseURL: "https://login-173ed.firebaseio.com",
  projectId: "login-173ed",
  storageBucket: "login-173ed.appspot.com",
  messagingSenderId: "802716390050",
  appId: "1:802716390050:web:a5a9ffe8bb878ef664fdfb",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
