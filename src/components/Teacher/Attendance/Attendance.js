import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';
import classNames from '../../../utils/classNames';

import './Attendance.css';

const diffToday = date => {
  return date.diff(moment(), 'days');
};

const isToday = date => {
  return diffToday(date) === 0;
};

const Attendance = ({ course, lessons, students, redirectToOverview, submit }) => {
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

      <Table definition>
        <Table.Header className="Attendance__Header">
          <Table.Row>
            <Table.HeaderCell />
            {lessons.map(lesson => (
              <Table.HeaderCell
                key={lesson.id}
                className={classNames(isToday(moment(lesson.start)) && 'Attendance__HeaderCell__Today')}
              >
                {moment(lesson.start).format('D/M')}
                {isToday(moment(lesson.start))}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {students.map(student => (
            <Table.Row key={student.id}>
              <Table.Cell>{student.name}</Table.Cell>
              {lessons.map(lesson => {
                const attendance =
                  lesson.attendances &&
                  lesson.attendances.find(({ userId }) => userId === student.id);

                const isPresent = attendance && attendance.isPresent === true;

                return (
                  <Table.Cell
                    onClick={event => submit(event, attendance, lesson)}
                    key={attendance.id}
                    className={classNames(isToday(moment(lesson.start)) && 'Attendance__HeaderCell__Today')}
                  >
                    {diffToday(moment(lesson.start)) <= 0 && (
                      <div
                        className={classNames(
                          'Attendance__Icon',
                          isPresent ? 'Attendance__IconPresent' : 'Attendance__IconNotPresent',
                        )}
                      >
                        <Icon name={isPresent ? 'checkmark' : 'close'} />
                      </div>
                    )}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

Attendance.propTypes = {
  redirectToOverview: PropTypes.func.isRequired,
};

export default Attendance;
