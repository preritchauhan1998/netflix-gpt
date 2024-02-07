import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieSuggestion = () => {
    const gpt=useSelector(store=>store.gpt)
    const {gptMovies,movieNames}=gpt
    console.log(gptMovies,movieNames)
  return (
    <>
    <div className='bg-black max-w-2xl mx-auto max-h-96 overflow-y-scroll opacity-90'>
        {gptMovies?.map((movie,index)=>{
            return(
                <div className='searchListWrapper' key={movie}>
                <MovieList title={movie} moviesList={movieNames[index]} />
                </div>
            )
        }

        
        )}
        </div>
    </>


  )
}

export default MovieSuggestion