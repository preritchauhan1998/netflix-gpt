import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
    const movieData=useSelector(store=>store?.movies)
  return (
    <>
    <div className='bg-black'>
    <div className="-mt-52 relative z-11">
        <MovieList tittle="Now Playing" moviesList={movieData?.nowPlayingMovies}/>
        <MovieList tittle="Top Rated movies" moviesList={movieData?.topRatedMovies}/>
        <MovieList tittle="Trending" moviesList={movieData?.trendingMovies}/>
        <MovieList tittle="Watched" moviesList={movieData?.nowPlayingMovies}/>
        <MovieList tittle="Thriller" moviesList={movieData?.nowPlayingMovies}/>
    </div>
    </div>
    </>
  )
}

export default SecondryContainer