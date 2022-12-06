import React from 'react'
// import { useAppSelector, useAppDispatch } from '../Redux/store'
// import { removeUser } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth"
import '../style/signout-button.scss'

const SignoutButton = () => {

    // const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    const signOutUser = async () => {
        try {
            const out = await signOut(auth)
            navigate("/")
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