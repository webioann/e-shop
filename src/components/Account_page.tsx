import React from 'react'
import ModalCloseButton from './ModalCloseButton'
import ModalPortal from './ModalPortal'
import '../style/account-page.scss'

const Account_page = () => {
    return (
        <ModalPortal>
            <div className='account-page'>
                <ModalCloseButton/>
                <p>Account_page</p>
            </div>
        </ModalPortal>
    )
}
export default Account_page;