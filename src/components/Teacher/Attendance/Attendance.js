import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import StudentCell from './Table/StudentCell';
import TeacherCell from './Table/TeacherCell';
import AttendanceTable from './Table/AttendanceTable';

import './Attendance.css';

const Attendance = ({ course, teachers, students, redirectToOverview, ...props }) => {
  return (
    <div className="Attendance">
      <Button
        className="Attendance__Back"
        labelPosition="left"
        icon="left chevron"
        content="Terug"
        onClick={redirectToOverview}
      />
      <h1>Aanwezigheden {course.name}</h1>
      <h2>Duidt de aanwezigheden aan</h2>
      <h3>Leraren</h3>
      <AttendanceTable renderCell={TeacherCell} users={teachers} {...props} />

      <h3>Leerlingen</h3>
      <AttendanceTable renderCell={StudentCell} users={students} isStudent {...props} />
    </div>
  );
};

Attendance.propTypes = {
  redirectToOverview: PropTypes.func.isRequired,
};

export default Attendance;
