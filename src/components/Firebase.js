import firebase from 'firebase';
import 'firebase/analytics';
const firebaseConfig = {
    apiKey: "AIzaSyCdVkIfZbl9QM8LQVPmbZAy_KKmUIspmm0",
    authDomain: "naeem-abbas-resume.firebaseapp.com",
    projectId: "naeem-abbas-resume",
    storageBucket: "naeem-abbas-resume.appspot.com",
    messagingSenderId: "816166676233",
    appId: "1:816166676233:web:099eb487437d0e051b55d8",
    measurementId: "G-EL20B0TKNR"
  };
//   if(firebase.initializeApp===null){
//       firebase.initializeApp(firebaseConfig);
//       firebase.analytics();
//     }
const firebaseApp=firebase.initializeApp(firebaseConfig);
firebaseApp.analytics();
const db = firebaseApp.firestore();
export  {db};