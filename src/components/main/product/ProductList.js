import React from 'react'
import { productList } from '../../../data/products'
import Product from './Product'

const ProductList = () => {
  return (
    <div className='card-container'>
      {productList.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList
