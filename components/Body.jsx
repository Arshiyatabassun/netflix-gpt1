import Login from "./Login";
import React from "react";
import Header from "./Header";
// import {createBrowserRouter} from "react-router-dom";
import { Outlet } from "react-router-dom";


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
   
    return(
        <>
   <Header />
   <Outlet />
        {/* <RouterProvider router ={appRouter} /> */}
         
        </>
    )
}
export default Body;