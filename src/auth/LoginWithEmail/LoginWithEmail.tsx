import React from 'react'
import { useAppDispatch } from '../../redux/store'
import { setCurrentUser, setUserAvatar } from '../../redux/reduxState'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.config'
import { IAuthButtonProps } from '../../types/auth.types'
import './login-with-email.scss'

const LoginWithEmail: React.FC<IAuthButtonProps> = ({ email, password, setWarning }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const loginWithEmail = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
            dispatch(setCurrentUser(user.user.email))
        }
        catch(error){
            console.log(error)
            setWarning(true)
        }
    }

    return (
            <button className='auth-button' onClick={loginWithEmail}>
            Login with email
        </button>
    )
}

export default LoginWithEmail;