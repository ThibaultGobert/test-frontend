import React from 'react';
import moment from 'moment';
import { Table, Checkbox } from 'semantic-ui-react';

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
        <div
          className={classNames(
            'Attendance__Icon',
            isPresent === null
              ? 'Attendance__NotFilledIn'
              : isPresent ? 'Attendance__IconPresent' : 'Attendance__IconNotPresent',
          )}
        >
          <Checkbox
            onClick={event => {
              submit(event, attendance, lesson, 'CHILD');
            }}
            disabled={disabled}
            checked={!(isPresent === null)}
            defaultChecked={!(isPresent === null)}
          />
        </div>
      )}
    </Table.Cell>
  );
};

export default StudentCell;
