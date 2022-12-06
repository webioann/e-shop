import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { IoCartOutline } from 'react-icons/io5';
import '../style/cart-icon.scss'

const CartIcon = () => {

    return (
        <div className='cart-icon'>
            <Link to="/cart">
                <IoCartOutline/>
            </Link>
        </div>
    )
}

export default CartIcon