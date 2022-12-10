import React from 'react'
import ModalCloseButton from '../../components/ModalCloseButton/ModalCloseButton'
import ModalPortal from '../../layout/ModalPortal/ModalPortal'
import './cart-page.scss'

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