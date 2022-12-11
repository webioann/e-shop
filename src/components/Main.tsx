import React from 'react'
import { IChildrenProps } from '../types/global.types'
import '../style/main.scss'

const Main: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <main className='main g-stretched'>
            { children }
        </main>
    )
}

export default Main;