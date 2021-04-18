import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

const ProductList = ({ syncProducts }) => {
  return (
    <div className='card-container'>
      {syncProducts.map(product => <Product product={product} key={product.id} />)}
    </div>
    // {/* <ul className='card-container'>
    //   {syncProducts.map(product => <Product product={product} key={product.id} />)}
    // </ul> */}
  )
}

const mapStateToProps = state => {
  return {
    syncProducts: state.products.products
  }
}

export default connect(mapStateToProps, null)(ProductList)
