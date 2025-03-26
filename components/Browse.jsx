
import React, { useEffect } from "react";
import Header from "./Header";
import { API_Options } from "../utils/constants";
const Browse =()=>{
    const getNowPlayingApi=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_Options)
        const json =data.json();
        console.log(json)
    }

    useEffect(()=>{
        getNowPlayingApi() 
    },[])
    return(
        <div>
            {/* <Header /> */}
        
        </div>
    )
}
export default Browse;