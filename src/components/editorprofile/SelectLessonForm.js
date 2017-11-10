import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';

const SelectLessonForm = ({onSubmit, clanOptions, levelOptions, typeOptions, lessonOptions, versionOptions, onChange, initialValues}) => {
  return (
    <div className="select-lesson-form">
      <Form onSubmit={onSubmit}>
        <Form.Group widths='equal'>
          <Form.Dropdown name="groups" label='Selecteer clans' placeholder='Clans' fluid multiple search selection options={clanOptions} onChange={onChange} defaultValue={initialValues.groups}/>
          <Form.Dropdown name="levels" label='Selecteer levels' placeholder='Levels' fluid multiple search selection options={levelOptions} onChange={onChange} defaultValue={initialValues.levels}/>
          <Form.Dropdown name="types" label='Selecteer types' placeholder='Types' fluid multiple search selection options={typeOptions} onChange={onChange} defaultValue={initialValues.types}/>
        </Form.Group>

        <Form.Group>
          <Form.Dropdown name="orders" label='Selecteer les' placeholder='Les' fluid multiple search selection options={lessonOptions}  width={12} onChange={onChange} defaultValue={initialValues.orders}/>
          <Form.Dropdown name="version" label='Selecteer versie' placeholder='Versie' fluid search selection options={versionOptions}  width={4} onChange={onChange} defaultValue={initialValues.version}/>
        </Form.Group>

        <Form.Button floated='right' type='Submit' >Filter</Form.Button>
        <div className="clearfix" />
      </Form>
    </div>
  );
};

SelectLessonForm.propTypes = {
  onSubmit: PropTypes.func
};

export default SelectLessonForm;
