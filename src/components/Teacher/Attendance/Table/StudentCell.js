import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import Checkbox from './Checkbox';

import classNames from '../../../../utils/classNames';
import { isToday, diffToday } from '../../../../functions/dateHelpers';

const StudentCell = ({ attendance, lesson, submit, isAssistent }) => {
  const { isPresent } = attendance;
  const disabled = diffToday(moment(lesson.start)) > 0 || isAssistent;
  return (
    <Table.Cell
      key={attendance.id}
      className={classNames(
        'Attendance__Cell',
        disabled && 'Attendance__Cell--Disabled',
        isToday(moment(lesson.start)) && 'Attendance__HeaderCell__Today', disabled,
      )}
      onClick={event => {
        if (!disabled) {
          submit(event, attendance, lesson, 'CHILD');
        }
      }}
    >
      {attendance && <Checkbox isPresent={isPresent} />}
    </Table.Cell>
  );
};

export default StudentCell;
