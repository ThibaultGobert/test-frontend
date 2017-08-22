import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LessonsPage from "./components/manage/LessonsPage";
import OverviewPage from "./components/teacherprofile/OverviewPage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="manage/lessons" component={LessonsPage} />
    <Route path="teacherprofile/overview" component={OverviewPage} />
  </Route>
);

