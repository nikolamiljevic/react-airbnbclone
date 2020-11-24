import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/rootReducer';
import reduxPromiser from 'redux-promise'

const store = createStore(rootReducer,applyMiddleware(reduxPromiser));

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


