import React from 'react'
import ModalCloseButton from '../../components/ModalCloseButton/ModalCloseButton'
import ModalPortal from '../../layout/ModalPortal/ModalPortal'
import './account-page.scss'

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