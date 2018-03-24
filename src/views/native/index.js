import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
const createStoreWithMiddleware = applyMiddleware()(createStore)

import App from './components/app'
import reducers from '../../reducers'

export default class NativeApp extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    )
  }
}