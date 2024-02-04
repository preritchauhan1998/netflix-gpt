import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import { API_OPTIONS } from '../utils/constant'

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch()
    const getMoviesVideo=async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const response=await data.json()
        let filterData=response?.results?.filter((video)=>video.type==="Trailer")
        let firstData=filterData[0]
        dispatch(addTrailerVideo(firstData))
    }
    useEffect(()=>{
        getMoviesVideo()
    },[])
}

export default useMovieTrailer