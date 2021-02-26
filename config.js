import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDdIbD40mIOWYgMAL3ghe0Zxm6Fex1X5Gs",
  authDomain: "project-71-abfb1.firebaseapp.com",
  projectId: "project-71-abfb1",
  storageBucket: "project-71-abfb1.appspot.com",
  messagingSenderId: "490210521274",
  appId: "1:490210521274:web:bcb9f92aa78e32e4441283"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();