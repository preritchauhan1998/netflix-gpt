import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaiyingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'

const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
    <Header />
    <MainContainer/>
    <SecondryContainer/>
    </>
  )
}

export default Browse