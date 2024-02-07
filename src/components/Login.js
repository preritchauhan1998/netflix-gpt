import React ,{useRef, useState}from 'react'
import Header from './Header'
import { checkValidDate } from '../utils/Validate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { auth } from '../utils/firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG } from '../utils/constant'
const Login = () => {
    const [userStatus,setUserStatus]=useState(true)
    const [errorMessage,setErrorMessage]=useState()
    const dispatch=useDispatch()
let navigate=useNavigate()
    let name=useRef(null)
    let email=useRef(null)
    let password=useRef(null)
    const checkUser=()=>{
        setUserStatus(!userStatus)
    }
    const handleValidate=()=>{

        let userName=""

        if(name.current == null) {
            userName = "mukul"
        }
        
        const message=checkValidDate(userName,email.current.value,password.current.value)
        setErrorMessage(message)
        if(message) return;
        if(!userStatus){
            //signup login
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        // navigate("/browse")
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "" +errorMessage)
    // ..
  });
        }
        else{
            //signIn Login
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "" +errorMessage)
  });
        }
    }
  return (
    <>
    <Header/>
    <div className='login absolute'>
        <img src={BG} alt="" />
    </div>
    <form className='Login bg-black p-4' onSubmit={(e)=>e.preventDefault()}>
        <h2 className='text-3xl font-bold my-4 text-white'>{userStatus?"Sign In":"SignUp"}</h2>
        {!userStatus &&<input ref={name} type="text" placeholder='Full Name' className='p-2 my-2 w-full'/>}
        <input ref={email} type="text" placeholder='Email Address' className='p-2 my-2 w-full'/>
        <input ref={password} type="password" placeholder='Password' className='p-2 my-2 w-full'/>
        <button className='w-full p-2 my-4 bg-red-700 text-white rounded-md' onClick={handleValidate}>{userStatus?"Sign In":"SignUp"}</button>
        <p className='text-red-500 font-2xl my-2 text-center'>{errorMessage}</p>
        <div className='text-white cursor-pointer' onClick={checkUser}>{!userStatus?"Already User? SignIn now.":"New to Netflix? Sign up now."}</div>
    </form>
    </>
  )
}

export default Login