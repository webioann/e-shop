import React from 'react'
import { useFetchProductsQuery } from '../redux/fakestoreApi'
import ProductCard from './ProductCard'
import '../style/shop-page.scss'

const Shop_page = () => {

    const { data: products } = useFetchProductsQuery('')

    if( products ) {
        return (
            <section className='shop-page'>
                <ul className='product-list'>
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </ul>
            </section>
        )
    }
    else { return null }
}

export default Shop_page;