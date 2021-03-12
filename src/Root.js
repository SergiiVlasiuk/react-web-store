import React from 'react'
import { Provider } from 'react-redux'
import rootReducer from './services/rootReducer'
import { compose, createStore } from 'redux'

// import store from './services/store'


const store = createStore(rootReducer
  , compose(
    // applyMiddleware(
    //   thunk, forbiddenWordsMiddleware, saga
    // ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


// const Root = ({ children, initialState = {} }) => (
const Root = ({ children }) => (
  <React.StrictMode>
    <Provider store={store}>
      {children}
    </Provider>
  </React.StrictMode>
)

export default Root
