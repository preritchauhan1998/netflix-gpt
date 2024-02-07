import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { Logo, SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  let dispatch=useDispatch()
  let navigate=useNavigate()
  let user =useSelector((store)=>store.user)
  const toggleComp=useSelector(store=>store?.gpt.showGptSearch)
  const signOutHandle=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  const toggleGptSearch=()=>{
    dispatch(toggleGptSearchView())
  }
  const handleLangChange=(e)=>{
dispatch(changeLanguage(e.target.value))
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate("/browse")
            // ...
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
          // ...
        }
      });
      //Unsubscribe when component unmount
      return()=>unsubscribe()
},[])
  return (
    <>
        <div className="header_inner ">
            <div className='w-[100%] absolute px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'><img className='w-44' src={Logo} alt="" />
            {user&&
            <div className='flex'>
              {toggleComp&&<select onChange={handleLangChange} className='mr-2 rounded-md px-2'>
                {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>}
            <button className='bg-purple-500 text-white font-bold rounded-sm px-4 py-1 mr-2' onClick={toggleGptSearch}>{!toggleComp?"GPT search":"Home"}</button>
            <div onClick={signOutHandle} className='bg-red-500 text-white text-xl p-2 cursor-pointer rounded-md'>
              signOut
            </div>
            </div>
          }
            </div>
            
        </div>
        
    </>
    
  )
}

export default Header