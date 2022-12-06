import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase.config'
// import { deleteUserPhoto } from '../Redux/reduxSlice'

interface IRegisterFunctionParams {
    email: string
    password: string
    event: React.FormEvent
}

export const useLoginWithEmail = ( params: IRegisterFunctionParams ) => {

    const [user, setUser] = useState<string | null>(null)
    const navigate = useNavigate()

    const loginWithEmail = () => {
        params.event.preventDefault()
        // dispatch(deleteUserPhoto())
        signInWithEmailAndPassword(auth, params.email, params.password)
        .then(({user}) => {
            setUser(user.email)
        })
        .catch((error) => {
            console.log(error) 
        })
        navigate('/')   
    }
};
