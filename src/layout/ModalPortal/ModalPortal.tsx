import React from 'react'
import ReactDOM from 'react-dom'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { closeModal } from '../../redux/modelSlice';
import { useNavigate } from 'react-router-dom'
import { IChildrenProps } from '../../types/global.types'
import './modal-portal.scss'

const ModalPortal: React.FC<IChildrenProps> = ({children}) => {

    const modalVisibility = useAppSelector(state => state.model.modalVisibility)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return ReactDOM.createPortal(
        <div 
            className={modalVisibility ? 'modal' : 'hidden-modal'} 
            onClick={() => {
                dispatch(closeModal())
            }}>
            <div className='overlay'></div>
            <div className='content'>
                { children }
            </div>
        </div>,
        document.getElementById('modal-portal') as HTMLElement
    )
}

export default ModalPortal;