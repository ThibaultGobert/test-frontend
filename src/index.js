import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import './styles/styles.css';
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import Preloader from "./Preloader";

const store = configureStore();
export default store;
// Provider: when store changes --> this re-renders all the necessary components
render(
  <Preloader store={store}/>,
  document.getElementById('app')
);
