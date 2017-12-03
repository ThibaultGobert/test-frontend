import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App';
import configureStore from './store/configureStore';

import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';

/*
 * TODO: don't export the store.
 */
const store = configureStore();
export default store;

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
