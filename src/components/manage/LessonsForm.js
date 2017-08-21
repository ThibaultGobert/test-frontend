import React from 'react';
import MultipleSelectInput from '../shared/MultipleSelectInput';

const LessonsForm = ({onChange}) => {
  return (
    <form>
      <MultipleSelectInput
        name="levelId"
        label="Level"
        onChange={onChange}
        options={[{value: 1, text: 1},{value: 2, text: 2},{value: 3, text: 3}]}
      />
    </form>
  );
};

export default LessonsForm;
