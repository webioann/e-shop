import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import Popup from '../components/Popup'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
// import { doc, setDoc } from 'firebase/firestore'
import { auth, provider, db } from '../firebase.config';
import '../style/signup-page.scss'

const Login_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [inputType,setInputType] = useState<string>('password')
    const [warning,setWarning] = useState<boolean>(false)
    const navigate = useNavigate()

    const loginWithEmail = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
            console.log(`EMAIL USER ${JSON.stringify(user)}`)
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    const googleRegistration = async () => {
        try {
            const user = await signInWithPopup(auth, provider)
            navigate('/')
            console.log(`GOOGLE USER ${user}`);
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
                <button className='btn' onClick={loginWithEmail}>
                    Login with email
                </button>
                <button className='btn' onClick={googleRegistration}>
                    Login with Google 
                </button>
            </form>
            <div className='question'>
                <p className='q-text'>Don't have an account ?</p>
                <Link to='/signup' className='q-link'>Sing Up</Link>
            </div>        
        </div>
    )}

export default Login_page;