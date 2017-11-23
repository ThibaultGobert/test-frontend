import React from 'react';
import { Route } from 'react-router-dom';
import SlideViewer from './SlideViewer';

const SharedRoutes = () => {
  return <Route path="/slideviewer/:id/:type" component={SlideViewer} />;
};

export default SharedRoutes;
