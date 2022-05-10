import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAtrEViaHMIDjj29oW_4VDI6AzDQPgZWIk",
  authDomain: "phone-auth-1a5ef.firebaseapp.com",
  projectId: "phone-auth-1a5ef",
  storageBucket: "phone-auth-1a5ef.appspot.com",
  messagingSenderId: "800248427087",
  appId: "1:800248427087:web:11672659f76500ddb9703a",
};

const app = initializeApp(firebaseConfig);
export const Authentication=getAuth(app)