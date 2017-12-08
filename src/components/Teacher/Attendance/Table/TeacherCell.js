import React from 'react';
import moment from 'moment';
import { Icon, Table } from 'semantic-ui-react';
import classNames from 'classnames';
import { isToday } from '../../../../functions/dateHelpers';

const TeacherCell = (attendance, lesson, submit) => {
  const isPresent = attendance && attendance.isPresent === true;

  return (
    <Table.Cell
      onClick={event => submit(event, attendance, lesson, 'TEACHER')}
      key={attendance.id}
      className={classNames(isToday(moment(lesson.start)) && 'Attendance__HeaderCell__Today')}
    >
      <div
        className={classNames(
          'Attendance__Icon',
          isPresent ? 'Attendance__IconPresent' : 'Attendance__IconNotPresent',
        )}
      >
        <Icon name={isPresent ? 'checkmark' : 'close'} />
      </div>
    </Table.Cell>
  );
};

export default TeacherCell;
