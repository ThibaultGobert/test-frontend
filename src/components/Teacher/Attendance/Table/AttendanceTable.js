import React from 'react';
import moment from 'moment';
import { Table, Message, Icon } from 'semantic-ui-react';

import Avatar from '../../../shared/Avatar';
import { isToday } from '../../../../functions/dateHelpers';
import classNames from '../../../../utils/classNames';

const AttendanceTable = ({ lessons, users, submit, isAssistent, renderCell, isStudent, showModal }) => {
  if (!users) {
    return (
      <Message>
        <p>Geen personen beschikbaar</p>
      </Message>
    );
  }
  return (
    <Table striped celled className="Attendance__Table">
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
              <div
                className={`Attendance__User ${isStudent ? 'link' : ''}`}
                onClick={() => {
                  showModal(user.id);
                }}
              >
                <Avatar
                  url={user.avatarurlmedium}
                  gender={user.gender}
                  className="Attendance__Avatar"
                />
                <div className="Attendance__User__Info">
                  <div className="Attendance__User__Name" >
                    {isStudent && (
                      <p>
                        {user.firstname} {user.lastname}
                        {(user.totalParentNotes !== 0) &&
                          <Icon className="blue info circle" title="De notes van dit kind bevatten een note van de ouders" />
                        }
                      </p>
                    )}
                    {!isStudent && <p> {user.firstName} {user.lastName} </p>}
                  </div>
                  <div className="Attendance__User__Extra">{user.grade}</div>
                </div>
              </div>
            </Table.Cell>
            {lessons.map(lesson => {
              const attendance =
                lesson.attendances && lesson.attendances.find(({ userId }) => userId === user.id);
              return renderCell({ attendance, lesson, submit, isAssistent });
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default AttendanceTable;
