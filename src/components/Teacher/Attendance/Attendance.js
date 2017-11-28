import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import './Attendance.css';

// <Button className="Attendance__Back" labelPosition="left" icon="left chevron" content="Terug" onClick={redirectToOverview} />
const Attendance = ({ lessons, students }) => {
  debugger;
  return (
    <div className="Attendance">
      <h1>Aanwezigheden</h1>
      <h2>Vul hier de aanwezigheid in</h2>

      <Table celled>
        <Table.Header className="Attendance__Header">
          <Table.Row>
            <Table.HeaderCell>Leerling</Table.HeaderCell>
            {lessons.map(lesson => (
              <Table.HeaderCell key={lesson.id}>
                {moment(lesson.start).format('D/M')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {students.map(student => (
            <Table.Row key={student.id}>
              <Table.Cell>{student.name}</Table.Cell>
              {lessons.map(lesson => (
                <Table.Cell>
                  {lesson.attendances.filter(attendance => attendance.userId === student.id)
                    ? 'Y'
                    : 'N'
                  }
                </Table.Cell>
              ))}
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
