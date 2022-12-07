import React from 'react'
import ReactDom from 'react-dom'
import { IChildrenProps } from '../types/global.types'

const ModalWrapper: React.FC<IChildrenProps> = ({children}) => {

    return ReactDom.createPortal(
        <>
            <div className='modal'>
                MODAL{ children }
            </div>
        </>,
        document.getElementById('modal') as HTMLElement
    )
}

export default ModalWrapper;