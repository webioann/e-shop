import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AccountEntryPoint from './AccountEntryPoint'
import { IoCartOutline } from 'react-icons/io5';
import '../style/header.scss'

const Header = () => {

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>

            <AccountEntryPoint/>

            <div className='cart-icon'>
                <Link to="cart">
                    <IoCartOutline/>
                </Link>
            </div>
        </header>
    )
}

export default Header;