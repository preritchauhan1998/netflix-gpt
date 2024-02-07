import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant'
import {addTrendingMovies} from "../utils/movieSlice"

const useTrendingMovies = () => {
    const dispatch=useDispatch()
    const trendingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      const response=await data.json()
      dispatch(addTrendingMovies(response.results))
    }
    useEffect(()=>{
        trendingMovies()
    },[])
    }
export default useTrendingMovies