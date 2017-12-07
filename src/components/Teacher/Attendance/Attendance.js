import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

import Avatar from '../../shared/Avatar';
import classNames from '../../../utils/classNames';

import renderStudentCell from './renderStudentCell';
import AttendanceTable from './AttendanceTable';

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

      <AttendanceTable renderCell={renderStudentCell} users={students} {...props}/>
    </div>
  );
};

Attendance.propTypes = {
  redirectToOverview: PropTypes.func.isRequired,
};

export default Attendance;
