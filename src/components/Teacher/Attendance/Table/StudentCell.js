import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import Checkbox from './Checkbox';

import classNames from '../../../../utils/classNames';
import { isToday, diffToday } from '../../../../functions/dateHelpers';

const StudentCell = ({ attendance, lesson, submit }) => {
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
          onClick={(event) => {
            submit(event, attendance, lesson, 'CHILD');
          }}
        />
      )}
    </Table.Cell>
  );
};

export default StudentCell;
