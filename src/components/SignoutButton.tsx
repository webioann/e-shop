import React from 'react'
import { useAppDispatch } from '../redux/store'
import { removeCurrentUser, deleteUserAvatar } from '../redux/reduxState'
import { signOut } from "firebase/auth"
import { auth } from '../firebase.config';
import '../style/signout-button.scss'

const SignoutButton = () => {

    const dispatch = useAppDispatch()

    const signOutUser = async () => {
        try {
            await signOut(auth)
            dispatch(removeCurrentUser())
            dispatch(deleteUserAvatar())
        }
        catch(error) {console.log(error)}
    }

    return (
        <button onClick={signOutUser} className={`link light-sign-out`}>
            Sing Out
        </button>
    )
}

export default SignoutButton;