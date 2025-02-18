import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "../config/firebase.config";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

export {
    db,
    auth,
    storage,
};
