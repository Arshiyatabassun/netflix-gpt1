import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleSearch:false,
        movieResults:null,
        movieName:null,
    },
    reducers:{
        toggleSearchView:(state)=>{
           state.toggleSearch =!state.toggleSearch;
        },
        addgptMovieResults:(state,action)=>{
            const{movieName,movieResults }=action.payload
            state.movieName =movieName;
            state.movieResults =movieResults
        }
    }
})

export const {toggleSearchView,addgptMovieResults} =gptSlice.actions;
export default gptSlice.reducer;