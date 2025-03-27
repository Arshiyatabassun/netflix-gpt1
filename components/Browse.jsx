
import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";

const Browse =()=>{
  
   useNowPlayingMovies()
    return(
        <div>
            {/* <Header /> */}

            <MainContainer />
            <SecondaryContainer />
         
        
        </div>
    )
}
export default Browse;