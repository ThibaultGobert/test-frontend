import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorkshopStudentHeader from '../shared/headers/WorkshopStudentHeader';

import Bootstrap from './Bootstrap';
import Overview from './Overview';

const Student = ({ isBootstrapped, user }) => {
  if (!isBootstrapped) {
    return <Bootstrap />;
  }

  return (
    <div className="page-wrapper">
      <WorkshopStudentHeader user={user} />
      <div className="page">
        <Switch>
          <Route path="/workshopprofile/overview" component={Overview}/>
        </Switch>
      </div>
    </div>
  );
};

export default Student;
