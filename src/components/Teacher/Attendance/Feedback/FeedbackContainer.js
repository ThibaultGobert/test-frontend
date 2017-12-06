import React from 'react';
import NotesApi from '../../../../api/notes';
import Feedback from './Feedback';
import _ from 'lodash';
import {ADD, EDIT} from './FeedbackActionType';

class FeedbackContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.toggleFeedbackForm = this.toggleFeedbackForm.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      feedbackFormVisible: false,
      comment: '',
      notes: _.keyBy(this.props.notes.map(note => {
        note.isEditing = false;
        return note;
      }), 'id')
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      {notes: _.keyBy(newProps.notes.map(note => {
        note.isEditing = false;
        return note;
      }), 'id')});
  }

  componentDidMount() {
    const {
      fetchNotesStart,
      fetchNotesSuccess,
      fetchNotesError,
    } = this.props.actions;

    fetchNotesStart();
    NotesApi.getNotes(this.props.user.id).then(data => {
      fetchNotesSuccess(data);
    }).catch(error => {
      fetchNotesError(error);
    })
  }

  toggleFeedbackForm() {
    const { feedbackFormVisible } = this.state;
    this.setState({
      feedbackFormVisible: !feedbackFormVisible,
    });
  }

  saveComment() {
    // save comment with sumo api call
  }

  editComment() {

  }

  onChange(html, note, actionType) {
    switch (actionType) {
      case EDIT:
        const newNotes = _.merge({}, this.state.notes, {[note.id]: {editcontent: html}});
        this.setState({ notes: newNotes});
      case ADD:

    }

  }

  toggleEditing(note) {
    note.isEditing = !note.isEditing;
    const newNotes = Object.assign({}, this.state.notes, {[note.id]: note});
    this.setState({notes: newNotes});
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
