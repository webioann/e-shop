import React from 'react'
import { useAppDispatch } from '../Redux/store'
import { putUser, setUserPhoto } from '../Redux/reduxSlice'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from "firebase/auth"
import { doc, setDoc } from 'firebase/firestore'
import { auth, provider, db } from '../firebase.config'
import '../CSS/sign-google.scss'

const GoogleAuth: React.FC = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(putUser(result.user.email))
            dispatch(setUserPhoto(result.user.photoURL))
        })
        .catch((error) => {console.error(error)} )
        navigate('/')
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(putUser(result.user.email))
            dispatch(setUserPhoto(result.user.photoURL))
            const user = result.user.email 
            if( typeof user === 'string' ) {
                setDoc(doc(db, user, "saved_coins"), { watch_list: [] })
            }
        })
        .catch((error) => {console.error(error)} )
        navigate('/')
    }

    return (
        <button className='btn' onClick={loginWithGoogle}>
            Login with Google
        </button>
    )
}
export default GoogleAuth;