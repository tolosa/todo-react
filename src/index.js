import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pages from './redux-flow/reducers';
import axios from 'axios';
const store = createStore(pages, applyMiddleware(thunk));



axios.defaults.baseURL = 'https://todo-react-leo.firebaseio.com/';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
