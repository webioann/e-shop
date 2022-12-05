import React from 'react'
import { Link } from "react-router-dom"
import '../style/header.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/login">Login</Link>
            </nav>

        </header>
    )
}

export default Header;