import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { openModal } from '../../redux/modelSlice';
import { Link } from "react-router-dom"
import SignoutButton from '../../auth/SignoutButton/SignoutButton';
import { FaUserCircle } from 'react-icons/fa';
import './account-entry-point.scss'

const AccountEntryPoint = () => {

    const currentUser = useAppSelector(state => state.auth.currentUser)
    const userAvatar = useAppSelector(state => state.auth?.currentUser?.currentUser_PhotoURL)
    const userName = useAppSelector(state => state.auth?.currentUser?.currentUser_Name)
    const dispatch = useAppDispatch()

    if ( currentUser ) {
        return (
            <div className='entry-point'>
                <Link to="/account" className='linkon-account'>
                    <div className='img-wrapper'>
                        { userAvatar ? (<img src={userAvatar} alt='user photo'/>) : <FaUserCircle size={24}/> }
                    </div>
                    <span className='user-name'>Hi, {userName}</span>
                </Link>
                <SignoutButton/>
            </div>
        )
    }
    else {
        return (
            <div className='entry-point'>
                <Link 
                    to="/login" 
                    className='g-auth-button' 
                    onClick={() => dispatch(openModal())}>
                        Login
                </Link>
                <Link 
                    to="/signup" 
                    className='g-auth-button' 
                    onClick={() => dispatch(openModal())}>
                        Sign Up
                </Link>
            </div>
        )
    }
}

export default AccountEntryPoint;