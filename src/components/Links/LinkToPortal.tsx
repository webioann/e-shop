import React from 'react'
import { Link } from "react-router-dom"
import { useAppDispatch } from '../../redux/store'
import { openModal } from '../../redux/modelSlice';

interface ILinkProps {
    to: string;
    title: string;
}

const LinkToPortal: React.FC<ILinkProps> = ({ to, title }) => {

    const dispatch = useAppDispatch()

    return (
        <Link to={to} onClick={() => dispatch(openModal())}>
            {title}
        </Link>    
    )
}

export default LinkToPortal;