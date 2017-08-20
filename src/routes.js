import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ManagePage from "./components/manage/ManagePage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="manage" component={ManagePage} />
  </Route>
);

