import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import classNames from 'classnames';
import { isToday, diffToday } from '../../../../functions/dateHelpers';
import Checkbox from './Checkbox';

const TeacherCell = ({ attendance, lesson, submit, isAssistent }) => {
  const { isPresent } = attendance;
  const disabled = diffToday(moment(lesson.start)) > 0 || isAssistent;

  return (
    <Table.Cell
      key={attendance.id}
      className={classNames(
        'Attendance__Cell',
        disabled && 'Attendance__Cell--Disabled',
        isToday(moment(lesson.start)) && 'Attendance__HeaderCell__Today',
      )}
      onClick={event => {
        if (!disabled) {
          submit(event, attendance, lesson, 'TEACHER');
        }
      }}
    >
      {attendance && <Checkbox isPresent={isPresent} />}
    </Table.Cell>
  );
};

export default TeacherCell;
