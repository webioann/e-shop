import React from 'react'
import { Link } from "react-router-dom"
import { useAppDispatch } from '../../redux/store'
import { openModal } from '../../redux/modelSlice';
import './navigation.scss'

const Navigation = () => {

    const dispatch = useAppDispatch()

    return (
        <nav className='navigation'>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/account" onClick={() => dispatch(openModal())}>Account</Link>
            <Link to="/cart" onClick={() => dispatch(openModal())}>On cart page</Link>
        </nav>
    )
}

export default Navigation;