import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//const credentials = require("./credentials.json");

const firebaseConfig = {
  apiKey: "AIzaSyDYEcFul5WpZR0HTo5ATZxlGFBA-uI47a4",
  authDomain: "signinwith-4074f.firebaseapp.com",
  projectId: "signinwith-4074f",
  storageBucket: "signinwith-4074f.appspot.com",
  messagingSenderId: "321931780571",
  appId: "1:321931780571:web:6d2499a220e09ed0ebc7fe",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
