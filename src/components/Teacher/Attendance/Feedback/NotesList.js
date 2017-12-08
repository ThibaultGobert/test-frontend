import React from 'react';
import NoteItem from './NoteItem';
import _ from 'lodash';
import {Segment, Loader} from 'semantic-ui-react';

const NotesList = ({notes, editNote, toggleEditing, onChange, loading}) => {
  const sortedNotes = _.reverse(_.sortBy(notes, 'updated_at'));
  if (loading) {
    return (
      <Segment basic className="NotesList__Loader">
        <Loader active inline='centered' />
      </Segment>    
    );
  }
  return (
    sortedNotes.map(note => {
      return (
        <NoteItem note={note} editNote={editNote} toggleEditing={toggleEditing} onChange={onChange} key={"note" + note.id}/>
      );
    })
  );
};

export default NotesList;

