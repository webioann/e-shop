import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { setCurrentUser, setUserAvatar } from '../redux/reduxState'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import Popup from '../components/Popup'
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth"
// import { doc, setDoc } from 'firebase/firestore'
import { auth, provider, db } from '../firebase.config';
import '../style/signup-page.scss'

const Signup_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [inputType,setInputType] = useState<string>('password')
    const [warning,setWarning] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log(`UID === ${user.email}`)
    //         // dispatch(setCurrentUser(user.email))
    //         // dispatch(setUserAvatar(user.photoURL))
    //     } 
    //     else{
    //         console.log(`USER LOGOUT`);
    //     }
    // })

    const emailRegistration = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(setCurrentUser(user.user.email))
            navigate("/")
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
            navigate('/')
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
            <h1 className='header'>Sign Up</h1>
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
                <button className='btn' onClick={emailRegistration}>Sign Up</button>
                <button className='btn' onClick={googleRegistration}>
                    Sign Up with Google 
                </button>
            </form>
            <div className='question'>
                <p className='question-text'>Already have an account ?</p>
                <Link to='/login' className='question-link'>Login</Link>
            </div>
        </div>
    )
}

export default Signup_page;