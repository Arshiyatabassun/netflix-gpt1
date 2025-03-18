
import Header from "./Header";
import React from "react";
import { useState } from "react";
const Login =()=>{
  const [isSignInForm,setIsSignInForm]=useState(true)

  const toggleSignInForm =()=>{
     setIsSignInForm(!isSignInForm)
  }
    return (
      <div>
      <div className="absolute">
      
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg"/>
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSignInForm ? "SignUp" : "Sign In"}</h1>
       {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" /> }
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-900" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "SignUp" : "SignIn"}</button>
        <p className="py-6 cursor-pointer"onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? signUp Now" : "Already registered ? Sign In Now"}</p>
      </form>
      </div>
    )
}

export default Login;