import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';

import './Attendance.css';

const Attendance = ({ course, lessons, students, redirectToOverview, submit }) => {
  return (
    <div className="Attendance">
      <Button className="Attendance__Back" labelPosition="left" icon="left chevron" content="Terug" onClick={redirectToOverview} />
      <h1>Aanwezigheden {course.name}</h1>
      <h2>Vul hier de aanwezigheid in</h2>

      <Table definition>
        <Table.Header className="Attendance__Header">
          <Table.Row>
            <Table.HeaderCell />
            {lessons.map(lesson => (
              <Table.HeaderCell key={lesson.id}>
                {moment(lesson.start).format('D/M')} - {lesson.id}
              </Table.HeaderCell>
            ))}
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {students.map(student => (
            <Table.Row key={student.id}>
              <Table.Cell>{student.name} {student.id}</Table.Cell>
              {lessons.map(lesson => {
                const attendance = lesson.attendances && lesson.attendances.find(({ userId, isPresent }) => userId === student.id && isPresent === true);
                const isPresent = attendance && attendance.isPresent != null;

                return (
                  <Table.Cell onClick={(event) => submit(event, student, lesson, isPresent)}>
                    {isPresent
                      ? 'Y'
                      : 'N'
                    }
                  </Table.Cell>
                );
              })}
              <Table.Cell className="Attendance__Edit">
                <Icon name="pencil" size="large" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};


Attendance.propTypes = {
  course: PropTypes.object.isRequired,
  redirectToOverview: PropTypes.func.isRequired,
};

export default Attendance;
