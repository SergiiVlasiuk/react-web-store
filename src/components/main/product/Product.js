import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
// import { addToCart } from '../../../services/cart/actions'
import { addToCart } from '../../../services/cart/actions'

const Product = ({ product, addToCart }) => {
  // const Product = ({ product }) => {
  const { id, name, description, price, currencyFormat, image } = product
  console.log('addToCart: ', addToCart
  )
  return (
    <div>
      <div className='card-item'>
        <div className="card-item__name card-item_text">{name}</div>
        <div className='card-item__description card-item_text'>{description}</div>
        <div className="card-item_image">
          <img src={image} />
        </div>
        <div className="card-item__price card-item_text">Price: {price} {currencyFormat}</div>
        {/* <div className="card-item__buy-btn" onClick={() => console.log('clicked', id)}>Add to cart</div> */}
        <div className="card-item__buy-btn" onClick={() => addToCart(product)}>Add to cart</div>
      </div>
    </div>
  )
}

const mapStateToProps = null
const mapDispatchToProps = {
  addToCart
  // createPost, showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
