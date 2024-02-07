import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/languageConstant'
import openai from '../utils/openAi'
import {addGptMovieResult} from "../utils/gptSlice"
import { API_OPTIONS } from '../utils/constant'
const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.language)
    const searchText=useRef(null)
    const dispatch=useDispatch()
    const searchMovieTMBD = async(movie) => {
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)

        const json=await data.json()
        return json.results
    }
    const handleGptSearch=async()=>{
        //make an Api call to GPT API and get the movie Result
        const gptQuery="Act as a movie recommendation system and suggest some movies for the query:" + searchText.current.value +". only give me names of 5 movies, comma seprated like the example results given ahead.Example Result:Animal,KGF,Fighter"
        // const GptResult=await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery}],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(GptResult.choices?.[0]?.message?.content)
          //we found an error of exceed limit of gpt api so that we add dummy dataof that varaible for now
          const gptMovies=["Andaaz Apna Apna","Hera Pheri","Chupke Chupke","Jaane Bhi Do Yaaro","Padosan"]

          const promiseArray=gptMovies.map((movie)=>searchMovieTMBD(movie))
          const tmbdResults=await Promise.all(promiseArray)
            dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmbdResults}))
    }
  return (
    <div className='flex pt-[10%] items-center justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input type="text" ref={searchText} className='p-4 m-4 col-span-9' placeholder={lang[langKey].searchPlaceholder}/>
            <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-3' onClick={handleGptSearch}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar