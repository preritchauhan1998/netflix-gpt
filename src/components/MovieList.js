import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({moviesList,tittle}) => {
  return (
    <>
    <div className='movieListWrapper px-5 pb-3'>
    <h2 className='pb-2 font-bold text-2xl text-white'>{tittle}</h2>
    <div className='movieList flex gap-2 overflow-x-scroll scroll-hide'>
    {moviesList?.map((data)=><MovieCard key={moviesList.id} posterPath={data.poster_path}/>)}
    </div>
    </div>
    </>
  )
}

export default MovieList