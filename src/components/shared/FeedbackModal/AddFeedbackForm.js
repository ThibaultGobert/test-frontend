import React from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import { Button, Form, Icon, Message } from 'semantic-ui-react';

import { ADD } from './FeedbackActionType';

class FeedbackForm extends React.Component {
  constructor(...props) {
    super(...props);
    const placeholder = "<p>KENNIS:&nbsp;</p><p>MOTIVATIE:&nbsp;</p><p>ENTHOUSIASME:&nbsp;</p><p>MEDEWERKING:&nbsp;</p><p>OPLETTEN:&nbsp;</p><p>EXTRA OPMERKINGEN:&nbsp;</p>";
    this.state = {
      value: RichTextEditor.createValueFromString(placeholder, 'html')
    }
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html'),
        this.props.note,
        ADD
      );
    }
  };

  render() {
    const { cancel, save} = this.props;
    return (
      <div className="FeedbackForm">
        <Form>
          <Message>
            <Icon name="info" />
            We werken verder aan een meer geavanceerd feedback systeem,
             we vragen je om bij het toevoegen van een nieuwe opmerking,
             de structuur van de template niet te wijzigen.
            Geef op elk onderwerp (m.u.v. extra opmerkingen) een score op 5 (1 laagste, 5 hoogste score).
             Bij de extra opmerkingen kan je nuttige extra info opgeven: bv. kind wil een level overslaan,
             of gaat wellicht stoppen, ...
            <br />
            Een nieuwe opmerking is aanpasbaar tot 1 uur na de toevoeging ervan.
          </Message>
          <RichTextEditor
            className="RichTextEditor"
            value={this.state.value}
            onChange={this.onChange}
          />
          <Form.Group className="alignRight">
            <Form.Field control={Button} color="red" onClick={cancel}>Cancel</Form.Field>
            <Form.Field control={Button} primary onClick={save}>Voeg toe</Form.Field>
          </Form.Group>
        </Form>
        <div className="clearfix"/>
      </div>
    );
  }

};

FeedbackForm.propTypes = {
  toggleFeedbackForm: PropTypes.func.isRequired,
};

export default FeedbackForm;
