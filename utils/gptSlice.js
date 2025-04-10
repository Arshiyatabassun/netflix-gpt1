import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        toggleSearch:false
    },
    reducers:{
        toggleSearchView:(state)=>{
           state.toggleSearch =!state.toggleSearch;
        }
    }
})

export const {toggleSearchView} =gptSlice.actions;
export default gptSlice.reducer;