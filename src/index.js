/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './store'
import history from './history'
import App from './pages/index';
import * as serviceWorker from './serviceWorker';
import './global.less'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
          <App />
    </Router>
  </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
