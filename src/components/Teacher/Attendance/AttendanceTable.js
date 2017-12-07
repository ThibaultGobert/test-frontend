import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';

import Avatar from '../../shared/Avatar';
import isToday from '../../../functions/isToday';
import classNames from '../../../utils/classNames';

const AttendanceTable = ({ lessons, users, submit, renderCell }) => {
  return (
    <Table striped celled>
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
        {users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell>
              <div className="Attendance__User">
                <Avatar
                  url={user.avatarurlmedium}
                  gender={user.gender}
                  className="Attendance__Avatar"
                />
                <div className="Attendance__User__Info">
                  <div className="Attendance__User__Name">{user.name}</div>
                  <div className="Attendance__User__Extra">{user.grade}</div>
                </div>
              </div>
            </Table.Cell>
            {lessons.map(lesson => {
              const attendance =
                lesson.attendances && lesson.attendances.find(({ userId }) => userId === user.id);
              return renderCell(attendance, lesson, submit);
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default AttendanceTable;
