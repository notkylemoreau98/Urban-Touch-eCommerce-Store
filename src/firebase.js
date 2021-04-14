import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDN4PGTeoJdRgrUxxVaLN2gz_iR4fMCML0",
  authDomain: "e-store-3df82.firebaseapp.com",
  projectId: "e-store-3df82",
  storageBucket: "e-store-3df82.appspot.com",
  messagingSenderId: "394010729973",
  appId: "1:394010729973:web:656f0515d3dddaceb4d4bc",
  measurementId: "G-VH6GTFWFCJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };