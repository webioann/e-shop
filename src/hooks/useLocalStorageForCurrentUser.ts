import { useEffect } from 'react'
import { useAppDispatch } from '../redux/store'
import { createCurrentUser, deleteCurrentUser } from '../redux/authSlice'
import { ICurrentUser } from '../types/auth.types'

export const useLocalStorageForCurrentUser = ( data: ICurrentUser | null ) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        if( data !== null ){
            localStorage.setItem('storedCurrentUser', JSON.stringify(data))
        }
        else {
            localStorage.removeItem('storedCurrentUser');
        }
    })
};