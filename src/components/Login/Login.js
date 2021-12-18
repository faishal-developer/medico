import React, { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { useForm } from "react-hook-form";
import { NavLink,useLocation,useHistory } from "react-router-dom";

function Login() {
  const [user,setUser] = useState({})
  const { handleSubmit } = useForm();
  const location =useLocation()
  const history = useHistory()
  const {signIn,setIsLoading,firebaseData,signInwithPassword,handleFirebaseData} = useContext(AuthContext)

  const redirectAuth=()=>{
    let path = location?.state?.from?.pathname || '/home'
    history.push(path)
  }

  const onSubmit = e => {
    signInwithPassword(user.email,user.password)
      .then(res=>{
        handleFirebaseData(user)
        redirectAuth()
      })
      .catch(e=>{
        let error={}
        error.message= e.message
        handleFirebaseData(error)
      })
      .finally(()=>setIsLoading(false))
  };
  const handleChange=(e)=>{
    let newUser = user
    newUser[e.target.name] = e.target.value
    setUser(newUser)
    console.log(user);
  }
  const handleSignIn=()=>{
    signIn()
      .then(res=>{
        let newUser={}
        newUser.email = res.user.email
        handleFirebaseData(newUser)
        redirectAuth()
      })
      .catch(e=>{
        let error={}
        error.message= e.message
        handleFirebaseData(error)
      })
      .finally(()=>setIsLoading(false))
  }
  console.log(location?.state?.from?.pathname);
  return (
    <div className='text-center'>
      <h2>Please Login...</h2>

      <form onSubmit={handleSubmit(onSubmit)}><br />
        <label className='me-2' htmlFor="email">Email:</label>
        <input name='email' onChange={handleChange} id='email'  required/> <br /><br />
        <label className='me-2' htmlFor="password">Password:</label>
        <input name='password' onChange={handleChange} id='password' required/>
        <br /><br />
        <input type="submit" />
    </form>
    {firebaseData?.message && <p className='text-danger'>{firebaseData?.message}</p>}
    <p>Not registered yet?</p><NavLink to='/register'>Please Register</NavLink>
    <hr />
    <p>SignIn with Socail Medaia</p>
    <button onClick={handleSignIn}>google</button>
    </div>
  );
}

export default Login