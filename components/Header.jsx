
import React, { useEffect } from "react";
import {onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header =()=>{
const navigate =useNavigate()
const  dispatch= useDispatch();
const user=useSelector((store)=>store.user)
console.log(user)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
           
            navigate("/")
          }).catch((error) => {
            navigate("/error")
          });
        
    }
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName,photoURL} =user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate("/browse")
          } else {
            dispatch(removeUser())
            navigate("/")
          }
        });
        //unSUBSCRIBE WHEN COMPONENT WILL UNMOUNT
        return ()=>unsubscribe();
      },[])
    return(
    
        <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
        <img  className="w-44" alt="logo" src={LOGO}/>
       
        {user &&<div className="flex p-2 cursor-pointer">
            <img  className= "w-12 h-12 rounded-full" alt="usericon" src={user?.photoURL}/>
        <button className="font-bold text-red-500" onClick={handleSignOut}>Sign out</button>
        </div>}
        </div>
     
      
    )
}

export default Header;