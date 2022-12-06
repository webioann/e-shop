import React, { useState } from 'react'
import { Link } from "react-router-dom"
import SignoutButton from './SignoutButton';
import { BiUser } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import '../style/header.scss'

const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <SignoutButton/>
            </nav>
            <div className='account-icon'>
                <Link to="account">
                    <BiUser/>
                    {/* <p>{auth.currentUser?.email}</p> */}
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