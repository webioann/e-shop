import React from 'react'
import { IChildrenProps } from '../../types/global.types'
import './header.scss'

import { useAppSelector, useAppDispatch } from '../../redux/store'


const Header: React.FC<IChildrenProps> = ({ children }) => {

    const { currentUser, userAvatar } = useAppSelector(state => state.redux)

    return (
        <header className={ currentUser ? 'header red' : 'header' }>
            { children }
        </header>
    )
}

export default Header;