import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";


const useNowPlayingMovies =()=>{
    const dispatch =useDispatch()
    const getNowPlayingApi=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_Options)
        const json = await data.json();
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingApi() 
    },[])

}
export default useNowPlayingMovies;