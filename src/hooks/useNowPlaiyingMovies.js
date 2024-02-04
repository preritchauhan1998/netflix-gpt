import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux"
const useNowPlayingMovies=()=>{
const dispatch=useDispatch()
const nowPlaying=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  const response=await data.json()
  dispatch(addNowPlayingMovies(response.results))
}
useEffect(()=>{
  nowPlaying()
},[])
}
export default useNowPlayingMovies;