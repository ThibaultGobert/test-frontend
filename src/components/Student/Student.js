import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as userRoles from '../../constants/roles';

import StudentHeader from '../shared/headers/StudentHeader';
import WorkshopStudentHeader from '../shared/headers/WorkshopStudentHeader';

import Bootstrap from './Bootstrap';
import Class from './Class';
import Home from './Home';
import Extra from './Extra';

const Student = ({ isBootstrapped, user }) => {
  if (!isBootstrapped) {
    return <Bootstrap />;
  }

  return (
    <div className="page-wrapper">
      { user.role === userRoles.WORKSHOP_STUDENT_ROLE && (
        <WorkshopStudentHeader user={user} />
      )}
      { user.role === userRoles.STUDENT_ROLE && (
        <StudentHeader user={user} />
      )}
      <div className="page">

        <Switch>
          <Route path="/studentprofile/class" component={Class}/>
          <Route path="/studentprofile/home" component={Home}/>
          <Route path="/studentprofile/extra" component={Extra}/>
        </Switch>
      </div>
    </div>
  );
};

export default Student;
