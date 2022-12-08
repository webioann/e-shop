import React from 'react'
import ReactDOM from 'react-dom'
import { useAppSelector } from '../../redux/store'
import { IChildrenProps } from '../../types/global.types'
import './modal-portal.scss'

const ModalPortal: React.FC<IChildrenProps> = ({children}) => {

    const modalVisibility = useAppSelector(state => state.model.modalVisibility)

    return ReactDOM.createPortal(
        <div className={modalVisibility ? 'modal' : 'hidden-modal'}>
            <div className='overlay'></div>
            <div className='content'>
                { children }
            </div>
        </div>,
        document.getElementById('modal-portal') as HTMLElement
    )
}

export default ModalPortal;