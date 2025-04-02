import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
      nowPlayingMovies:null,
      MoviesTrailer:null,
      popularMovies:null,
      TopRatedMovies:null,
      UpComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies(state,action){
            state.popularMovies= action.payload;
        },
        addMoviesTrailer(state,action){
            state.MoviesTrailer =action.payload;
        },
        addTopRatedMovies(state,action){
            state.TopRatedMovies =action.payload;
        },
        addUpComingMovies(state,action){
            state.UpComingMovies =action.payload;
        }
    }
})


export const {addNowPlayingMovies,addMoviesTrailer,addPopularMovies,addTopRatedMovies,addUpComingMovies}=movieSlice.actions;
export default movieSlice.reducer;