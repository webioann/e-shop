import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AccountEntryPoint from '../../components/AccountEntryPoint/AccountEntryPoint'
import CartIcon from '../../components/CartIcon/CartIcon'
import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
            
            <AccountEntryPoint/>
            <CartIcon/>
        </header>
    )
}

export default Header;