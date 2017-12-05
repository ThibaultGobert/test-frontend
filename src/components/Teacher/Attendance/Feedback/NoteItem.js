import React from 'react';
import {Item, Button, Icon} from 'semantic-ui-react';
import renderHTML from 'react-render-html';
import moment from 'moment/min/moment-with-locales';
import FeedbackEditForm from './FeedbackEditForm';

const NoteItem = ({note}) => {
  moment.locale('nl');
  return (
    <Item className="NoteItem">
      <Item.Content>
        <Item.Header as='a'>{moment(note.updated_at).fromNow()}</Item.Header>
        <Item.Description>
          { note.editable  && <Button size="tiny" icon floated="right">
            <Icon name='edit' />
          </Button>}

          { note.isEditing &&
            <FeedbackEditForm />
          }

          {renderHTML(note.content)}
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default NoteItem;
