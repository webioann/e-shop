import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'

import { Link } from "react-router-dom"
import AccountEntryPoint from './AccountEntryPoint'
import CartIcon from './CartIcon'
import '../style/header.scss'

const Header = () => {
    const modal = useAppSelector(state => state.model.modalVisibility)
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                
                <h1>{modal ? 'TRUE' : 'FALSE'}</h1>

            </nav>
            
            <AccountEntryPoint/>
            <CartIcon/>
        </header>
    )
}

export default Header;