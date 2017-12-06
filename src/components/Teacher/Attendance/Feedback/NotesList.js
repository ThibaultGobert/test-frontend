import React from 'react';
import NoteItem from './NoteItem';
import _ from 'lodash';

const NotesList = ({notes, editComment, toggleEditing, onChange}) => {
  const sortedNotes = _.reverse(_.sortBy(notes, 'updated_at'));
  return (
    sortedNotes.map(note => {
      return (
        <NoteItem note={note} editComment={editComment} toggleEditing={toggleEditing} onChange={onChange} key={"note" + note.id}/>
      );
    })
  );
};

export default NotesList;

