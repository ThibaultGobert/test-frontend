import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../shared/headers/TeacherHeader';

import Bootstrap from './Bootstrap';
import ClassGroups from './ClassGroups';
import Calendar from './Calendar';
import ClassList from './ClassList';
import Attendance from './Attendance';
import InfoPage from './Info';
import Profile from './Profile';
import Location from './Location';

const Teacher = ({ isBootstrapped, user }) => {
  if (!isBootstrapped) {
    return <Bootstrap />;
  }

  return (
    <div className="page-wrapper">
      <Header user={user} />
      <div className="page">
        <Switch>
          <Route path="/teacherprofile/overview" component={ClassGroups} />
          <Route path="/teacherprofile/calendar" exact component={Calendar} />
          <Route path="/teacherprofile/classlist/:id" component={ClassList} />
          <Route path="/teacherprofile/feedback/:id" component={Attendance} />
          <Route path="/teacherprofile/profile" component={Profile} />
          <Route path="/teacherprofile/locations/:id" component={Location} />
          <Route path="/teacherprofile/info" component={InfoPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Teacher;
