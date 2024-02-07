import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            //for use of one or more data update of single dispatch function
            const {movieNames,movieResults}=action.payload
            state.gptMovies=movieNames;
            state.movieNames=movieResults;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult}=gptSlice.actions
export default gptSlice.reducer