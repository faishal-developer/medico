import { signInWithEmailAndPassword ,createUserWithEmailAndPassword ,getAuth,onAuthStateChanged , signInWithPopup, GoogleAuthProvider,signOut  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import app from "../../firebase/fireBase.init"

app()
const useFirebase = () => {
    const [firebaseData,setFirebaseData]=useState({})
    const [isLoading,setIsLoading]=useState(true)

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleFirebaseData=(object)=>{
        setFirebaseData(object)
    }

    const signIn=()=>{
        setIsLoading(true)
        return signInWithPopup(auth, provider)
    }
    const RegisterwithPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInwithPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(()=>{
        onAuthStateChanged(auth,(user) => {
            if (user) {
                let newFirebaseData = {}
                newFirebaseData.email=user.email
                newFirebaseData.name = user.displayName
                setFirebaseData(newFirebaseData)
            } else {
              
            }
            setIsLoading(false)
          })
    },[])

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
            .then(res=>{
                let newFirebaseData = {}
                setFirebaseData(newFirebaseData)
            })
            .finally(()=>setIsLoading(false))
    }


    return {
        signIn,
        firebaseData,
        logOut,
        signInwithPassword,
        RegisterwithPassword,
        handleFirebaseData,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;