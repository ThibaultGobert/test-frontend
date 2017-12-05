import React from 'react';
import NoteItem from './NoteItem';
import _ from 'lodash';

const NotesList = ({notes}) => {
  const sortedNotes = _.reverse(_.sortBy(notes, 'updated_at'));
  return (
    sortedNotes.map(note => {
      return (
        <NoteItem note={note}/>
      );
    })
  );
};

export default NotesList;

