import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ClassGroups from './ClassGroups';
import Calendar from './Calendar';
import CalendarDetail from './Calendar/CalendarDetail';
import ClassList from './ClassList';
import Attendance from './Attendance';
import InfoPage from './InfoPage';

const Teacher = () => {
  return (
    <Switch>
      <Route path="/teacherprofile/overview" component={ClassGroups}/>
      <Route path="/teacherprofile/calendar" component={Calendar}/>
      <Route path="/teacherprofile/calendar/:eventId" component={CalendarDetail}/>
      <Route path="/teacherprofile/classlist/:id" component={ClassList}/>
      <Route path="/teacherprofile/feedback/:id" component={Attendance}/>
      <Route path="/teacherprofile/info" component={InfoPage}/>
    </Switch>
  );
};

export default Teacher;
