import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink,useHistory } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

function Register() {
    const [user,setUser]=useState({})
  const { handleSubmit } = useForm();
  const history =useHistory()
  const {signIn,setIsLoading,firebaseData,RegisterwithPassword,handleFirebaseData} = useContext(AuthContext)

  const onSubmit = e => {
    RegisterwithPassword(user.email,user.password)
      .then(res=>{
        handleFirebaseData(user)
        history.push('/home')
      })
      .catch(e=>{
        let error={}
        error.message= e.message
        handleFirebaseData(error)
      })
      .finally(()=>setIsLoading(false))
  };
  const handleChange=(e)=>{
    let newUser=user
    newUser[e.target.name]=e.target.value
    setUser(newUser)
  }
  const handleSignIn=()=>{
    signIn()
      .then(res=>{
        let newUser={}
        newUser.email = res.user.email
        handleFirebaseData(newUser)
        history.push('/home')
      })
      .catch(e=>{
        let error={}
        error.message= e.message
        handleFirebaseData(error)
      })
      .finally(()=>setIsLoading(false))
  }

  return (
    <div className='text-center'>
        <h2>Please Register...</h2>
      <form onSubmit={handleSubmit(onSubmit)}><br />
        <label className='me-2' htmlFor="email">Email:</label>
        <input name='email' onChange={handleChange} id='email' required/> <br /><br />
        <label className='me-2' htmlFor="password">Password:</label>
        <input name='password' onChange={handleChange} id='password' required/>
        <br /><br />
        <input type="submit" />
    </form>
    { firebaseData?.message && <p className='text-danger'>{firebaseData?.message}</p>}
    <p>Already registered?</p><NavLink to='/login'>Please Login</NavLink>
    <hr />
    <p>Register with Socail Medaia</p>
    <button onClick={handleSignIn}>google</button>
    </div>
  );
}

export default Register