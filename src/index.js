/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './store/reducer'
import history from './histroy'
import './global.less'
import App from './pages/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
  )

ReactDOM.render(
  <Router histroy={history}>
    <Provider store={store}>
        <App />
    </Provider>
  </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
