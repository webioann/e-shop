import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AccountEntryPoint from './AccountEntryPoint'
import CartIcon from './CartIcon'
import '../style/header.scss'

const Header = () => {

    return (
        <header>
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