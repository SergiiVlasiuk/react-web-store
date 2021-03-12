import { FETCH_PRODUCTS } from './actionTypes'
import productList from '../../data/products'

const initialState = {
  products: productList || []
}

export default function (state = initialState, action) {
  console.log("state and action: ", state, action)
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}
