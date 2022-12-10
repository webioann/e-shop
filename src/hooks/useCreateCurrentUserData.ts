import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { createCurrentUser, deleteCurrentUser } from '../redux/authSlice'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from '../firebase.config'

export const useCreateCurrentUserData = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if( user ) {
                dispatch(createCurrentUser({
                    userName: user.displayName,
                    displayName: user.displayName,
                    email: user.email,
                    userID: user.uid,
                    userPhotoURL: user.photoURL,
                }))
            }
            else{
                dispatch(deleteCurrentUser())
            }
        })
    }, [])
};

