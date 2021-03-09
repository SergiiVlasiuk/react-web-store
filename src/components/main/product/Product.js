import React from 'react'
import Button from './Button'

const Product = ({ product }) => {
  const { id, name, description, price, currencyFormat, image } = product
  return (
    <div className='card-item'>
      <div className="card-item__name">{name}</div>
      <div className="card-item_image">
        <img src={image} alt={name} />
      </div>
      <div className='card-item__description'>{description}</div>
      <div className="card-item__price">Price: {price} {currencyFormat}</div>
      <div className="card-item__buy-btn">Add to cart</div>
    </div>
  )
}

export default Product
