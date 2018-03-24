import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
const createStoreWithMiddleware = applyMiddleware()(createStore)

import App from './components/app'
import reducers from '../../reducers'


export default App;
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'))