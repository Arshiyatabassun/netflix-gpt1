import Login from "./Login";
import React from "react";
import Header from "./Header";
// import {createBrowserRouter} from "react-router-dom";
import { Outlet,useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import{ useDispatch } from "react-redux"


const Body =()=>{
    // const appRouter =createBrowserRouter([{

    //     path:'/',
    //     element:<Login />,
    // },{
    //     path:'/browse',
    //     element:<Browser />
    
    // },
    // {
    //     path:'/header',
    //     element:<Header />
    // },
    
    // ])
    const dispatch =useDispatch();
    const navigate =useNavigate();
    // const user = useSelector(store =>store.user)
    // console.log(user)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} =user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
  },[])
   
    return(
        <>
   <Header />
   <Outlet />
        {/* <RouterProvider router ={appRouter} /> */}
         
        </>
    )
}
export default Body;