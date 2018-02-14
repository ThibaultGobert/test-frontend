import React from 'react';
import { Icon } from 'semantic-ui-react';
import classNames from '../../../../utils/classNames';

const Checkbox = ({ isPresent }) => {
  return (
    <div
      className={classNames(
        'Attendance__Icon',
        isPresent === null
          ? 'Attendance__NotFilledIn'
          : isPresent ? 'Attendance__IconPresent' : 'Attendance__IconNotPresent',
      )}
    >
      {isPresent && <Icon name="checkmark" />}
      {(isPresent !== null && !isPresent) && <Icon name="close" />}
    </div>
  );
};

export default Checkbox;
