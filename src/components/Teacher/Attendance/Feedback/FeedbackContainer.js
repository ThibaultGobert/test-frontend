import React from 'react';
import NotesApi from '../../../../api/mocks/mockNotes';
import Feedback from './Feedback';

class FeedbackContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.toggleFeedbackForm = this.toggleFeedbackForm.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.state = {
      feedbackFormVisible: false,
      comment: ''
    };
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

  render() {
    return (
      <Feedback
        {...this.props}
        {...this.state}
        toggleFeedbackForm={this.toggleFeedbackForm}
        saveComment={this.saveComment}
      />
    );
  }
}

export default FeedbackContainer;
