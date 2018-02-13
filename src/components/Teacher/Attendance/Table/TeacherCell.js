import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import classNames from 'classnames';
import { isToday, diffToday } from '../../../../functions/dateHelpers';
import Checkbox from './Checkbox';

const TeacherCell = ({ attendance, lesson, submit }) => {
  const { isPresent } = attendance;
  const disabled = diffToday(moment(lesson.start)) > 0;

  return (
    <Table.Cell
      key={attendance.id}
      className={classNames(isToday(moment(lesson.start)) && 'Attendance__HeaderCell__Today')}
    >
      {attendance && (
        <Checkbox
          disabled={disabled}
          isPresent={isPresent}
          onClick={event => {
            submit(event, attendance, lesson, 'TEACHER');
          }}
        />
      )}
    </Table.Cell>
  );
};

export default TeacherCell;
