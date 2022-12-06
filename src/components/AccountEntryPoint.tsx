import React, { useState } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from "react-router-dom"
import SignoutButton from './SignoutButton';
import { FaUserCircle } from 'react-icons/fa';
import '../style/account-entry-point.scss'

const AccountEntryPoint = () => {

    const { currentUser, userAvatar } = useAppSelector(state => state.redux)

    if ( currentUser ) {
        return (
            <>
                <Link to="/account" className='account'>
                    <div className='img-wrapper'>
                        { userAvatar !== null ? (<img src={userAvatar} alt='user photo'/>) : <FaUserCircle/> }
                    </div>
                    <span className='user-name'>{currentUser}</span>
                </Link>
                <SignoutButton/>
            </>
        )
    }
    else {
        return (
            <>
                <Link to="/login" className='link'>Login</Link>
                <Link to="/signup" className='link'>Sign Up</Link>
                <FaUserCircle/>
            </>
        )
    }
}

export default AccountEntryPoint;