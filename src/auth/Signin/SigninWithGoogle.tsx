import React from 'react'
import { useAppDispatch } from '../../redux/store'
import { setCurrentUser, setUserAvatar } from '../../redux/reduxState'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../../firebase.config';
import { signInWithPopup } from "firebase/auth"
import './signin-with-google.scss'


const SigninWithGoogle = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const googleRegistration = async () => {
        try {
            const user = await signInWithPopup(auth, provider)
            dispatch(setCurrentUser(user.user.email))
            dispatch(setUserAvatar(user.user.photoURL))
            navigate("/")
        }
        catch(error) {console.error(error)} 
    }

    return (
        <button className='auth-button' onClick={googleRegistration}>
            Login with Google 
        </button>
    )
}

export default SigninWithGoogle;