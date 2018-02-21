import _ from 'lodash';
import { Segment, Loader, Message, Menu } from 'semantic-ui-react';

import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, editNote, toggleEditing, onChange, loading, isAddingNote }) => {
  const sortedNotes = _.reverse(_.sortBy(notes, 'updated_at'));
  if (loading) {
    return (
      <Segment basic className="NotesList__Loader">
        <Loader active inline="centered" />
      </Segment>
    );
  }

  if ((!sortedNotes || _.isEmpty(sortedNotes)) && !isAddingNote) {
    return (
      <Message
        className="NotesList__NoNotesMessage"
        icon="info"
        header="Geen opmerkingen"
        content="Klik op bovenstaande knop om een opmerking toe te voegen."
      />
    );
  }

  return (
    <div className="NotesList">
      {sortedNotes.map(note => {
        return (
          <NoteItem
            note={note}
            editNote={editNote}
            toggleEditing={toggleEditing}
            onChange={onChange}
            key={`note${note.id}`}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
