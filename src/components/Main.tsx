import React from 'react'
import '../style/main.scss'
import { IChildrenProps } from '../types/global.types'

const Main: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <main className='main g-stretched'>
            { children }
        </main>
    )
}

export default Main;