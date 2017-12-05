import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea, Icon } from 'semantic-ui-react';

const FeedbackForm = ({ cancel, save, onChange}) => {
  const placeholder =
    'KENNIS (wis wat niet van toepassing is)\n' +
    'Snapt het niet / Heeft soms moeilijkheden / Snapt het / Extreem goed\n' +
    ' \n' +
    'MOTIVATIE (geef waarde tussen 1 en 3)\n' +
    'Enthousiasme:\n' +
    'Medewerking:\n' +
    'Opletten:\n' +
    ' \n' +
    'Extra opmerking(en):';

  return (
    <div className="FeedbackForm">
      <Form>
        <Form.Field control={TextArea} label="Opmerking" autoHeight onChange={onChange} />
        <Form.Group className="alignRight">
          <Form.Field control={Button} color="red" onClick={cancel}>Cancel</Form.Field>
          <Form.Field control={Button} primary onClick={save}>Voeg toe</Form.Field>
        </Form.Group>
      </Form>
      <div className="clearfix"/>
    </div>
  );
};

FeedbackForm.propTypes = {
  toggleFeedbackForm: PropTypes.func.isRequired,
};

export default FeedbackForm;
