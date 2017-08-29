import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './styles/styles.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/semantic/dist/semantic.min.css';
import Preloader from "./Preloader";

const store = configureStore();

// Provider: when store changes --> this re-renders all the necessary components
render(
  <Preloader store={store}/>,
  document.getElementById('app')
);
