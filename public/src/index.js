import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../actions'
import {SIGNIN_SUCCESS} from '../actions'

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

const token=localStorage.getItem('token')
if(token) {
  store.dispatch({type: SIGNIN_SUCCESS})
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'))

