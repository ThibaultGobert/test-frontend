import React from 'react';
import {Form, Button } from 'semantic-ui-react';
import {EDIT} from './FeedbackActionType';
import RichTextEditor from 'react-rte';

class FeedbackEditForm extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      value: RichTextEditor.createValueFromString(this.props.note.content, 'html')
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
        this.props.note, EDIT
      );
    }
  };

  render()
  {
    const {note, editNote, toggleEditing} = this.props;
    return (
      <Form>
        <RichTextEditor
          className="RichTextEditor"
          value={this.state.value}
          onChange={this.onChange}
        />
        <Form.Group>
          <Form.Field control={Button} color="red" onClick={() => toggleEditing(note)}>Cancel</Form.Field>
          <Form.Field control={Button} primary onClick={() => editNote(note.id)}>Wijzig</Form.Field>
        </Form.Group>
      </Form>
    );
  }
};

export default FeedbackEditForm;
