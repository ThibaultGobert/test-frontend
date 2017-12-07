import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';
import {ADD} from './FeedbackActionType';
import RichTextEditor from 'react-rte';

class FeedbackForm extends React.Component {
  constructor(...props) {
    super(...props);
    const placeholder = "<p><strong>KENNIS</strong> (wis wat niet van toepassing is):</p>\n" +
      "<p>Snapt het niet / Heeft soms moeilijkheden / Snapt het / Extreem goed&nbsp;</p>\n" +
      "<p><strong>MOTIVATIE</strong> (geef waarde tussen 1 en 3) :</p>\n" +
      "<p><strong>ENTHOUSIASME</strong>:&nbsp;</p>\n" +
      "<p><strong>MEDEWERKING</strong>:&nbsp;</p>\n" +
      "<p><strong>OPLETTEN</strong>:&nbsp;</p>\n" +
      "<p><strong>EXTRA OPMERKINGEN:</strong></p>";
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
