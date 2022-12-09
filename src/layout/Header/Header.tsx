import React from 'react'
import { IChildrenProps } from '../../types/global.types'
import './header.scss'

const Header: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <header className='header'>
            { children }
        </header>
    )
}

export default Header;