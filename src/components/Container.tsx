import React from 'react'
import '../style/container.scss'
import { IChildrenProps } from '../types/global.types'

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