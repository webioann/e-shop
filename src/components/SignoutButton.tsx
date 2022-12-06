import React from 'react'
import { useAppDispatch } from '../redux/store'
import { removeCurrentUser } from '../redux/reduxState'
import { getAuth, signOut } from "firebase/auth"
import '../style/signout-button.scss'

const SignoutButton = () => {

    const dispath = useAppDispatch()
    const auth = getAuth()

    const signOutUser = async () => {
        try {
            await signOut(auth)
            dispath(removeCurrentUser())
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