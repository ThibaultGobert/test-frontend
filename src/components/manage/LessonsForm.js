import React from 'react';
import MultipleSelectInput from '../shared/MultipleSelectInput';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const LessonsForm = ({onChange}) => {
  return (
    <Form>
      <MultipleSelectInput
        label="Level"
        name="level"
        placeholder="selecteer level"
        onChange={onChange}
        options={[{value: 1, text: 1},{value: 2, text: 2},{value: 3, text: 3}]}
      />
    </Form>
  );
};

export default LessonsForm;
