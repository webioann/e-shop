import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAySCOkx3ak5W4rgez_y0Bpfrs-cIu2DW8",
    authDomain: "e-commerce-a0fe7.firebaseapp.com",
    projectId: "e-commerce-a0fe7",
    storageBucket: "e-commerce-a0fe7.appspot.com",
    messagingSenderId: "618037609514",
    appId: "1:618037609514:web:76f57f3ddba51b2913af53"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);