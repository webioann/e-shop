import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { incremented } from '../redux/reduxState';
import { Link } from "react-router-dom"
import { IoCartOutline } from 'react-icons/io5';
import '../style/cart-icon.scss'

const CartIcon = () => {

    const cartCount = useAppSelector(state => state.redux.cartCount)
    const dispatch = useAppDispatch()

    return (
        <div className='cart-icon'>
            { cartCount > 0 &&  <span className={cartCount > 9 ? 'badge long-badge' : 'badge'}>{cartCount}</span>}
            <Link to="/cart">
                <IoCartOutline 
                    size={24}
                    color='#212529' 
                    onClick={() => dispatch(incremented())}
                />
            </Link>
        </div>
    )
}

export default CartIcon;