import React from 'react'
import ModalCloseButton from './ModalCloseButton'
import ModalPortal from './ModalPortal'
import '../style/cart-page.scss'

const Cart_page = () => {
    return (
        <ModalPortal>
            <div className='cart-page'>
                <ModalCloseButton/>
                <p>Cart_page</p>
            </div>
        </ModalPortal>
    )
}
export default Cart_page;