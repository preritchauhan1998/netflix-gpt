import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaiyingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const toggleComp=useSelector(store=>store?.gpt.showGptSearch)
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies()
  return (
    <>
    <Header />
    {toggleComp?<GptSearch/>:
    <>
    <MainContainer/>
    <SecondryContainer/>
    </>}
    </>
  )
}

export default Browse