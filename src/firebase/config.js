import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAREDTPX436-J5oyaN37Q_pqUvSCTJrl3w",
//   authDomain: "actividad-10-utch-df041.firebaseapp.com",
//   databaseURL: "https://actividad-10-utch-df041-default-rtdb.firebaseio.com",
//   projectId: "actividad-10-utch-df041",
//   storageBucket: "actividad-10-utch-df041.appspot.com",
//   messagingSenderId: "8745382134",
//   appId: "1:8745382134:web:e01e9ab63409162d663cd7"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCKCrWEM_UUqdr55Zkks5hZ87ZLdLPoqIU",
  authDomain: "actividad-10-ok.firebaseapp.com",
  databaseURL: "https://actividad-10-ok-default-rtdb.firebaseio.com",
  projectId: "actividad-10-ok",
  storageBucket: "actividad-10-ok.appspot.com",
  messagingSenderId: "389835374972",
  appId: "1:389835374972:web:d5faf9cd499dbfa5e4a4f9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
