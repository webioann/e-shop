import React from 'react'
import { useFetchProductsQuery } from '../../redux/fakestoreApi'

const Shop_page = () => {

    const { data: products } = useFetchProductsQuery('')

    if( products ) {
        return (
            <ul>
                {products.map((product) => (
                    <li >{ product.price } $

                    </li>
                ))}
            </ul>
        )
    }
    else { return null }
}

export default Shop_page;