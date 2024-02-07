import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import VideoBg from './VideoBg';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie=movies?.[0]
    const {original_title,overview,id}=mainMovie
  return (
    <>
        <div className='playing_movie'>
            <div className='w-[100%] aspect-video pt-[20%] movie_title px-7 absolute bg-gradient-to-r from-black'>
                <h1 className='w-[500px] mb-4 text-4xl text-white font-bold'>{original_title}</h1>
                <p className='text-white w-[500px] mb-3'>{overview}</p>
                <button className='bg-white px-4 py-1 text-xl rounded-md mr-3'>Play</button>
                <button className='bg-gray-500 text-white px-4 py-1 text-xl rounded-md'>More Info</button>
            </div>
            <VideoBg movieId={id}/>
        </div>
    </>
  )
}

export default MainContainer