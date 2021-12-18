import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.config";

const initializeFirebaseApp=()=>{
    initializeApp(firebaseConfig)
}

export default initializeFirebaseApp