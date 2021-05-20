import firebase from 'firebase';
import "firebase/storage"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFSNfGLFueJI6B6kAhc3n_lONiKfYflbY",
    authDomain: "reactjs-admin-305bb.firebaseapp.com",
    projectId: "reactjs-admin-305bb",
    storageBucket: "reactjs-admin-305bb.appspot.com",
    messagingSenderId: "543257990803",
    appId: "1:543257990803:web:8fe9ff90a77ccc4a949f66"
  };
// var firebaseConfig = {
//   apiKey: "AIzaSyCJMriXa2zVRra6Q9qvt6bxywcV2Y6iQ1w",
//   authDomain: "admin-reactjs.firebaseapp.com",
//   projectId: "admin-reactjs",
//   storageBucket: "admin-reactjs.appspot.com",
//   messagingSenderId: "1021370878319",
//   appId: "1:1021370878319:web:ee58d8ef702826690a009a",
//   measurementId: "G-Q0T3YR7B8B"
// };
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
export  {
  storage,firebase as default
}