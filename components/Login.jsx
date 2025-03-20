
import Header from "./Header";
import React from "react";
import { useState,useRef } from "react";
import checkValidateData from "../utils/validate.js"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/firebase.js"




const Login =()=>{
  const [isSignInForm,setIsSignInForm]=useState(true)
  const [isErrorMessage ,setIsErrorMessage]=useState(null);
  const name =useRef(null);
 const email =useRef(null);
 const password =useRef(null)

const handleClick =()=>{
  
  // console.log(name.current.value)
    console.log(email.current.value);
    console.log(password.current.value)
    // Validate the form data
   const message = checkValidateData(email.current.value,password.current.value);
   console.log(message)
   setIsErrorMessage(message)
   if(message) return;

   if(!isSignInForm){
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
      // Sign up logic 
      const user = userCredential.user;
      console.log(user)
      // navigate("/browse")
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     setIsErrorMessage(errorCode + "-"+errorMessage)
    });
  
   }
   else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setIsErrorMessage(errorCode +"-"+errorMessage)
  });
   }
}
  const toggleSignInForm =()=>{
     setIsSignInForm(!isSignInForm)
  }
    return (
      <div>
      <div className="absolute">
      
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg"/>
      </div>
      <form  onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSignInForm ? "SignIn" : "SignUp"}</h1>
       {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" /> }
        <input type="text" ref={email} placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900" />
        <input type="password" ref={password} placeholder="Password" className="p-4 my-4 w-full bg-gray-900"/>
        <p className="text-red-500">{isErrorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleClick}>{isSignInForm ? "SignIn" : "SignUp"}</button>
        <p className="py-6 cursor-pointer"onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? signUp Now" : "Already registered ? Sign In Now"}</p>
      </form>
      </div>
    )
}

export default Login;