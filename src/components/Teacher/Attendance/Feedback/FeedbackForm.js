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
      <Icon name="close" className="FeedbackForm__Icon" onClick={cancel}/>
      <Form onSubmit={save}>
        <Form.Field control={TextArea} label="Opmerking" autoHeight onChange={onChange} />
        <Form.Field className="alignRight" control={Button}>Voeg toe</Form.Field>
        <div className="clearfix" />
      </Form>
    </div>
  );
};

FeedbackForm.propTypes = {
  toggleFeedbackForm: PropTypes.func.isRequired,
};

export default FeedbackForm;
