import React from 'react'
import { Link } from "react-router-dom"

interface ILinkProps {
    to: string;
    title: string;
}

const LinkToPage: React.FC<ILinkProps> = ({ to, title }) => {
    return (
        <Link to={to}>
            {title}
        </Link>    
    )
}

export default LinkToPage;