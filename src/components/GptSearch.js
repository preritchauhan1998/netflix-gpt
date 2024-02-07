import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG } from '../utils/constant'
import MovieSuggestion from './MovieSuggestion'

const GptSearch = () => {
  return (
    <>
    <div className='login absolute -z-10'>
        <img src={BG} alt="" />
    </div>
    <GptSearchBar/>
    <MovieSuggestion/>
    </>
  )
}

export default GptSearch