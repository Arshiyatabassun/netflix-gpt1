import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addMoviesTrailer } from "../utils/movieSlice";
import { useEffect } from "react";



const useMovieTrailer =(movieId)=>{
    const dispatch =useDispatch()
 //fetch the trailer videos && updating the store with tailer video data
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
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
}

export default useMovieTrailer;