import React from 'react';
import moment from 'moment';
import { Table, Checkbox } from 'semantic-ui-react';

import classNames from '../../../../utils/classNames';
import { isToday, diffToday } from '../../../../functions/dateHelpers';

const StudentCell = (attendance, lesson, submit) => {
  const isPresent = attendance && attendance.isPresent === true;

  return (
    <Table.Cell
      onClick={event => submit(event, attendance, lesson, 'CHILD')}
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
          <Checkbox checked={isPresent} defaultChecked={isPresent} />
        </div>
      )}
    </Table.Cell>
  );
};

export default StudentCell;
