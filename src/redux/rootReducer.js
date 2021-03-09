import { combineReducers } from 'redux'
import { productReducer } from './productReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  posts: productReducer,
  app: appReducer
})
