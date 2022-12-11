import React from 'react'
import { useAppDispatch } from '../redux/store'
import { deleteCurrentUser } from '../redux/authSlice'
import { signOut } from "firebase/auth"
import { auth } from '../firebase.config';
import '../style/signout-button.scss'

const SignoutButton = () => {

    const dispatch = useAppDispatch()

    const signOutUser = async () => {
        try {
            await signOut(auth)
            dispatch(deleteCurrentUser())
        }
        catch(error) {console.log(error)}
    }

    return (
        <button onClick={signOutUser} className='g-auth-button'>
            Singout
        </button>
    )
}

export default SignoutButton;