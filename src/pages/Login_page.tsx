import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { setCurrentUser, setUserAvatar } from '../redux/reduxState'
import { openModal, closeModal } from '../redux/modelSlice';
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import Popup from '../components/Popup'
import ModalCloseButton from '../components/ModalCloseButton'
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { auth, provider } from '../firebase.config';
import '../style/signup-page.scss'

const Login_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [inputType,setInputType] = useState<string>('password')
    const [warning,setWarning] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const loginWithEmail = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate(-1)
            dispatch(setCurrentUser(user.user.email))
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    const googleRegistration = async () => {
        try {
            const user = await signInWithPopup(auth, provider)
            dispatch(setCurrentUser(user.user.email))
            dispatch(setUserAvatar(user.user.photoURL))
            navigate(-1)
        }
        catch(error) {console.error(error)} 
    }

    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }
    
    const closePopup = () => {
        setWarning(false)
    }
    
    return (
        <div className={`signup-wrapper`}>
            <h1 className='header'>Login</h1>
            <ModalCloseButton/>
            <form onSubmit={event => event.preventDefault() }>
                { warning && <Popup closePopup={closePopup}/>}
                <div className='email-box'>
                    <label>Email</label>
                    <div className='email-input-box'>
                        <input 
                            type='email' 
                            placeholder='email'
                            value={email}
                            onChange={event => setEmail(event.target.value)}/>
                        <HiOutlineMail className='input-icon'/>
                    </div>
                </div>
                <div className='password-box'>
                    <label>Password</label>
                    <div className='password-input-box'>
                        <input 
                            type={inputType} 
                            placeholder='password'
                            value={password}
                            onChange={event => setPassword(event.target.value)}/>
                        {inputType === 'text' 
                            ? <GoEye className='input-icon' onClick={showPassword}/> 
                            : <GoEyeClosed className='input-icon' onClick={showPassword}/>
                        }
                    </div>
                </div>
                <button className='auth-button' onClick={loginWithEmail}>
                    Login with email
                </button>
                <div className='or-line'>---- or other variant ----</div>
                <button className='auth-button' onClick={googleRegistration}>
                    Login with Google 
                </button>
            </form>
            <div className='question'>
                <p className='question-text'>Don't have an account ?</p>
                <Link 
                    to='/signup' 
                    className='question-link'
                    onClick={async() => {
                        await dispatch(closeModal())
                        dispatch(openModal())
                    }}>
                        Sign Up
                </Link>
            </div>        
        </div>
    )}

export default Login_page;