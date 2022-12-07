import React, { useState } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from "react-router-dom"
import SignoutButton from './SignoutButton';
import { FaUserCircle } from 'react-icons/fa';
import '../style/account-entry-point.scss'

const AccountEntryPoint = () => {

    const { currentUser, userAvatar } = useAppSelector(state => state.redux)

    console.log(`USER --> ${currentUser}`)

    if ( currentUser ) {
        return (
            <div className='entry-point'>
                <Link to="/account" className='account'>
                    <div className='img-wrapper'>
                        { userAvatar !== null ? (<img src={userAvatar} alt='user photo'/>) : <FaUserCircle size={24}/> }
                    </div>
                    <span className='user-name'>{currentUser}</span>
                </Link>
                <SignoutButton/>
            </div>
        )
    }
    else {
        return (
            <div className='entry-point'>
                <Link to="/login" className='g-auth-button'>Login</Link>
                <Link to="/signup" className='g-auth-button'>Sign Up</Link>
            </div>
        )
    }
}

export default AccountEntryPoint;