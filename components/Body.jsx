import Login from "./Login";
import React from "react";
import Header from "./Header";

import { Outlet, } from "react-router-dom";



const Body =()=>{
  
 
   
    return(
        <>
   <Header />
   <Outlet />
        {/* <RouterProvider router ={appRouter} /> */}
         
        </>
    )
}
export default Body;