import React from 'react';
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react';
import classNames from '../../../../utils/classNames';

const Checkbox = ({ disabled, isPresent, onClick }) => {
  return (
    <div
      className={classNames(
        'Attendance__Icon',
        isPresent === null
          ? 'Attendance__NotFilledIn'
          : isPresent ? 'Attendance__IconPresent' : 'Attendance__IconNotPresent',
      )}
    >
      <SemanticCheckbox
        onClick={onClick}
        disabled={disabled}
        checked={!(isPresent === null)}
        defaultChecked={!(isPresent === null)}
      />
    </div>
  );
};

export default Checkbox;
