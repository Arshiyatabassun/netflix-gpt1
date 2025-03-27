import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
      nowPlayingMovies:null,
      MoviesTrailer:null,
    },
    reducers:{
        addNowPlayingMovies(state,action){
            state.nowPlayingMovies= action.payload;
        },
        addMoviesTrailer(state,action){
            state.MoviesTrailer =action.payload;
        }
    }
})


export const {addNowPlayingMovies,addMoviesTrailer}=movieSlice.actions;
export default movieSlice.reducer;