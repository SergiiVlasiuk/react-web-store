import { combineReducers } from 'redux'
import productsReducer from './products/reducer'
// import { appReducer } from '../redux/appReducer'

// export const rootReducer = combineReducers({
export default combineReducers({
  products: productsReducer
  // ,
  // app: appReducer
})
