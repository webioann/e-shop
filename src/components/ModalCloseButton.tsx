import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/store'
import { closeModal } from '../redux/modelSlice';
import { AiOutlineClose } from 'react-icons/ai'
import '../style/modal-close-button.scss'

const ModalCloseButton = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    return (
        <button
            className='close-button' 
            onClick={(e) => {
                e.stopPropagation()
                navigate(-1)
                dispatch(closeModal())
            }}>
            <AiOutlineClose color='red' size={24}/>
        </button>
    )
}

export default ModalCloseButton;