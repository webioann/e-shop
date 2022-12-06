import React, { useState } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from "react-router-dom"
import SignoutButton from './SignoutButton';
import { IoCartOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import '../style/header.scss'

const Header = () => {

    const { currentUser, userAvatar } = useAppSelector(state => state.redux)

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>

            { currentUser ? (
                    <>
                        <Link to="/account" className='account'>
                            <div className='img-wrapper'>
                                { userAvatar !== null ? (<img src={userAvatar} alt='user photo'/>) : <FaUserCircle/> }
                            </div>
                            <span className='user-name'>{currentUser}</span>
                        </Link>
                        <SignoutButton/>
                    </>
                    ) : (
                    <>
                        <Link to="/login" className='link'>Login</Link>
                        <Link to="/signup" className='link'>Sign Up</Link>
                        <FaUserCircle/>
                    </>
                ) 
            }
            <div className='cart-icon'>
                <Link to="cart">
                    <IoCartOutline/>
                </Link>
            </div>
        </header>
    )
}

export default Header;