import React, { useState, useEffect } from 'react'
// import { useAppSelector, useAppDispatch } from '../../redux/store'
// import { setCurrentUser, setUserAvatar } from '../../redux/reduxState'
// import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import Popup from '../../components/Popup/Popup'
// import { signInWithEmailAndPassword } from "firebase/auth"
// import { auth } from '../../firebase.config';
import './form-registration.scss'

interface IFormPropsFunc {
    setEmail: (value: string) => void;
    setPassword: (value: string) => void
}

const FormRegistration: React.FC = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [inputType,setInputType] = useState<string>('password')
    const [warning,setWarning] = useState<boolean>(false)
    // const navigate = useNavigate()
    // const dispatch = useAppDispatch()

    // const loginWithEmail = async () => {
    //     try {
    //         const user = await signInWithEmailAndPassword(auth, email, password)
    //         navigate(-1)
    //         dispatch(setCurrentUser(user.user.email))
    //     }
    //     catch(error){
    //         console.log(error)
    //         setWarning(true)
    //     }
    // }

    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }
    
    const closePopup = () => {
        setWarning(false)
    }

    return (
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
    </form>
)
}

export default FormRegistration