import React from 'react'
import ReactDOM from 'react-dom'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { modalVisibilityController } from '../redux/modelSlice';

import { IChildrenProps } from '../types/global.types'
import '../style/modal-portal.scss'

const ModalPortal: React.FC<IChildrenProps> = ({children}) => {

    // const cartCount = useAppSelector(state => state.model.cartCount)
    const dispatch = useAppDispatch()

    return ReactDOM.createPortal(
        <div className='modal'>
            <div className='overlay'></div>
            <div className='content'>
                { children }
            </div>
        </div>,
        document.getElementById('modal-portal') as HTMLElement
    )
}

export default ModalPortal;