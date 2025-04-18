import MovieList from "./MovieList";
import {useSelector} from "react-redux";

const SecondaryContainer =()=>{
    const movies = useSelector(store=>store.movies)
    console.log(movies)
    return movies.nowPlayingMovies &&(
        <div className=" bg-black">
            <div className="-mt-52 relative z-20">
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
       <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
       <MovieList title={"Upcoming"} movies={movies.UpComingMovies} />
       <MovieList title={"Popular"} movies={movies.popularMovies} />
       </div>
       </div>
    )
}

export default SecondaryContainer;