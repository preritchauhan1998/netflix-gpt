import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
const VideoBg = ({movieId}) => {
    useMovieTrailer(movieId)
    const trailerKey=useSelector(store=>store.movies?.trailerVideo)

  return (
    <>
    <div className='PlayingVideoBg '>
    {/* <iframe className='w-[100%] aspect-video' src={"https://www.youtube.com/embed/" + trailerKey?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
    <iframe className='w-[100%] aspect-video' src={`https://www.youtube.com/embed/${trailerKey?.key}?&autoplay=1&mute=1;controls=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
    </>
  )
}

export default VideoBg