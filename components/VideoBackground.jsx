// import {useState } from "react";

import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const tailerVideo =useSelector((store)=>store.movies.MoviesTrailer)

    // const [tailerId,setTrailerId]=useState(null)
 useMovieTrailer(movieId)
 
  return (
    <div>
      <h1> <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/c8sf0c-cjzQ?si=qKd7MJfNwfZ52ymn" +tailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" ></iframe></h1>
     
    </div>
  );
};

export default VideoBackground;
