import React from 'react'
import { Link } from "react-router-dom"
import { useAppDispatch } from '../../redux/store'
import { openModal } from '../../redux/modelSlice'
import './navigation.scss'

const Navigation = () => {

    const dispatch = useAppDispatch()

    return (
        <nav className='navigation'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/shop" className='nav-link'>Shop</Link>
            <Link 
                to="/account" 
                className='nav-link'
                onClick={() => dispatch(openModal())}>
                Account
            </Link>
            <Link 
                to="/cart" 
                className='nav-link' 
                onClick={() => dispatch(openModal())}>
                    On cart page
            </Link>
        </nav>
    )
}

export default Navigation;