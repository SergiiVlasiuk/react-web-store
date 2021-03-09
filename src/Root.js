import React from 'react'
import { Provider } from 'react-redux'

// import store from './services/store'

const Root = ({ children, initialState = {} }) => (
  <React.StrictMode>
    {/* <Provider store={store(initialState)}> */}
    {children}
    {/* </Provider> */}
  </React.StrictMode>
)

export default Root
