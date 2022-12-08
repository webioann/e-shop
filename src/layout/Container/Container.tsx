import React from 'react'
import { IChildrenProps } from '../../types/global.types'
import './container.scss'

const Container: React.FC<IChildrenProps> = ({ children }) => {
    return (
        <section className='container-fluid'>
            <div className='container'>
                { children }
            </div>
        </section>
    )
}

export default Container;