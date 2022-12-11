import React from 'react'
import { IProduct } from '../types/fakeStoreApi.types'
import '../style/product-card.scss'

interface IProductCardProps {
    product: IProduct
}

const ProductCard: React.FC<IProductCardProps> = ( {product} ) => {

    return (
        <div className='product-card'>
            <h4 className='product-title'>{product.title}</h4>
            <div className='image-container'>
                <img src={product.image} className='product-image' alt='product image'/>
            </div>
            <h3 className='product-price'>
                Price {product.price} $
            </h3>
            <p className='product-discription'>{product.description}</p>
        </div>
    )
}

export default ProductCard;