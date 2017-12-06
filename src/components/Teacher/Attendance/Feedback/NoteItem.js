import React from 'react';
import {Item, Button, Icon} from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import moment from 'moment/min/moment-with-locales';
import FeedbackEditForm from './FeedbackEditForm';

const NoteItem = ({note, editComment, toggleEditing, onChange}) => {
  moment.locale('nl');
  return (
    <Item className="NoteItem">
      <Item.Content>
        <Item.Header as='a'>{moment(note.updated_at).fromNow()}</Item.Header>
        <Item.Description>
          { (note.editable && !note.isEditing) &&
            <Button size="tiny" icon floated="right" onClick={() => toggleEditing(note)}>
              <Icon name='edit' />
            </Button>
          }

          { note.isEditing &&
            <FeedbackEditForm note={note} editComment={editComment} toggleEditing={toggleEditing} onChange={onChange} />
          }

          { !note.isEditing && renderHTML(note.content)}
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default NoteItem;
