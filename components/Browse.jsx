
import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComing";
import GptSearchPage from "./GPTSearchPage";
import { toggleSearchView } from "../utils/gptSlice";

const Browse =()=>{
  
   useNowPlayingMovies()
   usePopularMovies()
   useTopRatedMovies()
   useUpComingMovies()
    return(
        <div>
            {/* <Header /> */}
           { toggleSearchView ? <GptSearchPage /> : <><MainContainer />
            <SecondaryContainer />
            </>}
            
         
        
        </div>
    )
}
export default Browse;