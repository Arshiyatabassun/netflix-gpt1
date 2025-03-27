import { useEffect, useState } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesTrailer } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
    const tailerVideo =useSelector((store)=>store.movies.MoviesTrailer)
    const dispatch =useDispatch()
    // const [tailerId,setTrailerId]=useState(null)
  //fetch the trailer videos
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1125899/videos?language=en-US",
      API_Options
    );
    const json = await data.json();
    console.log(json.results);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0]; //if my filterData.length is not zero return first trailoer
    // otherwise it tske the first Video
    console.log(trailer);
    // setTrailerId(trailer)
    dispatch(addMoviesTrailer(trailer))

  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <h1> <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/c8sf0c-cjzQ?si=qKd7MJfNwfZ52ymn" +tailerVideo?.key}
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" ></iframe></h1>
     
    </div>
  );
};

export default VideoBackground;
