 import React from 'react'
import { imgUrl } from '../utils/constant'
 
 const MovieCard = ({posterPath}) => {
  if(!posterPath) return
   return (
    <>
     <div className='w-48 shrink-0'>
        <img src={imgUrl + posterPath} alt="" />
     </div>
     </>
   )
 }
 
 export default MovieCard