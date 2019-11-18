import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './store/reducer';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://todo-react-leo.firebaseio.com/';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
  // TODO: re enable dev tools
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
