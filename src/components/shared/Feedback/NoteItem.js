import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import moment from 'moment/min/moment-with-locales';
import FeedbackEditForm from './FeedbackEditForm';

const NoteItem = ({ note, editNote, toggleEditing, onChange }) => {
  moment.locale('nl');
  return (
    <Item className="NotesList__Item">
      <Item.Content>
        <Item.Header className="NotesList__Item__Header">{moment(note.updated_at).fromNow()} geplaatst door {note.author_type}</Item.Header>
        <Item.Description>
          {note.editable &&
            !note.isEditing && (
              <Button size="tiny" icon floated="right" onClick={() => toggleEditing(note)}>
                <Icon name="edit" />
              </Button>
            )}

          {note.isEditing && (
            <FeedbackEditForm
              note={note}
              editNote={editNote}
              toggleEditing={toggleEditing}
              onChange={onChange}
            />
          )}

          {!note.isEditing && renderHTML(note.content)}
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default NoteItem;
