import React from 'react';
import _ from 'lodash';
import NotesApi from '../../../api/notes';
import Feedback from './Feedback';
import { ADD, EDIT } from './FeedbackActionType';

class FeedbackContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.toggleFeedbackForm = this.toggleFeedbackForm.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.editComment = this.editComment.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      loading: true,
      feedbackFormVisible: false,
      comment: '',
      notes: _.keyBy(
        this.props.notes.map(note => {
          note.isEditing = false;
          return note;
        }),
        'id',
      ),
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      notes: _.keyBy(
        newProps.notes.map(note => {
          note.isEditing = false;
          return note;
        }),
        'id',
      ),
    });
  }

  onChange(html, note, actionType) {
    switch (actionType) {
      case EDIT:
        const newNotes = _.merge({}, this.state.notes, { [note.id]: { editcontent: html } });
        this.setState({ notes: newNotes });
        break;
      case ADD:
        this.setState({ comment: html });
        break;
    }
  }

  fetchNotes() {
    const { fetchNotesStart, fetchNotesSuccess, fetchNotesError } = this.props.actions;

    fetchNotesStart();
    this.setState({ loading: true });
    NotesApi.getNotes(this.props.user.id)
      .then(data => {
        fetchNotesSuccess(data);
        this.setState({ loading: false });
      })
      .catch(error => {
        fetchNotesError(error);
        this.setState({ loading: false });
      });
  }

  toggleFeedbackForm() {
    const { feedbackFormVisible } = this.state;
    this.setState({
      feedbackFormVisible: !feedbackFormVisible,
    });
  }

  saveComment() {
    const { addNoteStart, addNoteSuccess, addNoteError } = this.props.actions;

    const { studentId } = this.props;

    addNoteStart();
    const data = {
      content: this.state.comment,
      object_id: studentId,
      object_type: 'Child',
    };
    NotesApi.addNote(data)
      .then(data => {
        addNoteSuccess(data);
        this.toggleFeedbackForm();
        this.fetchNotes();
      })
      .catch(error => {
        addNoteError(error);
      });
  }

  editComment(noteId) {
    const { editNoteStart, editNoteSuccess, editNoteError } = this.props.actions;

    editNoteStart();
    const data = {
      content: this.state.notes[noteId].editcontent,
      note_id: noteId,
    };
    NotesApi.editNote(data)
      .then(data => {
        editNoteSuccess(data);
        this.fetchNotes();
      })
      .catch(error => {
        editNoteError(error);
      });
  }

  toggleEditing(note) {
    note.isEditing = !note.isEditing;
    const newNotes = Object.assign({}, this.state.notes, { [note.id]: note });
    this.setState({ notes: newNotes });
  }

  render() {
    return (
      <Feedback
        {...this.props}
        {...this.state}
        toggleFeedbackForm={this.toggleFeedbackForm}
        saveComment={this.saveComment}
        editComment={this.editComment}
        toggleEditing={this.toggleEditing}
        onChange={this.onChange}
        notes={_.values(this.state.notes)}
      />
    );
  }
}

export default FeedbackContainer;
