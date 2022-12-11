import React from 'react'
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../redux/store'
import { openModal } from '../redux/modelSlice'
import '../style/navigation.scss'

const Navigation = () => {

    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(state => state.auth.currentUser)

    return (
        <nav className='navigation'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/shop" className='nav-link'>Shop</Link>
            { currentUser && 
                <Link 
                    to="/profile" 
                    className='nav-link' 
                    onClick={() => dispatch(openModal())}>
                    Profile
                </Link>
            }
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