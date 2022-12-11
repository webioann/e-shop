import React from 'react'
import { IChildrenProps } from '../types/global.types'
import '../style/header.scss'

import { useAppSelector, useAppDispatch } from '../redux/store'


const Header: React.FC<IChildrenProps> = ({ children }) => {

    const currentUser = useAppSelector(state => state.auth.currentUser)

    return (
        <header className={ currentUser ? 'header red' : 'header' }>
            { children }
        </header>
    )
}

export default Header;