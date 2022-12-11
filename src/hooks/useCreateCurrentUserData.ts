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
                let extractName;
                if( user.displayName === null && user.email) {
                    let rawName = user.email?.substring(0,user.email.indexOf('@'))
                    extractName = rawName?.charAt(0).toUpperCase() + rawName?.slice(1)
                }
                else{
                    extractName = user.displayName 
                }
                dispatch(createCurrentUser({
                    userName: extractName,
                    email: user.email,
                    userID: user.uid,
                    userPhotoURL: user.photoURL,
                }))
                console.log(user)
            }
            else{
                dispatch(deleteCurrentUser())
            }
        })
    }, [])
};

