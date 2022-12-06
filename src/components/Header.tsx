import React, { useState } from 'react'
import { useAppSelector } from '../redux/store'
import { Link } from "react-router-dom"
import SignoutButton from './SignoutButton';
import { BiUser } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import '../style/header.scss'

const Header = () => {

    const user = useAppSelector(state => state.redux.currentUser)

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <SignoutButton/>
            </nav>

            { user ? (
                    <>
                        <Link to="/account" className={`account ${theme}-account`}>
                            <div className='img-wrapper'>
                                { user_photo !== null ? (<img src={user_photo} alt='user photo'/>) : <FaRegUser/> }
                            </div>
                            <span className='user-name'>{user}</span>
                        </Link>
                        <SignOut/>
                    </>
                    ) : (
                    <>
                        <Link to="/signin" className={`link ${theme}-nl`} onClick={() => setActive(false)}>Login</Link>
                        <Link to="/signup" className={`link ${theme}-nl`} onClick={() => setActive(false)}>Sign Up</Link>
                    </>
                ) 
            }
            <div className='account-icon'>
                <Link to="account">
                    <BiUser/>
                    <p>{user}</p>
                </Link>
            </div>
            <div className='cart-icon'>
                <Link to="cart">
                    <IoCartOutline/>
                </Link>
            </div>
        </header>
    )
}

export default Header;