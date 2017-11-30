import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Table, Button, Icon } from 'semantic-ui-react';

import './Attendance.css';

const Attendance = ({ course, lessons, students, redirectToOverview}) => {
  return (
    <div className="Attendance">
      <Button className="Attendance__Back" labelPosition="left" icon="left chevron" content="Terug" onClick={redirectToOverview} />
      <h1>Aanwezigheden {course.name}</h1>
      <h2>Vul hier de aanwezigheid in</h2>

      <Table  definition>
        <Table.Header className="Attendance__Header">
          <Table.Row>
            <Table.HeaderCell />
            {lessons.map(lesson => (
              <Table.HeaderCell key={lesson.id}>
                {moment(lesson.start).format('D/M')}
              </Table.HeaderCell>
            ))}
          <Table.HeaderCell/>
        </Table.Row>
        </Table.Header>
        <Table.Body>
          {students.map(student => (
            <Table.Row key={student.id}>
              <Table.Cell>{student.name}</Table.Cell>
              {lessons.map(lesson => (
                <Table.Cell>
                  {lesson.attendances && lesson.attendances.filter(attendance => attendance.userId === student.id)
                    ? 'Y'
                    : 'N'
                  }
                </Table.Cell>
              ))}
              <Table.Cell className="Attendance__Edit">
                <Icon name="pencil" size="large" onClick={console.log('hello')}/>
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
  classList: PropTypes.array.isRequired,
  redirectToOverview: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Attendance;
