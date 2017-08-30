import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './styles/styles.css';
import Preloader from "./Preloader";
import {loadCourses} from "./actions/courses";

const store = configureStore();
store.dispatch(loadCourses());

// Provider: when store changes --> this re-renders all the necessary components
render(
  <Preloader store={store}/>,
  document.getElementById('app')
);
